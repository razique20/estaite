import { Link } from 'react-router-dom';

const PropertyCard = ({ id, title, price, location, type, image }) => {
  // Format the price with commas for better readability
  const formattedPrice = price.toLocaleString();

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      {/* Property Image */}
      <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt={`Image of ${title}`}
        />
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">
          <span className="font-semibold">Type:</span> {type}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Price:</span> AED {formattedPrice}
        </p>
      </div>

      {/* Action Button */}
      <div className="p-4 bg-gray-50 text-center">
        <Link
          to={`/property/${id}`} // Dynamic route to the property details page
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-200 w-full block text-center text-sm md:text-base"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
