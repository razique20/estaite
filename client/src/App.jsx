import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactSection from "./pages/ContactSection";
import HomePage from "./pages/Homepage";
import PropertiesPage from "./pages/Properties";
import PropertiesByEmirates from "./pages/PropertiesByEmirates";
import TourDetailsPage from "./pages/TourismPackage/TourDetailsPage";
import TourPackagesPage from "./pages/TourismPackage/TourPackagesPage";
import PropertyDetails from "./pages/PropertyDetail";
import TourPurchasePage from "./pages/TourismPackage/TourPurchasePage";
import PropertyPurchase from "./pages/PropertyPurchase";

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
         <Route path="/purchase/:id" element={<PropertyPurchase />}/>
        <Route path="/tours" element={<TourPackagesPage />} />
        <Route path="/tours/:id" element={<TourDetailsPage />} />
        <Route path="/tourpurchase/:id" element={<TourPurchasePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
