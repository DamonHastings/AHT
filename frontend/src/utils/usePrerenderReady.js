import { useEffect } from "react";

/**
 * Dispatch the `app-prerender-ready` event the build-time prerenderer waits for
 * (see renderAfterDocumentEvent in vite.config.js) once `ready` is true. Lets any
 * route — not just the home page — be captured as static HTML.
 */
export function usePrerenderReady(ready) {
  useEffect(() => {
    if (ready) {
      document.dispatchEvent(new Event("app-prerender-ready"));
    }
  }, [ready]);
}
