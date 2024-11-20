import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();

  return(




  <div className="bg-gray-100 py-5 px-6">
    <nav className="mb-6">
      <button
        onClick={() => navigate("/")} // Navigate to Home
        className="text-indigo-600 font-semibold hover:underline"
      >
        &larr; Back to Home
      </button>
    </nav>
    <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
    <form className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-lg">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border p-2 mb-4 rounded-lg"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border p-2 mb-4 rounded-lg"
      />
      <textarea
        placeholder="Your Message"
        className="w-full border p-2 mb-4 rounded-lg"
        rows="4"
      ></textarea>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
        Send Message
      </button>
    </form>
  </div>
  )
};
export default ContactSection;
