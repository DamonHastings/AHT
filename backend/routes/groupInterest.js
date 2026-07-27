import express from 'express'
import { sendGroupInterestEmail } from '../lib/email.js'

const router = express.Router()

// POST /api/group-interest - forming-groups interest, compiled to email to the
// practitioner. Email-only (not persisted). Mirrors the appointments flow.
router.post('/', async (req, res) => {
  try {
    const { name, email, interests, format, notes, company } = req.body

    // Honeypot: legitimate visitors never fill this hidden field. Respond 200 so
    // bots don't learn they were filtered, but skip emailing.
    if (company) {
      return res.status(200).json({ message: 'Interest submitted successfully' })
    }

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' })
    }

    const result = await sendGroupInterestEmail({ name, email, interests, format, notes })
    if (result.sent) {
      console.log('Group interest email sent to practitioner')
    } else {
      // Log loudly so a missing/broken mail config surfaces instead of silently
      // dropping a real submission.
      console.error('Group interest email NOT sent:', result.reason || result.error)
    }

    res.status(201).json({ message: 'Interest submitted successfully' })
  } catch (error) {
    console.error('Group interest error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

export default router
