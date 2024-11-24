import React, { useState , useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import Filters from '../components/Filters';
import { PropertyContext } from '../context/PropertyContext';

const PropertiesPage = () => {


  const{properties} = useContext(PropertyContext)
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate(); // For navigation

  

  const handleFilter = (filters) => {
    const { type, location, maxPrice } = filters;
    const filtered = properties.filter((property) => {
      return (
        (!type || property.type.toLowerCase().includes(type.toLowerCase())) &&
        (!location || property.location.toLowerCase().includes(location.toLowerCase())) &&
        (!maxPrice || property.price <= maxPrice)
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div className="p-6">
      {/* Navigation Bar */}
      <nav className="mb-4">
        <button
          onClick={() => navigate("/")} // Navigate to Home
          className="text-gray-700 font-medium text-sm hover:text-indigo-600 hover:underline transition-all duration-200"
        >
          &larr; Back to Home
        </button>
      </nav>

      {/* Filters and Property List */}
      <Filters onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {(filteredProperties.length > 0 ? filteredProperties : properties).map((property, idx) => (
          <PropertyCard key={idx} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
