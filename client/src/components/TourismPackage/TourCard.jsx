import { useNavigate } from "react-router-dom";

const TourCard = ({ id, title, emirate, price, description, image }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/tours/${id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Tour Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      
      <div className="p-4">
        {/* Tour Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        
        {/* Tour Emirate */}
        <p className="text-sm text-gray-500">{emirate}</p>
        
        {/* Tour Description */}
        <p className="text-gray-700 mt-2">{description}</p>
        
        {/* Price */}
        <p className="font-bold text-indigo-600 mt-4">AED {price}</p>
        
        {/* Learn More Button */}
        <button
          onClick={handleLearnMore}
          className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-lg hover:bg-gray-900 transition duration-200 w-full block text-center text-sm md:text-base"
        >
          <span className="inline-block hover:text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-white to-red-500 hover:bg-gradient-to-r hover:from-green-200 hover:to-red-300">
            Learn More
          </span>
        </button>
      </div>
    </div>
  );
};

export default TourCard;
