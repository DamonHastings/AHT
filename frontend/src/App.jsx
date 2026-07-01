import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { VisualEditing } from "./components/VisualEditing";
import { isPreview } from "./utils/sanityClient";

// HomePage is eager (it's the LCP / prerendered route). Secondary routes are
// code-split so the typical home-page visitor doesn't download them.
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const GoodFaithEstimatePage = lazy(() => import("./pages/GoodFaithEstimatePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow min-h-screen">
        <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/good-faith-estimate" element={<GoodFaithEstimatePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
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
