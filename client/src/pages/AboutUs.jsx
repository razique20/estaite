import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-8 px-6">
      {/* Navigation Section */}
      <nav className="mb-4">
        <button
          onClick={() => navigate("/")} // Navigate to Home
          className="text-gray-700 font-medium text-sm hover:text-indigo-600 hover:underline transition-all duration-200"
        >
          &larr; Back to Home
        </button>
      </nav>

      {/* About Us Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* About Us Text */}
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <strong>ESTAITE</strong>, the AI Realtor platform
          redefining how you rent, buy, or sell properties in the UAE. From
          affordable bedspaces to sprawling land investments, our mission is to
          make property transactions seamless and stress-free with the power of
          artificial intelligence.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.section
        className="py-12 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Service 1 */}
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-indigo-600 mb-3">
              AI-Powered Property Search
            </h4>
            <p className="text-gray-600">
              Use our AI to find properties tailored to your exact needs, from
              bedspaces to luxury villas.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-indigo-600 mb-3">
              Verified Listings
            </h4>
            <p className="text-gray-600">
              Browse a wide range of verified listings, ensuring trust and
              transparency in every transaction.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-indigo-600 mb-3">
              Hassle-Free Transactions
            </h4>
            <p className="text-gray-600">
              Experience seamless property transactions with our secure platform
              and expert support.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Members Section */}
     
    </div>
  );
};

export default AboutUs;
