import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TourContext } from "../../context/TourContext";

// Reusable Loading Component
const Loading = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <p className="text-2xl font-bold text-indigo-600 animate-pulse">
      Loading Tour Details...
    </p>
  </div>
);

// Tour Details Component
const TourDetails = ({ tour }) => (
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
);

// Purchase Form Component
const PurchaseForm = ({ onSubmit }) => {
  return (
    <form
      className="mt-10 p-6 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto"
      onSubmit={onSubmit}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Purchase Tour</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { id: "fullName", label: "Full Name", type: "text" },
          { id: "email", label: "Email Address", type: "email" },
          { id: "phone", label: "Phone Number", type: "text" },
          { id: "guests", label: "Number of Guests", type: "number", min: 1 },
        ].map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              min={field.min || undefined}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mt-6 bg-indigo-600 text-white px-8 py-4 rounded-md font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300 w-full"
      >
        Confirm Purchase
      </button>
    </form>
  );
};

// Main Component
const TourPurchasePage = () => {
  const { id } = useParams();
  const { Tours } = useContext(TourContext);
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchedTour = Tours.find((tour) => tour.id === parseInt(id));
    setTour(fetchedTour);
  }, [id, Tours]);

  const handlePurchase = () => {
    alert(`Thank you for purchasing the ${tour.title}!`);
    navigate("/"); // Redirect to the homepage or confirmation page
  };

  if (!tour) {
    return <Loading />;
  }

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      <nav className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-700 font-medium text-sm hover:text-indigo-600 hover:underline transition-all duration-200"
        >
          &larr; Back
        </button>
      </nav>

      {/* Tour Details */}
      <TourDetails tour={tour} />

      {/* Purchase Form */}
      <PurchaseForm
        onSubmit={(e) => {
          e.preventDefault();
          handlePurchase();
        }}
      />
    </div>
  );
};

export default TourPurchasePage;
