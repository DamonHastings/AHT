import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomePageV3 from "./pages/HomePageV3";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import OriginalHomePage from "./pages/OriginalHomePage";
import SiteFooter from "./components/Footer/SiteFooter";
import { VisualEditing } from "./components/VisualEditing";
import { isPreview } from "./utils/sanityClient";

function AppContent() {
  const location = useLocation();
  const isV3Home = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow min-h-screen">
        <Routes>
          {/* V3 Design - therapist-homepage-v3.html */}
          <Route path="/" element={<HomePageV3 />} />
          <Route path="/classic" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* Original hardcoded homepage (fallback) */}
          <Route path="/original" element={<OriginalHomePage />} />
        </Routes>
      </div>
      {!isV3Home && <SiteFooter />}
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
