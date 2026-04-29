import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Typography Explorer - Interactive font pairing preview
 * Test different Google Font combinations in context
 */

const fontPairings = [
  {
    id: 'sarah-pablo',
    name: 'Playfair Display + Roboto + Roboto Condensed',
    mood: 'Elegant Editorial',
    heading: 'Playfair Display',
    body: 'Roboto',
    googleFonts: 'family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Roboto:wght@300;400;500&family=Roboto+Condensed:wght@300;400;500;600',
    headingFont: '"Playfair Display", serif',
    bodyFont: '"Roboto", sans-serif',
  },
  {
    id: 'lora-opensans',
    name: 'Lora + Open Sans',
    mood: 'Warm & Calming',
    heading: 'Lora',
    body: 'Open Sans',
    googleFonts: 'family=Lora:wght@400;600;700&family=Open+Sans:wght@300;400;600',
    headingFont: '"Lora", serif',
    bodyFont: '"Open Sans", sans-serif',
  },
  {
    id: 'crimson-nunito',
    name: 'Crimson Text + Nunito Sans',
    mood: 'Classic & Compassionate',
    heading: 'Crimson Text',
    body: 'Nunito Sans',
    googleFonts: 'family=Crimson+Text:wght@400;600;700&family=Nunito+Sans:wght@300;400;600',
    headingFont: '"Crimson Text", serif',
    bodyFont: '"Nunito Sans", sans-serif',
  },
  {
    id: 'cormorant-montserrat',
    name: 'Cormorant Garamond + Montserrat',
    mood: 'Refined & Contemporary',
    heading: 'Cormorant Garamond',
    body: 'Montserrat',
    googleFonts: 'family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;600',
    headingFont: '"Cormorant Garamond", serif',
    bodyFont: '"Montserrat", sans-serif',
  },
  {
    id: 'merriweather-lato',
    name: 'Merriweather + Lato',
    mood: 'Grounded & Approachable',
    heading: 'Merriweather',
    body: 'Lato',
    googleFonts: 'family=Merriweather:wght@400;700;900&family=Lato:wght@300;400;700',
    headingFont: '"Merriweather", serif',
    bodyFont: '"Lato", sans-serif',
  },
]

