import { useState, useEffect } from 'react'
import sanityClient from '../utils/sanityClient'

export function useSiteSettings() {
  const [siteSettings, setSiteSettings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchSiteSettings() {
      try {
        const query = `*[_type == "siteSettings"][0]{
          _id,
          title,
          description,
          logo,
          favicon,
          ogImage,
          contactEmail,
          contactPhone,
          address,
          "socialLinks": socialLinks->{
            _id,
            title,
            links
          },
          "footer": footer->{
            _id,
            title,
            copyrightText,
            licenseText,
            columns,
            "socialLinks": socialLinks->{
              _id,
              title,
              links
            }
          },
          "navigation": navigation->{
            _id,
            title,
            items
          },
          seo
        }`

        const data = await sanityClient.fetch(query)
        setSiteSettings(data)
      } catch (err) {
        console.error('Error fetching site settings:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchSiteSettings()
  }, [])

  return { siteSettings, loading, error }
}
