import React from "react";
import PropertyCard from "./PropertyCard";
import studio from "../assets/studio.jpg";
import onebhk from "../assets/1bhk.jpg";
import twobhk from "../assets/2bhk.jpg";
import bedspace from "../assets/bedspace.jpg"



const PropertyList = () => {
  // Sample property data
  const properties = [
    {
      id: 1,
      image:studio,
      title: "Studio Apartment",
      price: 3500,
      location: "Dubai",
      type: "Apartment",
    },
    {
      id: 2,
      image:onebhk,

      title: "1 BHK in Sharjah",
      price: 2500,
      location: "Sharjah",
      type: "Apartment",
    },
    {
      id: 3,
      image:bedspace,
      title: "Bedspace in Ajman",
      price: 800,
      location: "Ajman",
      type: "Bedspace",
    },
    {
      id: 4,
      image: twobhk,
      title: "2 BHK Villa",
      price: 5500,
      location: "Abu Dhabi",
      type: "Villa",
    },
  ];

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
