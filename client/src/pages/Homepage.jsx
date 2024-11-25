import { motion } from "framer-motion";
import { useContext } from "react";
import EmiratesSelector from "../components/EmiratesSelector";
import HeroSection from "../components/HeroSection";
import PropertyCard from "../components/PropertyCard";
import TourCard from "../components/TourismPackage/TourCard";
import { PropertyContext } from "../context/PropertyContext";
import { TourContext } from "../context/TourContext";

const HomePage = () => {
  const { Tours } = useContext(TourContext);
  const { properties } = useContext(PropertyContext);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Emirates Selection */}
      <motion.section
        className="py-6 bg-gray-100"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your Emirate
        </h2>
        <EmiratesSelector />
      </motion.section>

      {/* Featured Properties */}
      {/* Featured Properties */}
      <motion.section
        className="py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Properties
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4"
          variants={staggerContainer}
        >
          {properties && properties.length > 0 ? (
            properties.slice(0, 5).map((property, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <PropertyCard {...property} />
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center text-gray-500 col-span-full"
              variants={fadeInUp}
            >
              No featured properties available at the moment.
            </motion.p>
          )}
        </motion.div>
      </motion.section>

      {/* Top 5 Tourism Packages */}
      <motion.section
        className="py-10 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Top Tour Packages
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
          variants={staggerContainer}
        >
          {Tours.slice(0, 3).map((tour) => (
            <motion.div key={tour.id} variants={fadeInUp}>
              <TourCard
                id={tour.id}
                title={tour.title}
                emirate={tour.emirate}
                price={tour.price}
                description={tour.description}
                image={tour.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HomePage;
