import express from 'express'
import Contact from '../models/Contact.js'
import { sendContactEmail } from '../lib/email.js'

const router = express.Router()

// POST /api/contact - Submit contact form (persists + emails the practitioner)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message, company } = req.body

    // Honeypot: legitimate visitors never fill this hidden field. Respond 200 so
    // bots don't learn they were filtered, but skip persisting/emailing.
    if (company) {
      return res.status(200).json({ message: 'Contact form submitted successfully' })
    }

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' })
    }

    const contact = new Contact({
      name,
      email,
      phone: phone || '',
      message,
    })

    await contact.save()

    // Email the practitioner (no-op if mail transport isn't configured).
    sendContactEmail({ name, email, phone, message })
      .then((result) => {
        if (result.sent) {
          console.log('Contact email sent to practitioner')
        } else {
          console.error('Contact email NOT sent:', result.reason || result.error)
        }
      })
      .catch((err) => console.error('Contact email error:', err))

    res.status(201).json({
      message: 'Contact form submitted successfully',
      id: contact._id,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// GET /api/contact - Get all contact submissions (admin only, future: add auth)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    console.error('Get contacts error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

export default router
