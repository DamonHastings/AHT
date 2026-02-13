export default function TreatmentApproach({ treatmentApproaches }) {
  if (!treatmentApproaches || treatmentApproaches.length === 0) return null

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-wood-300 mb-8">Treatment Approach</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {treatmentApproaches.map((approach) => (
            <div key={approach._id} className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
              <h3 className="font-semibold text-wood-300 mb-2">{approach.name}</h3>
              {approach.description && (
                <p className="text-neutral-400 text-sm">{approach.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
