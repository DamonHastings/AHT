import { useState, useEffect } from 'react'
import sanityClient from '../utils/sanityClient'

export function useTherapistData() {
  const [therapist, setTherapist] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchTherapist() {
      try {
        const query = `*[_type == "therapist"][0]{
          _id,
          name,
          credentials,
          licenseNumber,
          phone,
          email,
          verified,
          welcomeMessage,
          bio,
          philosophy,
          slug,
          profileImage
        }`
        
        const data = await sanityClient.fetch(query)
        setTherapist(data)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetchTherapist()
  }, [])

  return { therapist, loading, error }
}
