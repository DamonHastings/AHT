import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || ''
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
export const studioUrl = import.meta.env.VITE_SANITY_STUDIO_URL || 'http://localhost:3333'

/** Detect if running inside Presentation tool iframe or with preview param */
export const isPreview = () => {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return params.has('sanity-preview') || window.self !== window.top
}

export const client = createClient({
  projectId,
  dataset,
  useCdn: !isPreview() && !import.meta.env.DEV,
  apiVersion: '2024-01-01',
  stega: isPreview()
    ? {
        enabled: true,
        studioUrl,
      }
    : false,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client
