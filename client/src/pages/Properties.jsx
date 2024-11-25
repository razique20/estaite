import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import Filters from "../components/Filters";
import { PropertyContext } from "../context/PropertyContext";

const PropertiesPage = () => {
  const { properties } = useContext(PropertyContext);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate();

  const handleFilter = (filters) => {
    const { type, location, maxPrice } = filters;
    const filtered = properties.filter((property) => {
      return (
        (!type || property.type.toLowerCase().includes(type.toLowerCase())) &&
        (!location ||
          property.location.toLowerCase().includes(location.toLowerCase())) &&
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
          onClick={() => navigate("/")} // Navigate to Home
          className="text-gray-700 font-medium text-sm hover:text-indigo-600 hover:underline transition-all duration-200"
        >
          &larr; Back to Home
        </button>
      </nav>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Section */}
        <aside className="w-full md:w-1/4 bg-gray-100 rounded-lg p-4 shadow-md">
          {/* <h2 className="text-lg font-semibold mb-4">Filter Properties</h2> */}
          <Filters onFilter={handleFilter} />
        </aside>

        {/* Property Cards Section */}
        <section className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(filteredProperties.length > 0 ? filteredProperties : properties).map(
              (property, idx) => (
                <PropertyCard key={idx} {...property} />
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PropertiesPage;
