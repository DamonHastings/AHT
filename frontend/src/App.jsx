import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./pages/HomePage";
import { VisualEditing } from "./components/VisualEditing";
import { isPreview } from "./utils/sanityClient";

// HomePage is eager (it's the LCP / prerendered route). Secondary routes are
// code-split so the typical home-page visitor doesn't download them.
// NOTE: /about and /services are temporarily disabled (redirect to home). Their
// CMS content still describes a different, incorrect practice. To re-enable:
// restore the AboutPage/ServicesPage imports + routes below, add the sitemap
// entries back in scripts/gen-sitemap.mjs, and republish the Sanity
// `about`/`services` page documents once the copy is rewritten.
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
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
      <Analytics />
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
