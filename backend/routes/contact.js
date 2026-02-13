import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body

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

    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      id: contact._id 
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
