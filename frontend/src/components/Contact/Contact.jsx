import { useState } from 'react'

export default function Contact({ therapist, practice }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setError('Failed to send message. Please try again or call directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!therapist) return null

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-wood-300 mb-8">Let's Connect</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-wood-300 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral-400 mb-1">Phone</p>
                <a href={`tel:${therapist.phone}`} className="text-primary-500 hover:text-primary-600 hover:underline text-lg transition-colors">
                  {therapist.phone}
                </a>
              </div>
              {therapist.email && (
                <div>
                  <p className="text-sm text-neutral-400 mb-1">Email</p>
                  <a href={`mailto:${therapist.email}`} className="text-primary-500 hover:text-primary-600 hover:underline text-lg transition-colors">
                    {therapist.email}
                  </a>
                </div>
              )}
              {practice?.location && (
                <div>
                  <p className="text-sm text-neutral-400 mb-1">Location</p>
                  <p className="text-wood-300">
                    {[
                      practice.location.address,
                      practice.location.city,
                      practice.location.state,
                      practice.location.zipCode,
                    ].filter(Boolean).join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-wood-300 mb-4">Send a Message</h3>
            {submitted ? (
              <div className="bg-natural-green-50 border border-natural-green-200 rounded-lg p-4">
                <p className="text-natural-green-700">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-wood-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-wood-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-wood-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-wood-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-wood-300 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-wood-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-wood-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-wood-300"
                  />
                </div>
                {error && (
                  <div className="bg-primary-50 border border-primary-200 rounded-md p-3">
                    <p className="text-primary-700 text-sm">{error}</p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-600 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
