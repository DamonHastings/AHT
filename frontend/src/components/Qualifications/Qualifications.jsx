import { useState, useEffect } from 'react'
import sanityClient from '../../utils/sanityClient'

export default function Qualifications() {
  const [qualification, setQualification] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchQualification() {
      try {
        const query = `*[_type == "qualification"][0]{
          _id,
          education,
          yearsInPractice,
          livedExperience
        }`
        
        const data = await sanityClient.fetch(query)
        setQualification(data)
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    }

    fetchQualification()
  }, [])

  if (loading || !qualification) return null

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-wood-300 mb-8">Qualifications</h2>
        
        <div className="space-y-6">
          {qualification.education && qualification.education.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-wood-300 mb-4">Education</h3>
              <ul className="space-y-4">
                {qualification.education.map((edu, index) => (
                  <li key={index} className="border-l-4 border-primary-500 pl-4">
                    {edu.degree && <p className="font-semibold text-wood-300">{edu.degree}</p>}
                    {edu.school && <p className="text-wood-300">{edu.school}</p>}
                    {edu.specialization && <p className="text-neutral-400 italic">{edu.specialization}</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {qualification.yearsInPractice && (
            <div>
              <h3 className="text-xl font-semibold text-wood-300 mb-2">Years in Practice</h3>
              <p className="text-wood-300">{qualification.yearsInPractice} years</p>
            </div>
          )}

          {qualification.livedExperience && (
            <div>
              <h3 className="text-xl font-semibold text-wood-300 mb-2">Experience</h3>
              <p className="text-wood-300 whitespace-pre-line">{qualification.livedExperience}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
