export default function Specialties({ specialties }) {
  if (!specialties || specialties.length === 0) return null

  const topSpecialties = specialties.filter(s => s.category === 'top')
  const expertiseAreas = specialties.filter(s => s.category === 'expertise')

  return (
    <section id="specialties" className="py-16 bg-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-wood-300 mb-8">Specialties and Expertise</h2>
        
        {topSpecialties.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-wood-300 mb-4">Top Specialties</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {topSpecialties.map((specialty) => (
                <div key={specialty._id} className="bg-white rounded-lg p-4 shadow-sm border border-neutral-200">
                  <h4 className="font-semibold text-wood-300 mb-2">{specialty.name}</h4>
                  {specialty.description && (
                    <p className="text-neutral-400 text-sm">{specialty.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {expertiseAreas.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-wood-300 mb-4">Expertise</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {expertiseAreas.map((specialty) => (
                <div key={specialty._id} className="bg-white rounded-lg p-3 shadow-sm border border-neutral-200">
                  <h4 className="font-medium text-wood-300">{specialty.name}</h4>
                  {specialty.description && (
                    <p className="text-neutral-400 text-xs mt-1">{specialty.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
