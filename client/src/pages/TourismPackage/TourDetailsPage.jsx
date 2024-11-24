import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TourContext } from "../../context/TourContext";

const TourDetailsPage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { Tours } = useContext(TourContext);
  const { id } = useParams(); // Get the tour ID from the URL
  const [tour, setTour] = useState(null);

  useEffect(() => {
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

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <nav className="mb-6">
        <button
          onClick={() => navigate("/")}
          className="text-gray-700 font-medium text-sm hover:text-indigo-600 hover:underline transition-all duration-200"
        >
          &larr; Back to Home
        </button>
      </nav>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-lg"></div>
        <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white drop-shadow-md">
          {tour.title}
        </h1>
      </div>

      {/* Details Section */}
      <div className="mt-10 lg:grid lg:grid-cols-3 lg:gap-8 flex flex-col gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {tour.description}
          </p>
          <p className="text-3xl font-bold text-indigo-600 mb-6">
            Price: AED {tour.price}
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Itinerary
          </h2>
          {tour.itinerary && tour.itinerary.length > 0 ? (
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {tour.itinerary.map((item, index) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Itinerary details not available.</p>
          )}
        </div>

        {/* Booking and Highlights */}
        <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Why Choose This Tour?
          </h3>
          <p className="text-gray-600 mb-6">
            Explore the best of {tour.emirate} with thrilling activities, rich
            culture, and unique experiences tailored for everyone.
          </p>
          <button
            onClick={() => navigate(`/tourpurchase/${tour.id}`)}
            className="bg-indigo-600 text-white px-8 py-4 rounded-md font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300 w-full"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-xl">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Traveler Reviews
        </h3>
        <div className="space-y-4">
          <blockquote className="text-lg text-gray-600 italic">
            "An unforgettable experience! The adventure, the food, and the
            sights were beyond our expectations."
            <span className="block text-indigo-600 font-semibold mt-2">
              - Sarah K.
            </span>
          </blockquote>
          <blockquote className="text-lg text-gray-600 italic">
            "Amazing tour! The guides were excellent, and the entire journey was
            well-organized. Highly recommend!"
            <span className="block text-indigo-600 font-semibold mt-2">
              - David M.
            </span>
          </blockquote>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          What to Expect
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Convenient transportation to and from the tour location</li>
          <li>Knowledgeable and friendly guides</li>
          <li>Exciting and safe activities</li>
          <li>Complimentary refreshments and meals</li>
        </ul>
      </div>
    </div>
  );
};

export default TourDetailsPage;
