import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PropertyContext } from '../context/PropertyContext';

const PropertyDetails = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate(); // For navigation
  const { properties } = useContext(PropertyContext);
  const { id } = useParams(); // Extract ID from the URL
  const property = properties.find((prop) => prop.id === parseInt(id)); // Find the property by ID

  if (!property) {
    return <div className="p-6 text-center text-gray-500">Property not found!</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
     <nav className="mb-4">
        <button
          onClick={() => navigate("/")} // Navigate to Home
          className="text-gray-700 font-medium text-sm hover:text-indigo-600 hover:underline transition-all duration-200"
        >
          &larr; Back to Home
        </button>
      </nav>

      {/* Property Details Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative bg-gray-100 h-80 md:h-auto flex items-center justify-center">
          {property.image ? (
            <img
              className="h-full w-full object-cover object-center"
              src={property.image}
              alt={property.title}
            />
          ) : (
            <div className="text-gray-400 text-lg">Image not available</div>
          )}
        </div>

        {/* Details Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-indigo-600">{property.title}</h1>
            <p className="text-gray-600 mb-4">{property.description}</p>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Type:</span> {property.type}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {property.location}
              </p>
              <p>
                <span className="font-semibold">Price:</span> AED {property.price}
              </p>
            </div>
          </div>
          <div className="mt-6">
          <button
  onClick={() => navigate(`/purchase/${property.id}`)}  // Update this line
  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
>
  Book Now
</button>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Information</h2>
        <p className="text-gray-600">
          Whether you're looking for a cozy bedspace, a luxurious apartment, or a sprawling piece
          of land, ESTAITE is your AI-powered companion to finding the perfect property in the UAE.
          Reach out to us for personalized assistance.
        </p>
      </div>
    </div>
  );
};

export default PropertyDetails;
