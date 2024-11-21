import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-8 px-6">
      {/* Navigation Section */}
      <nav className="mb-6">
        <button
          onClick={() => navigate("/")}
          className="text-indigo-600 font-semibold hover:underline"
        >
          &larr; Back to Home
        </button>
      </nav>

      {/* About Us Section */}
      <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
        {/* Logo */}
        <img
          src="/logo.jpg" // Replace with your logo file path
          alt="ESTAITE Logo"
          className="w-[20%]"
        />

        {/* About Us Text */}
        <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <strong>ESTAITE</strong>, the AI Realtor platform
          redefining how you rent, buy, or sell properties in the UAE. From
          affordable bedspaces to sprawling land investments, our mission is to
          make property transactions seamless and stress-free with the power of
          artificial intelligence.
        </p>
      </div>

      {/* Services Section */}
      <section className="py-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-xl font-semibold text-indigo-600 mb-3">
              AI-Powered Property Search
            </h4>
            <p className="text-gray-600">
              Use our AI to find properties tailored to your exact needs, from
              bedspaces to luxury villas.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-xl font-semibold text-indigo-600 mb-3">
              Verified Listings
            </h4>
            <p className="text-gray-600">
              Browse a wide range of verified listings, ensuring trust and
              transparency in every transaction.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h4 className="text-xl font-semibold text-indigo-600 mb-3">
              Hassle-Free Transactions
            </h4>
            <p className="text-gray-600">
              Experience seamless property transactions with our secure platform
              and expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-indigo-600 py-12 text-white">
        <h3 className="text-3xl font-bold text-center mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <img
              src="/team-member-1.jpg" // Replace with actual image paths
              alt="Razique MK"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h4 className="text-lg font-semibold">Razique MK</h4>
            <p className="text-sm">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src="/team-member-2.jpg"
              alt="Rishan OK"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h4 className="text-lg font-semibold">Rishan OK</h4>
            <p className="text-sm">Chief Technology Officer</p>
          </div>
          <div className="text-center">
            <img
              src="/team-member-3.jpg"
              alt="Ali Khan"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h4 className="text-lg font-semibold">Ali Khan</h4>
            <p className="text-sm">Head of Operations</p>
          </div>
        </div>
      </section>

    
     
    </div>
  );
};

export default AboutUs;
