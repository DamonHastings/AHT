import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  preferredDate: {
    type: Date,
  },
  preferredTime: {
    type: String,
  },
  message: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending',
  },
  confirmedDate: {
    type: Date,
  },
  confirmedTime: {
    type: String,
  },
}, {
  timestamps: true,
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment
