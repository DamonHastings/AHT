import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import { VisualEditing } from "./components/VisualEditing";
import { isPreview } from "./utils/sanityClient";

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
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
