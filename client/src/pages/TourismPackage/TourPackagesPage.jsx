import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TourCard from "../../components/TourismPackage/TourCard";
import TourFilter from "../../components/TourismPackage/TourFilter";
import { TourContext } from "../../context/TourContext";

const TourPackagesPage = () => {
  const { Tours } = useContext(TourContext);
  const [filteredTours, setFilteredTours] = useState([]);

  const handleFilter = (filters) => {
    const { emirate, maxPrice } = filters;
    const filtered = Tours.filter((tour) => {
      return (
        (!emirate || tour.emirate === emirate) &&
        (!maxPrice || tour.price <= maxPrice)
      );
    });
    setFilteredTours(filtered);
  };

  const navigate = useNavigate();

  return (
    <div className="p-6">
      <nav className="mb-4">
        <button
          onClick={() => navigate("/")} // Navigate to Home
          className="text-gray-700 font-medium text-sm hover:text-indigo-600 hover:underline transition-all duration-200"
        >
          &larr; Back to Home
        </button>
      </nav>
      <h1 className="text-3xl font-bold text-center mb-6">Tour Packages</h1>

      <div className="flex flex-col sm:flex-row">
        {/* Left Sidebar - Filter */}
        <div className="sm:w-1/4 p-4 bg-gray-50 rounded-lg shadow-md mb-6 sm:mb-0">
          <TourFilter onFilter={handleFilter} />
        </div>

        {/* Right Content - Tour Cards */}
        <div className="sm:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {(filteredTours.length > 0 ? filteredTours : Tours).map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackagesPage;
