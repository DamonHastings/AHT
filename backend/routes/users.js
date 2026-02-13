import express from 'express'
import User from '../models/User.js'

const router = express.Router()

// POST /api/users/register - User registration (future feature)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // TODO: Hash password before saving
    const user = new User({
      name,
      email,
      password, // In production, hash this
    })

    await user.save()

    res.status(201).json({ 
      message: 'User registered successfully',
      id: user._id 
    })
  } catch (error) {
    console.error('User registration error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// POST /api/users/login - User login (future feature)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    // TODO: Implement authentication logic with JWT
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // TODO: Verify password
    // TODO: Generate and return JWT token

    res.json({ 
      message: 'Login endpoint - authentication not yet implemented',
      user: { id: user._id, name: user.name, email: user.email }
    })
  } catch (error) {
    console.error('User login error:', error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

export default router
