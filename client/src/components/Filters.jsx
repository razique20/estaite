import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleApplyFilters = () => {
    onFilter({ type, location, maxPrice });
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-6">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Type (e.g., Apartment, Land)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="number"
          placeholder="Max Price (AED)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border rounded-lg p-2"
        />
      </div>
      <button
        onClick={handleApplyFilters}
        className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-indigo-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
