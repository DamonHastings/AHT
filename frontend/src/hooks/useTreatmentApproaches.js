import { useState, useEffect } from 'react'
import sanityClient from '../utils/sanityClient'

export function useTreatmentApproaches() {
  const [treatmentApproaches, setTreatmentApproaches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchTreatmentApproaches() {
      try {
        const query = `*[_type == "treatmentApproach"] | order(name asc){
          _id,
          name,
          description
        }`
        
        const data = await sanityClient.fetch(query)
        setTreatmentApproaches(data)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetchTreatmentApproaches()
  }, [])

  return { treatmentApproaches, loading, error }
}
