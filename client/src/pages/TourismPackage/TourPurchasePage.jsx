import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TourContext } from "../../context/TourContext";

const TourPurchasePage = () => {
  const { id } = useParams(); // Get the tour ID from the URL
  const { Tours } = useContext(TourContext); // Access Tours from the context
  const navigate = useNavigate();

  const [tour, setTour] = useState(null);

  useEffect(() => {
    // Find the tour with the matching ID
    const fetchedTour = Tours.find((tour) => tour.id === parseInt(id));
    setTour(fetchedTour);
  }, [id, Tours]);

  if (!tour) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-2xl font-bold text-indigo-600 animate-pulse">
          Loading Tour Details...
        </p>
      </div>
    );
  }

  const handlePurchase = () => {
    alert(`Thank you for purchasing the ${tour.title}!`);
    navigate("/"); // Redirect to the homepage or a confirmation page
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <nav className="mb-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="text-indigo-600 font-semibold hover:underline"
        >
          &larr; Back
        </button>
      </nav>

      {/* Tour Details */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{tour.title}</h1>
          <p className="text-gray-600 mt-2">{tour.description}</p>
          <p className="text-xl font-semibold text-indigo-600 mt-4">
            Price: AED {tour.price}
          </p>
        </div>
      </div>

      {/* Purchase Form */}
      <form
        className="mt-10 p-6 bg-gray-50 rounded-lg shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          handlePurchase();
        }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Purchase Tour</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              min="1"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 bg-indigo-600 text-white px-8 py-4 rounded-md font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300 w-full"
        >
          Confirm Purchase
        </button>
      </form>
    </div>
  );
};

export default TourPurchasePage;