function FontSelector({ selectedPairing, onSelectPairing }) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0">
            <label htmlFor="font-select" className="text-sm font-semibold text-gray-700 mr-3">
              Select Font Pairing:
            </label>
          </div>
          <select
            id="font-select"
            value={selectedPairing}
            onChange={(e) => onSelectPairing(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
          >
            {fontPairings.map((pairing) => (
              <option key={pairing.id} value={pairing.id}>
                {pairing.name} — {pairing.mood}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

FontSelector.propTypes = {
  selectedPairing: PropTypes.string.isRequired,
  onSelectPairing: PropTypes.func.isRequired,
}

function SampleLandingPage({ pairing }) {
  return (
    <div 
      style={{ 
        fontFamily: pairing.bodyFont,
      }}
    >
      {/* Hero Section */}
      <section className="relative" style={{ backgroundColor: '#E4EDF2' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              style={{ 
                fontFamily: pairing.headingFont,
                color: '#3F1006',
              }}
            >
              Find Your Path to Healing
            </h1>
            <p 
              className="text-xl lg:text-2xl mb-8 leading-relaxed"
              style={{ color: '#43595D' }}
            >
              Compassionate, evidence-based therapy for anxiety, depression, and life transitions. 
              You don&apos;t have to face life&apos;s challenges alone.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#65858C' }}
              >
                Schedule a Consultation
              </button>
              <button 
                className="px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:opacity-90"
                style={{ 
                  borderColor: '#65858C',
                  color: '#65858C',
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-4xl font-bold mb-6"
              style={{ 
                fontFamily: pairing.headingFont,
                color: '#3F1006',
              }}
            >
              A Safe Space for Growth and Healing
            </h2>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#43595D' }}>
              I believe that therapy is a collaborative journey. My approach combines evidence-based 
              techniques with a warm, non-judgmental environment where you can explore your thoughts, 
              feelings, and experiences at your own pace.
            </p>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#43595D' }}>
              Whether you&apos;re struggling with anxiety, navigating a difficult transition, or simply 
              seeking greater self-understanding, I&apos;m here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20" style={{ backgroundColor: '#F6F9FB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 
            className="text-4xl font-bold mb-12 text-center"
            style={{ 
              fontFamily: pairing.headingFont,
              color: '#3F1006',
            }}
          >
            Areas of Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Anxiety & Stress',
                description: 'Learn effective strategies to manage worry, reduce stress, and regain a sense of calm and control in your daily life.',
              },
              {
                title: 'Depression',
                description: 'Work through feelings of sadness, loss of interest, and low energy with compassionate, evidence-based support.',
              },
              {
                title: 'Life Transitions',
                description: 'Navigate major life changes such as career shifts, relationship changes, or personal growth with guidance and support.',
              },
            ].map((specialty, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 
                  className="text-2xl font-semibold mb-4"
                  style={{ 
                    fontFamily: pairing.headingFont,
                    color: '#65858C',
                  }}
                >
                  {specialty.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#43595D' }}>
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-4xl font-bold mb-6"
              style={{ 
                fontFamily: pairing.headingFont,
                color: '#3F1006',
              }}
            >
              My Therapeutic Approach
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#43595D' }}>
              I integrate several therapeutic modalities to create a personalized treatment plan 
              that meets your unique needs and goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div 
                  className="w-2 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: '#C2D9A0' }}
                />
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ 
                      fontFamily: pairing.headingFont,
                      color: '#3F1006',
                    }}
                  >
                    Cognitive Behavioral Therapy (CBT)
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#43595D' }}>
                    Identify and change negative thought patterns that contribute to emotional distress.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div 
                  className="w-2 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: '#C2D9A0' }}
                />
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ 
                      fontFamily: pairing.headingFont,
                      color: '#3F1006',
                    }}
                  >
                    Mindfulness-Based Techniques
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#43595D' }}>
                    Develop present-moment awareness to reduce anxiety and increase emotional regulation.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div 
                  className="w-2 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: '#C2D9A0' }}
                />
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ 
                      fontFamily: pairing.headingFont,
                      color: '#3F1006',
                    }}
                  >
                    Person-Centered Therapy
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#43595D' }}>
                    Build self-awareness and personal growth in a supportive, non-judgmental environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#65858C' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 
            className="text-4xl font-bold mb-6 text-white"
            style={{ fontFamily: pairing.headingFont }}
          >
            Ready to Take the First Step?
          </h2>
          <p className="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto">
            Reaching out for support is a sign of strength. Let&apos;s work together to help you 
            achieve your goals and live a more fulfilling life.
          </p>
          <button 
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:opacity-90"
            style={{ 
              backgroundColor: '#C2D9A0',
              color: '#3F1006',
            }}
          >
            Book Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  )
}

SampleLandingPage.propTypes = {
  pairing: PropTypes.shape({
    headingFont: PropTypes.string.isRequired,
    bodyFont: PropTypes.string.isRequired,
  }).isRequired,
}

export function TypographyExplorer() {
  const [selectedPairingId, setSelectedPairingId] = useState(fontPairings[0].id)
  const selectedPairing = fontPairings.find(p => p.id === selectedPairingId)

  // Load Google Fonts dynamically
  useEffect(() => {
    // Remove previous font link if exists
    const existingLink = document.getElementById('google-fonts-typography-explorer')
    if (existingLink) {
      existingLink.remove()
    }

    // Add new font link
    const link = document.createElement('link')
    link.id = 'google-fonts-typography-explorer'
    link.rel = 'stylesheet'
    link.href = `https://fonts.googleapis.com/css2?${selectedPairing.googleFonts}&display=swap`
    document.head.appendChild(link)

    return () => {
      const linkToRemove = document.getElementById('google-fonts-typography-explorer')
      if (linkToRemove) {
        linkToRemove.remove()
      }
    }
  }, [selectedPairing])

  return (
    <div className="min-h-screen bg-gray-50">
      <FontSelector 
        selectedPairing={selectedPairingId}
        onSelectPairing={setSelectedPairingId}
      />
      
      {/* Info Banner */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <p className="text-sm text-blue-900">
            <strong>Currently viewing:</strong> {selectedPairing.name} — {selectedPairing.mood}
            {' • '}
            <span className="text-blue-700">
              Headings: {selectedPairing.heading} • Body: {selectedPairing.body}
            </span>
          </p>
        </div>
      </div>

      <SampleLandingPage pairing={selectedPairing} />
    </div>
  )
}

export default TypographyExplorer
