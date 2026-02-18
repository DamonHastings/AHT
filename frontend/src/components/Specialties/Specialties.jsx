export default function Specialties({ specialties }) {
  if (!specialties || specialties.length === 0) return null

  const topSpecialties = specialties.filter(s => s.category === 'top')
  const expertiseAreas = specialties.filter(s => s.category === 'expertise')

  return (
    <section 
      id="specialties" 
      className="py-20"
      style={{ backgroundColor: '#F6F9FB' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 
          className="font-heading text-4xl md:text-5xl font-semibold mb-12 text-center"
          style={{ color: '#3F1006' }}
        >
          Areas of Focus
        </h2>
        
        {topSpecialties.length > 0 && (
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {topSpecialties.map((specialty) => (
                <div 
                  key={specialty._id} 
                  className="bg-white rounded-lg p-8 shadow-sm border-2 transition-all hover:shadow-lg"
                  style={{ borderColor: '#E5E7EB' }}
                >
                  <h3 
                    className="font-heading text-2xl font-semibold mb-4"
                    style={{ color: '#65858C' }}
                  >
                    {specialty.name}
                  </h3>
                  {specialty.description && (
                    <p 
                      className="font-body leading-relaxed"
                      style={{ color: '#43595D' }}
                    >
                      {specialty.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {expertiseAreas.length > 0 && (
          <div>
            <h3 
              className="font-heading text-2xl font-semibold mb-6 text-center"
              style={{ color: '#65858C' }}
            >
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {expertiseAreas.map((specialty) => (
                <div 
                  key={specialty._id} 
                  className="bg-white rounded-lg p-4 shadow-sm border text-center"
                  style={{ borderColor: '#E5E7EB' }}
                >
                  <h4 
                    className="font-body font-semibold text-sm"
                    style={{ color: '#3F1006' }}
                  >
                    {specialty.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
