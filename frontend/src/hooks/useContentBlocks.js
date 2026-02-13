import { useState, useEffect } from 'react'
import sanityClient from '../utils/sanityClient'

export function useContentBlocks(slug = null) {
  const [contentBlocks, setContentBlocks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchContentBlocks() {
      try {
        let query
        if (slug) {
          query = `*[_type == "contentBlock" && slug.current == $slug][0]{
            _id,
            title,
            slug,
            blockType,
            content,
            text,
            image,
            ctaButton,
            testimonial,
            features,
            faqs,
            displaySettings
          }`
        } else {
          query = `*[_type == "contentBlock"] | order(_createdAt desc){
            _id,
            title,
            slug,
            blockType,
            content,
            text,
            image,
            ctaButton,
            testimonial,
            features,
            faqs,
            displaySettings
          }`
        }

        const data = await sanityClient.fetch(query, slug ? { slug } : {})
        setContentBlocks(slug ? (data ? [data] : []) : data)
      } catch (err) {
        console.error('Error fetching content blocks:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchContentBlocks()
  }, [slug])

  return { contentBlocks, loading, error }
}
