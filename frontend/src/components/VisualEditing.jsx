import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { enableVisualEditing } from '@sanity/visual-editing'

/**
 * Renders visual editing overlays when the app runs in Sanity Presentation tool.
 * Uses enableVisualEditing with a history adapter for BrowserRouter (non-data router).
 */
export function VisualEditing() {
  const navigate = useNavigate()
  const location = useLocation()
  const navigateRef = useRef(navigate)
  const [notifyNavigate, setNotifyNavigate] = useState(null)

  useEffect(() => {
    navigateRef.current = navigate
  }, [navigate])

  useEffect(() => {
    const disable = enableVisualEditing({
      zIndex: 1000,
      history: {
        subscribe: (_navigate) => {
          setNotifyNavigate(() => _navigate)
          return () => setNotifyNavigate(null)
        },
        update: (update) => {
          if (update.type === 'push' || update.type === 'replace') {
            const url = typeof update.url === 'string' ? update.url : update.url?.href
            if (url) {
              try {
                const parsed = new URL(url, window.location.origin)
                navigateRef.current(parsed.pathname + parsed.search + parsed.hash, {
                  replace: update.type === 'replace',
                })
              } catch {
                navigateRef.current(url, { replace: update.type === 'replace' })
              }
            }
          } else if (update.type === 'pop') {
            navigateRef.current(-1)
          }
        },
      },
      refresh: () => {
        window.location.reload()
        return false
      },
    })
    return () => disable()
  }, [])

  useEffect(() => {
    if (notifyNavigate) {
      notifyNavigate({
        type: 'push',
        url: `${location.pathname}${location.search}${location.hash}`,
      })
    }
  }, [location.pathname, location.search, location.hash, notifyNavigate])

  return null
}
