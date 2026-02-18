export default function TreatmentApproach({ treatmentApproaches }) {
  if (!treatmentApproaches || treatmentApproaches.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 
          className="font-heading text-4xl md:text-5xl font-semibold mb-6"
          style={{ color: '#3F1006' }}
        >
          My Therapeutic Approach
        </h2>
        
        <p 
          className="font-body text-lg md:text-xl leading-relaxed mb-10"
          style={{ color: '#43595D' }}
        >
          I integrate several therapeutic modalities to create a personalized treatment plan 
          that meets your unique needs and goals.
        </p>
        
        <div className="space-y-6">
          {treatmentApproaches.map((approach) => (
            <div key={approach._id} className="flex gap-4">
              <div 
                className="w-2 flex-shrink-0 rounded-full"
                style={{ backgroundColor: '#C2D9A0' }}
              />
              <div>
                <h3 
                  className="font-heading text-xl md:text-2xl font-semibold mb-2"
                  style={{ color: '#3F1006' }}
                >
                  {approach.name}
                </h3>
                {approach.description && (
                  <p 
                    className="font-body leading-relaxed"
                    style={{ color: '#43595D' }}
                  >
                    {approach.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
