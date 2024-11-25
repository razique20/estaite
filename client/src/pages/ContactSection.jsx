import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 py-5 px-6">
      {/* Back Button */}
      <nav className="mb-2">
        <button
          onClick={() => navigate("/")} // Navigate to Home
          className="text-gray-700 font-medium text-sm hover:text-indigo-600 hover:underline transition-all duration-200"
        >
          &larr; Back to Home
        </button>
      </nav>

      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Contact Us
      </h2>

      {/* Contact Form */}
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
        {/* Name Input */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
          />
        </div>
        
        {/* Email Input */}
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
