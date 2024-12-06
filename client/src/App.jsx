import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactSection from "./pages/ContactSection.jsx";
import HomePage from "./pages/Homepage.jsx";
import PropertiesPage from "./pages/Properties.jsx";
import PropertiesByEmirates from "./pages/PropertiesByEmirates.jsx";
import PropertyDetails from "./pages/PropertyDetail.jsx";
import PropertyPurchase from "./pages/PropertyPurchase.jsx";
import TourDetailsPage from "./pages/TourismPackage/TourDetailsPage.jsx";
import TourPackagesPage from "./pages/TourismPackage/TourPackagesPage.jsx";
import TourPurchasePage from "./pages/TourismPackage/TourPurchasePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/properties/emirates" element={<PropertiesByEmirates />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/purchase/:id" element={<PropertyPurchase />} />
        <Route path="/tours" element={<TourPackagesPage />} />
        <Route path="/tours/:id" element={<TourDetailsPage />} />
        <Route path="/tourpurchase/:id" element={<TourPurchasePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
