import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || ''
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

/** Detect if running inside Presentation tool iframe or with preview param */
export const isPreview = () => {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return params.has('sanity-preview') || window.self !== window.top
}

/**
 * Studio URL for visual editing / stega. When embedded in Presentation mode (iframe),
 * use the parent (studio) origin so production works without a separate env.
 */
function getStudioUrl() {
  if (typeof window === 'undefined') return import.meta.env.VITE_SANITY_STUDIO_URL || 'http://localhost:3333'
  if (isPreview() && document.referrer) {
    try {
      return new URL(document.referrer).origin
    } catch {
      // fall through to env/default
    }
  }
  return import.meta.env.VITE_SANITY_STUDIO_URL || 'http://localhost:3333'
}

export const studioUrl = getStudioUrl()

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
