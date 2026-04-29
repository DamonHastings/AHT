import { useState } from 'react'
import { apiUrl } from '../../utils/api'

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
      const response = await fetch(apiUrl('/api/contact'), {
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
    <section 
      id="contact" 
      className="py-20"
      style={{ backgroundColor: '#65858C' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 
          className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Ready to Take the First Step?
        </h2>
        <p 
          className="font-body text-xl mb-10 text-white opacity-90 max-w-2xl mx-auto leading-relaxed"
        >
          Reaching out for support is a sign of strength. Let's work together to help you 
          achieve your goals and live a more fulfilling life.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12 text-left max-w-5xl mx-auto">
          {/* Contact Information */}
          <div 
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 
              className="font-heading text-2xl font-semibold mb-6"
              style={{ color: '#3F1006' }}
            >
              Contact Information
            </h3>
            <div className="space-y-6">
              <div>
                <p 
                  className="font-body text-sm font-semibold mb-2"
                  style={{ color: '#7F7466' }}
                >
                  Phone
                </p>
                <a 
                  href={`tel:${therapist.phone}`} 
                  className="font-body text-xl font-semibold hover:underline transition-colors"
                  style={{ color: '#65858C' }}
                >
                  {therapist.phone}
                </a>
              </div>
              {therapist.email && (
                <div>
                  <p 
                    className="font-body text-sm font-semibold mb-2"
                    style={{ color: '#7F7466' }}
                  >
                    Email
                  </p>
                  <a 
                    href={`mailto:${therapist.email}`} 
                    className="font-body text-xl font-semibold hover:underline transition-colors break-all"
                    style={{ color: '#65858C' }}
                  >
                    {therapist.email}
                  </a>
                </div>
              )}
              {practice?.location && (
                <div>
                  <p 
                    className="font-body text-sm font-semibold mb-2"
                    style={{ color: '#7F7466' }}
                  >
                    Location
                  </p>
                  <p 
                    className="font-body text-base leading-relaxed"
                    style={{ color: '#43595D' }}
                  >
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

          {/* Contact Form */}
          <div 
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 
              className="font-heading text-2xl font-semibold mb-6"
              style={{ color: '#3F1006' }}
            >
              Send a Message
            </h3>
            {submitted ? (
              <div 
                className="border-2 rounded-lg p-6"
                style={{ 
                  backgroundColor: '#EBF2DF',
                  borderColor: '#C2D9A0'
                }}
              >
                <p 
                  className="font-body text-base"
                  style={{ color: '#414835' }}
                >
                  Thank you! Your message has been sent. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block font-body text-sm font-semibold mb-2"
                    style={{ color: '#3F1006' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 bg-white font-body"
                    style={{ 
                      borderColor: '#E5E7EB',
                      color: '#3F1006'
                    }}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className="block font-body text-sm font-semibold mb-2"
                    style={{ color: '#3F1006' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 bg-white font-body"
                    style={{ 
                      borderColor: '#E5E7EB',
                      color: '#3F1006'
                    }}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block font-body text-sm font-semibold mb-2"
                    style={{ color: '#3F1006' }}
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 bg-white font-body"
                    style={{ 
                      borderColor: '#E5E7EB',
                      color: '#3F1006'
                    }}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="message" 
                    className="block font-body text-sm font-semibold mb-2"
                    style={{ color: '#3F1006' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 bg-white font-body"
                    style={{ 
                      borderColor: '#E5E7EB',
                      color: '#3F1006'
                    }}
                  />
                </div>
                {error && (
                  <div 
                    className="border-2 rounded-lg p-3"
                    style={{ 
                      backgroundColor: '#FADBD8',
                      borderColor: '#e74c3c'
                    }}
                  >
                    <p 
                      className="font-body text-sm"
                      style={{ color: '#e74c3c' }}
                    >
                      {error}
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-4 rounded-lg font-body font-semibold transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: '#C2D9A0',
                    color: '#3F1006'
                  }}
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
