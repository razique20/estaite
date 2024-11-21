import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import { PropertyContext } from "../context/PropertyContext";
import PropertyCard from "../components/PropertyCard";
import EmiratesSelector from "../components/EmiratesSelector";

const emirates = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Fujairah",
  "Ras Al Khaimah",
  "Umm Al Quwain",
];

const HomePage = () => {
  const { properties } = useContext(PropertyContext);
  const navigate = useNavigate();

  const handleNavigate = (emirate) => {
    navigate(`/properties?emirate=${emirate}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Emirates Selection */}
      <section className="py-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-4">Choose Your Emirate</h2>
       <EmiratesSelector/>
      </section>

      {/* Featured Properties */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Properties</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
          {properties && properties.length > 0 ? (
            properties.slice(0, 5).map((property) => (
              <PropertyCard
                key={property.id}
                title={property.title}
                price={property.price}
                location={property.location}
                type={property.type}
                image={property.image}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No featured properties available at the moment.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
