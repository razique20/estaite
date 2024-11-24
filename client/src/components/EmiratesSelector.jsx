import { useNavigate } from "react-router-dom";
import { FaCity, FaMountain, FaLandmark, FaBuilding, FaSun, FaWater, FaShieldAlt } from "react-icons/fa"; // FontAwesome icons

const EmiratesSelector = () => {
  const navigate = useNavigate();

  const emirates = [
    { name: "Dubai", icon: <FaCity className="mr-2" />, description: "The city of innovation and skyscrapers" },
    { name: "Abu Dhabi", icon: <FaLandmark className="mr-2" />, description: "Capital of the UAE, cultural heritage" },
    { name: "Sharjah", icon: <FaBuilding className="mr-2" />, description: "Cultural capital of the UAE" },
    { name: "Ajman", icon: <FaSun className="mr-2" />, description: "Coastal city known for beaches" },
    { name: "Fujairah", icon: <FaWater className="mr-2" />, description: "Beachfront city with mountains" },
    { name: "Ras Al Khaimah", icon: <FaMountain className="mr-2" />, description: "Mountainous region, adventure" },
    { name: "Umm Al Quwain", icon: <FaShieldAlt className="mr-2" />, description: "A quiet, natural emirate" },
  ];

  const handleNavigate = (emirate) => {
    navigate(`/properties/emirates?emirate=${emirate}`);
  };

  return (
    <div className="py-4 flex flex-wrap justify-center gap-4 p-1">
      {emirates.map(({ name, icon, description }) => (
        <button
          key={name}
          onClick={() => handleNavigate(name)}
          className="flex items-center px-5 py-1 text-sm md:text-base font-medium text-white bg-gradient-to-r from-gray-800 to-gray-600 
                     rounded-sm hover:from-gray-700 hover:to-gray-500 focus:ring-2 focus:ring-gray-400 focus:outline-none 
                     transition duration-200"
        >
          {icon}
          {name}
        </button>
      ))}
    </div>
  );
};

export default EmiratesSelector;
