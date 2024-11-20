const PropertyCard = ({ title, price, location, type , image }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Property Image */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-lg">
            <img className="cover w-full " src={image} alt="" />
        </span>
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
          <span className="font-semibold">Price:</span> AED {price}
        </p>
      </div>
  
      {/* Action Button */}
      <div className="p-4 bg-gray-50 text-center">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          View Details
        </button>
      </div>
    </div>
  );
  
  export default PropertyCard;
  