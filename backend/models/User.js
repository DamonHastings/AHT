import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    // In production, ensure password is hashed before saving
  },
  role: {
    type: String,
    enum: ['client', 'admin'],
    default: 'client',
  },
  phone: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

export default User
