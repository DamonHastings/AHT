import { useState, useEffect } from 'react'
import sanityClient from '../utils/sanityClient'
import { mergeSiteContactDefaults } from '../content/siteContact'

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
          bookingUrl,
          address,
          businessName,
          copyrightText,
          credentials,
          licenseNumber,
          supervisorInfo,
          geo,
          fees,
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
          seo
        }`

        const data = await sanityClient.fetch(query)
        setSiteSettings(mergeSiteContactDefaults(data))
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
