import express from 'express'
import { sendConsultationEmail } from '../lib/email.js'

const router = express.Router()

// POST /api/appointments - Consultation request, compiled to email to the
// practitioner. Email-only (not persisted).
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, preferredDate, preferredTime, message, company } = req.body

    // Honeypot: legitimate clients never fill this hidden field. Respond 200 so
    // bots don't learn they were filtered, but skip emailing.
    if (company) {
      return res.status(200).json({ message: 'Appointment request submitted successfully' })
    }

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' })
    }

    const result = await sendConsultationEmail({
      name,
      email,
      phone: phone || '',
      preferredDate: preferredDate || undefined,
      preferredTime: preferredTime || undefined,
      message: message || '',
    })
    if (result.sent) {
      console.log('Consultation email sent to practitioner')
    } else {
      console.error('Consultation email NOT sent:', result.reason || result.error)
    }

    res.status(201).json({ message: 'Appointment request submitted successfully' })
  } catch (error) {
    console.error('Appointment request error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

export default router
