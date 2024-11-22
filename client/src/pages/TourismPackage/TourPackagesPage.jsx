import { useState , useContext  } from "react";
import { useNavigate } from "react-router-dom";
import TourFilter from "../../components/TourismPackage/TourFilter";
import TourCard from "../../components/TourismPackage/TourCard";
import { TourContext } from "../../context/TourContext";

const TourPackagesPage = () => {

    const{Tours} = useContext(TourContext)
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
          <nav className="mb-6">
        <button
          onClick={() => navigate('/')} // Navigate to Home
          className="text-indigo-600 font-semibold hover:underline"
        >
          &larr; Back to Home
        </button>
      </nav>
      <h1 className="text-3xl font-bold text-center mb-6">Tour Packages</h1>
      <TourFilter onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(filteredTours.length > 0 ? filteredTours : Tours).map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  );
};

export default TourPackagesPage;
