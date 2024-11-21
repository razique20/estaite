import React , {useContext} from "react";
import PropertyCard from "../components/PropertyCard.jsx";
import { PropertyContext } from "../context/PropertyContext.jsx";






const PropertyList = () => {


  const{properties} = useContext(PropertyContext)
  // Sample property data
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          title={property.title}
          price={property.price}
          location={property.location}
          type={property.type}
          image={property.image}
        />
      ))}
    </div>
  );
};

export default PropertyList;
