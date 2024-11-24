import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PropertyContext } from '../context/PropertyContext';

const PropertyPurchase = () => {
  const { id } = useParams(); // Extract property ID from the URL
  const navigate = useNavigate();
  const { properties } = useContext(PropertyContext);
  const property = properties.find((prop) => prop.id === parseInt(id)); // Find the property by ID

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return <div className="p-6 text-center text-gray-500">Property not found!</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBooking(true);
    setTimeout(() => {
      // Simulating booking confirmation
      alert('Booking Successful!');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <nav className="mb-6">
        <button
          onClick={() => navigate(`/property/${property.id}`)}
          className="text-gray-700 font-medium text-sm hover:text-indigo-600 hover:underline transition-all duration-200"
        >
          &larr; Back to Property Details
        </button>
      </nav>

      {/* Property Purchase Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">Book Your Property</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Property Details</h2>
          <p className="text-gray-600">Title: {property.title}</p>
          <p className="text-gray-600">Location: {property.location}</p>
          <p className="text-gray-600">Price: AED {property.price}</p>
        </div>

        {/* User Details Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
              disabled={isBooking}
            >
              {isBooking ? 'Processing...' : 'Book Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyPurchase;
