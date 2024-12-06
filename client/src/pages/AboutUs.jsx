import { motion } from "framer-motion";
import { FaClipboardCheck, FaHandshake, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-12 px-6">
      {/* About Us Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-12 flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
          Welcome to{" "}
          <span className="text-black">
            EST<span className="text-gray-600">AI</span>TE
          </span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          At <strong>ESTAITE</strong>, we harness the power of AI to transform
          property transactions across the UAE. Whether you’re looking for
          affordable bedspaces or investing in prime real estate, our platform
          makes the journey seamless and efficient.
        </p>
      </motion.div>

      {/* Our Services Section */}
      <motion.section
        className="bg-white py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service 1 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition duration-300 flex flex-col items-center  "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaSearch className="text-gray-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              AI-Powered Property Search
            </h4>
            <p className="text-gray-600">
              Use AI to discover properties tailored to your preferences, from
              cozy bedspaces to luxury villas.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition duration-300 flex flex-col items-center "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaClipboardCheck className="text-gray-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              Verified Listings
            </h4>
            <p className="text-gray-600">
              Access a curated selection of verified listings for trust and
              transparency.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition duration-300 flex flex-col items-center justify-"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaHandshake className="text-gray-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-3 text-gray-800">
              Hassle-Free Transactions
            </h4>
            <p className="text-gray-600">
              Simplify property transactions with our secure platform and
              professional support.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
