const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo and About Section */}
          <div>
            <img
              src="/logo.jpg" // Replace with your actual logo path
              alt="RAAZI Logo"
              className="w-10 h-10 mb-4"
            />
            <p className="text-gray-400 text-sm">
             ESTAITE is the UAE's premier AI-powered real estate platform,
              helping you find and rent your perfect property hassle-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/properties" className="hover:underline text-gray-400">
                  Properties
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 text-sm">
              Email:{" "}
              <a
                href="mailto:support@estaite.com"
                className="hover:underline text-indigo-400"
              >
                support@estaite.com
              </a>
            </p>
            <p className="text-gray-400 text-sm">Phone: +971 50 123 4567</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ESTAITE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
