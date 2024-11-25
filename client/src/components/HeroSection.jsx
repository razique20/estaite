import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Transparent Menu Bar */}
      <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-10 text-white py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-white">ESTAITE</h1>
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="/about"
              className="text-sm font-medium hover:text-gray-300 transition-colors duration-300"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="/properties"
              className="text-sm font-medium hover:text-gray-300 transition-colors duration-300"
            >
              PROPERTIES
            </a>
          </li>
          <li>
            <a
              href="/tours"
              className="text-sm font-medium hover:text-gray-300 transition-colors duration-300"
            >
              TOURS
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-sm font-medium hover:text-gray-300 transition-colors duration-300"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-black bg-opacity-95 py-5 pb-10 text-white ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end px-4">
          <button onClick={closeMenu} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <a
              href="/about"
              className="text-lg font-medium hover:text-gray-300 transition-colors duration-300"
              onClick={closeMenu}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="/properties"
              className="text-lg font-medium hover:text-gray-300 transition-colors duration-300"
              onClick={closeMenu}
            >
              PROPERTIES
            </a>
          </li>
          <li>
            <a
              href="/tours"
              className="text-lg font-medium hover:text-gray-300 transition-colors duration-300"
              onClick={closeMenu}
            >
              TOURS
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-lg font-medium hover:text-gray-300 transition-colors duration-300"
              onClick={closeMenu}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Content */}
      <div className="bg-gray-900 text-white py-20 text-center">
        <h1
          className=" text-5xl font-bold mb-4 mt-5 "
          
        >
          ESTAITE
        </h1>

        <p className="text-xl mb-6 text-white px-5">
          The AI Realtor – Find your perfect place, from bedspaces to land!
        </p>

        <button
          onClick={() => navigate("/properties")}
          className="px-6 py-3 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
        >
          Browse Properties
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
