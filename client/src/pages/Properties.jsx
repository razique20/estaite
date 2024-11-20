import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import Filters from '../components/Filters';

const PropertiesPage = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate(); // For navigation

  const properties = [
    { title: 'Studio Apartment', price: 3500, location: 'Dubai', type: 'Apartment' },
    { title: 'Bedspace in Sharjah', price: 800, location: 'Sharjah', type: 'Bedspace' },
    // Add more property data
  ];

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
      <nav className="mb-6">
        <button
          onClick={() => navigate('/')} // Navigate to Home
          className="text-indigo-600 font-semibold hover:underline"
        >
          &larr; Back to Home
        </button>
      </nav>

      {/* Filters and Property List */}
      <Filters onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(filteredProperties.length > 0 ? filteredProperties : properties).map((property, idx) => (
          <PropertyCard key={idx} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
