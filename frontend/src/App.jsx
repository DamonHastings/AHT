import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { VisualEditing } from "./components/VisualEditing";
import ConsentBanner from "./components/ConsentBanner";
import { isPreview } from "./utils/sanityClient";
import { trackPageview } from "./utils/analytics";

// HomePage is eager (it's the LCP / prerendered route). Secondary routes are
// code-split so the typical home-page visitor doesn't download them.
// NOTE: /about and /services are temporarily disabled (redirect to home). Their
// CMS content still describes a different, incorrect practice. To re-enable:
// restore the AboutPage/ServicesPage imports + routes below, add the sitemap
// entries back in scripts/gen-sitemap.mjs, and republish the Sanity
// `about`/`services` page documents once the copy is rewritten.
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Send a GA4 pageview on each client-side route change. trackPageview() dedupes
// against the initial load counted by initAnalytics(), so no double count.
function RouteAnalytics() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    trackPageview(`${pathname}${search}`);
  }, [pathname, search]);
  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <RouteAnalytics />
      <div className="flex-grow min-h-screen">
        <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<Navigate to="/" replace />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <ConsentBanner />
      {isPreview() && <VisualEditing />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
