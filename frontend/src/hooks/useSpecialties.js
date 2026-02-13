import { useState, useEffect } from 'react'
import sanityClient from '../utils/sanityClient'

export function useSpecialties() {
  const [specialties, setSpecialties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchSpecialties() {
      try {
        const query = `*[_type == "specialty"] | order(category desc, name asc){
          _id,
          name,
          category,
          description
        }`
        
        const data = await sanityClient.fetch(query)
        setSpecialties(data)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetchSpecialties()
  }, [])

  return { specialties, loading, error }
}
