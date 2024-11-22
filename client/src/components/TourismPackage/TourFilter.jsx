import React, { useState } from "react";

const TourFilter = ({ onFilter }) => {
  const [emirate, setEmirate] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleApplyFilters = () => {
    onFilter({ emirate, maxPrice });
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-6">
      <h3 className="text-lg font-bold mb-4">Filter Tour Packages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          value={emirate}
          onChange={(e) => setEmirate(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="">Select Emirate</option>
          <option value="Dubai">Dubai</option>
          <option value="Abu Dhabi">Abu Dhabi</option>
          <option value="Sharjah">Sharjah</option>
          <option value="Ajman">Ajman</option>
          <option value="Fujairah">Fujairah</option>
          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
          <option value="Umm Al Quwain">Umm Al Quwain</option>
        </select>
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
        className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-indigo-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default TourFilter;
