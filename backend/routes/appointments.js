import express from 'express'
import Appointment from '../models/Appointment.js'

const router = express.Router()

// POST /api/appointments - Create consultation request
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, preferredDate, preferredTime, message } = req.body

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' })
    }

    const appointment = new Appointment({
      name,
      email,
      phone: phone || '',
      preferredDate,
      preferredTime,
      message: message || '',
      status: 'pending',
    })

    await appointment.save()

    res.status(201).json({ 
      message: 'Appointment request submitted successfully',
      id: appointment._id 
    })
  } catch (error) {
    console.error('Appointment creation error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// GET /api/appointments - Get all appointments (future: add auth)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 })
    res.json(appointments)
  } catch (error) {
    console.error('Get appointments error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// GET /api/appointments/:id - Get single appointment
router.get('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' })
    }
    res.json(appointment)
  } catch (error) {
    console.error('Get appointment error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// PUT /api/appointments/:id - Update appointment
router.put('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' })
    }

    res.json({ 
      message: 'Appointment updated successfully',
      appointment 
    })
  } catch (error) {
    console.error('Update appointment error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// DELETE /api/appointments/:id - Cancel appointment
router.delete('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id)

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' })
    }

    res.json({ message: 'Appointment cancelled successfully' })
  } catch (error) {
    console.error('Delete appointment error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

export default router
