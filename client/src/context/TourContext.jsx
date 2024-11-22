import { createContext } from "react";

import dubai from "../assets/desertsafari.jpg"
import abudhabi from "../assets/abudhabi.jpg"
import sharjah from "../assets/sharjah.jpg"
import rak from "../assets/rak.jpg"
import fujairah from "../assets/fujairah.jpg"

export const TourContext = createContext();

const TourProvider = ({ children }) => {
    const Tours = [
        {
          id: 1,
          title: "Dubai Desert Safari",
          price: 250,
          emirate: "Dubai",
          description: "Thrilling dune bashing and BBQ dinner.",
          image: dubai,
          itinerary: [
            "Pick-up from your hotel in Dubai",
            "Dune bashing adventure",
            "Sunset photography",
            "BBQ dinner with entertainment",
            "Drop-off at your hotel",
          ],
        },
        {
          id: 2,
          title: "Abu Dhabi City Tour",
          price: 350,
          emirate: "Abu Dhabi",
          description: "Explore the city and iconic landmarks.",
          image: abudhabi,
          itinerary: [
            "Pick-up from your hotel",
            "Visit Sheikh Zayed Grand Mosque",
            "Explore Louvre Abu Dhabi",
            "Lunch at a local restaurant",
            "Return to Dubai",
          ],
        },
        {
          id: 3,
          title: "Sharjah Heritage Tour",
          price: 200,
          emirate: "Sharjah",
          description: "Discover Sharjah's rich culture and history.",
          image: sharjah,
          itinerary: [
            "Visit Sharjah Museum of Islamic Civilization",
            "Tour Al Noor Mosque",
            "Explore Sharjah Art Foundation",
            "Return to your hotel",
          ],
        },
        {
          id: 4,
          title: "Ras Al Khaimah Adventure",
          price: 400,
          emirate: "Ras Al Khaimah",
          description: "Hiking, zip-lining, and outdoor fun.",
          image: rak,
          itinerary: [
            "Morning hike at Jebel Jais",
            "Zip-lining adventure",
            "Lunch at a mountain view restaurant",
            "Relaxation at a local resort",
            "Return to Dubai",
          ],
        },
        {
          id: 5,
          title: "Fujairah Beach Escape",
          price: 300,
          emirate: "Fujairah",
          description: "Relax at pristine beaches in Fujairah.",
          image: fujairah,
          itinerary: [
            "Pick-up from your hotel",
            "Relaxation at Fujairah beach resort",
            "Snorkeling and water sports",
            "Lunch by the beach",
            "Return to your hotel",
          ],
        },
      ];
      

  const value = {
    Tours,
  };

  return <TourContext.Provider value={value}>{children}</TourContext.Provider>;
};

export default TourProvider;
