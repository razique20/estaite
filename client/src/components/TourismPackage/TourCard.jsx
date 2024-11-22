import { useNavigate } from "react-router-dom";

const TourCard = ({ id, title, emirate, price, description, image }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/tours/${id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{emirate}</p>
        <p className="text-gray-700 mt-2">{description}</p>
        <p className="font-bold text-indigo-600 mt-4">AED {price}</p>
        <button
          onClick={handleLearnMore}
          className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-indigo-700"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TourCard;
