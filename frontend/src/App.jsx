import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import OriginalHomePage from "./pages/OriginalHomePage";
import SiteFooter from "./components/Footer/SiteFooter";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            {/* Sanity-powered pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />

            {/* Original hardcoded homepage (fallback) */}
            <Route path="/original" element={<OriginalHomePage />} />
          </Routes>
        </div>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
