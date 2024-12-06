import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import hero from "../assets/bed.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const taglines = [
    "Find your perfect place, from bedspaces to land!",
    "The future of real estate is here with AI.",
    "Discover your dream home effortlessly.",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(
        `/properties/emirates?emirate=${encodeURIComponent(searchInput)}`
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000); // Change tagline every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-white text-gray-600 py-4 px-8 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-bold text-gray-800 flex items-center">
              <i className="fas fa-home text-indigo-600 mr-2"></i>
              ESTAITE
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <a
                href="/list-properties"
                className="flex items-center text-sm font-medium hover:text-gray-800 transition-colors duration-300"
              >
                List Properties
              </a>
            </li>
            <li>
              <a
                href="/properties"
                className="flex items-center text-sm font-medium hover:text-gray-800 transition-colors duration-300"
              >
                <i className="fas fa-building mr-2"></i> Properties
              </a>
            </li>
            <li>
              <a
                href="/tours"
                className="flex items-center text-sm font-medium hover:text-gray-800 transition-colors duration-300"
              >
                <i className="fas fa-map-marked-alt mr-2"></i> Tours
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <AiOutlinePhone className="text-gray-600 text-lg" />
              <a
                href="tel:+971504220329"
                className="text-sm font-medium hover:text-gray-800 transition-colors duration-300"
              >
                +971504220329
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <AiOutlineMail className="text-gray-600 text-lg" />
              <a
                href="mailto:estaite@gmail.com"
                className="text-sm font-medium hover:text-gray-800 transition-colors duration-300"
              >
                estaite@gmail.com
              </a>
            </li>
            <li>
              <button
                onClick={() => navigate("/signin")}
                className="px-4 py-2 font-medium text-white bg-gray-600 rounded-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              >
                <i className="fas fa-sign-in-alt mr-2"></i> Sign In
              </button>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
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
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white py-5 pb-10 text-gray-600 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a
                href="/list-properties"
                className="flex items-center text-lg font-medium hover:text-gray-800 transition-colors duration-300"
                onClick={closeMenu}
              >
                <i className="fas fa-list mr-2"></i> List Properties
              </a>
            </li>
            <li>
              <a
                href="/properties"
                className="flex items-center text-lg font-medium hover:text-gray-800 transition-colors duration-300"
                onClick={closeMenu}
              >
                <i className="fas fa-building mr-2"></i> Properties
              </a>
            </li>
            <li>
              <a
                href="/tours"
                className="flex items-center text-lg font-medium hover:text-gray-800 transition-colors duration-300"
                onClick={closeMenu}
              >
                <i className="fas fa-map-marked-alt mr-2"></i> Tours
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-center text-lg font-medium hover:text-gray-800 transition-colors duration-300"
                onClick={closeMenu}
              >
                <i className="fas fa-address-card mr-2"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="bg-gray-100 text-black  flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:w-1/2 p-20 flex-col">
          <h1 className="text-5xl font-bold mb-4 pt-10 text-black">
            EST<span className="text-gray-600">AI</span>TE
          </h1>
          <div className="text-center">
            <p
              className="text-xl mb-6 text-gray-700 transition-opacity duration-1000 ease-in-out text-center"
              key={currentTaglineIndex}
            >
              {taglines[currentTaglineIndex]}
            </p>
          </div>
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center gap-2 mt-4"
          >
            <input
              type="text"
              placeholder="Search by location..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="px-4 py-2 w-full outline-none border  rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 font-medium text-white bg-gray-600 rounded-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            >
              Search
            </button>
          </form>
          <button
            onClick={() => navigate("/properties")}
            className="px-6 py-3 mt-4 font-semibold text-white bg-gray-600 rounded-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
          >
            Browse Properties
          </button>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Hero Section"
            className="shadow-lg h-[30rem]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
