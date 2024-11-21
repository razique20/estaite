import { useNavigate } from "react-router-dom";

const EmiratesSelector = () => {
  const navigate = useNavigate();

  const emirates = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  const handleNavigate = (emirate) => {
    navigate(`/properties/emirates?emirate=${emirate}`);
  };

  return (
    <div className="py-4 flex justify-center gap-4">
      {emirates.map((emirate) => (
        <button
          key={emirate}
          onClick={() => handleNavigate(emirate)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-sm hover:bg-indigo-700"
        >
          {emirate}
        </button>
      ))}
    </div>
  );
};

export default EmiratesSelector;
