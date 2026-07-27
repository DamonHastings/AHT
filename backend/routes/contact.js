import express from 'express'
import { sendContactEmail } from '../lib/email.js'

const router = express.Router()

// POST /api/contact - Contact form, compiled to email to the practitioner.
// Email-only (not persisted).
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message, company } = req.body

    // Honeypot: legitimate visitors never fill this hidden field. Respond 200 so
    // bots don't learn they were filtered, but skip emailing.
    if (company) {
      return res.status(200).json({ message: 'Contact form submitted successfully' })
    }

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' })
    }

    const result = await sendContactEmail({ name, email, phone, message })
    if (result.sent) {
      console.log('Contact email sent to practitioner')
    } else {
      console.error('Contact email NOT sent:', result.reason || result.error)
    }

    res.status(201).json({ message: 'Contact form submitted successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

export default router
