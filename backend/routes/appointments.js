import express from 'express'
import Appointment from '../models/Appointment.js'
import { sendConsultationEmail } from '../lib/email.js'

const router = express.Router()

// POST /api/appointments - Create consultation request (V1: compiles to email when configured)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, preferredDate, preferredTime, message, company } = req.body

    // Honeypot: legitimate clients never fill this hidden field. Respond 200 so
    // bots don't learn they were filtered, but skip persisting/emailing.
    if (company) {
      return res.status(200).json({ message: 'Appointment request submitted successfully' })
    }

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' })
    }

    const appointment = new Appointment({
      name,
      email,
      phone: phone || '',
      preferredDate: preferredDate || undefined,
      preferredTime: preferredTime || undefined,
      message: message || '',
      status: 'pending',
    })

    await appointment.save()

    // V1: send compiled email to practitioner when PRACTITIONER_EMAIL + SMTP/MAILER_URL are set
    sendConsultationEmail(appointment).then((result) => {
      if (result.sent) {
        console.log('Consultation email sent to practitioner')
      } else if (result.reason) {
        console.log('Consultation email skipped:', result.reason)
      }
    }).catch((err) => {
      console.error('Consultation email error:', err)
    })

    res.status(201).json({
      message: 'Appointment request submitted successfully',
      id: appointment._id,
    })
  } catch (error) {
    console.error('Appointment creation error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

export default router
