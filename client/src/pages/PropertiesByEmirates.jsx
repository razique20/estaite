import { useContext  } from "react";
import { useLocation , useNavigate } from "react-router-dom";
import { PropertyContext } from "../context/PropertyContext";
import PropertyCard from "../components/PropertyCard";

const PropertiesByEmirates = () => {

  const navigate = useNavigate('/')
  const { properties } = useContext(PropertyContext);
  const location = useLocation();

  // Extract the emirate from the query parameter
  const params = new URLSearchParams(location.search);
  const selectedEmirate = params.get("emirate");

  // Filter properties by the selected emirate
  const filteredProperties = properties.filter(
    (property) => property.location === selectedEmirate
  );

  return (
    <div className="py-8 px-4">
       <nav className="mb-4">
        <button
          onClick={() => navigate("/")} // Navigate to Home
          className="text-gray-700 font-medium text-sm hover:text-indigo-600 hover:underline transition-all duration-200"
        >
          &larr; Back to Home
        </button>
        </nav>
      <h2 className="text-3xl font-bold text-center mb-6">
        Properties in {selectedEmirate}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              title={property.title}
              price={property.price}
              location={property.location}
              type={property.type}
              image={property.image}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No properties available in {selectedEmirate}.
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertiesByEmirates;
