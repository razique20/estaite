import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactSection from "./pages/ContactSection";
import HomePage from "./pages/Homepage";
import PropertiesPage from "./pages/Properties";
import Footer from "./components/Footer";
import PropertiesByEmirates from "./pages/PropertiesByEmirates";
import TourPackagesPage from "./pages/TourismPackage/TourPackagesPage";
import TourDetailsPage from "./pages/TourismPackage/TourDetailsPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/properties/emirates" element={<PropertiesByEmirates />} />
      <Route path="/tours" element={<TourPackagesPage />} />
      <Route path="/tours/:id" element={<TourDetailsPage />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
