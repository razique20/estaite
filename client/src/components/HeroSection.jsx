import { useNavigate } from "react-router-dom";
const HeroSection = () =>{


  const navigate = useNavigate()



return(
  <div className="relative">
    {/* Transparent Menu Bar */}
    <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-10 text-white py-4 px-8 flex justify-end items-center">
      {/* <div className="text-2xl font-bold">RAAZI</div> */}
      <ul className="flex space-x-6 ">
        <li>
          <a href="/about" className="hover:text-gray-300">About</a>
        </li>
        <li>
          <a href="/properties" className="hover:text-gray-300">Properties</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>

    {/* Hero Content */}
    <div className="bg-gray-900 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">ESTAITE</h1>
      <p className="text-xl mb-6">The AI Realtor – Find your perfect place, from bedspaces to land!</p>
      <button onClick={() => navigate('/properties')} className="bg-indigo-600 px-6 py-3 rounded-lg text-white hover:bg-indigo-700">
        Browse Properties
      </button>
    </div>
  </div>
);
} 
export default HeroSection;
