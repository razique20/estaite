import { createContext } from "react";
import studio from "../assets/studio.jpg";
import onebhk from "../assets/1bhk.jpg";
import twobhk from "../assets/2bhk.jpg";
import bedspace from "../assets/bedspace.jpg"

export const PropertyContext =  createContext()

const PropertyContextProvider = ({children}) => {


    const properties = [
        {
          id: 1,
          image:studio,
          title: "Studio Apartment",
          price: 3500,
          location: "Dubai",
          type: "Apartment",
        },
        {
          id: 2,
          image:onebhk,
    
          title: "1 BHK in Sharjah",
          price: 2500,
          location: "Sharjah",
          type: "Apartment",
        },
        {
          id: 3,
          image:bedspace,
          title: "Bedspace in Ajman",
          price: 800,
          location: "Ajman",
          type: "Bedspace",
        },
        {
          id: 4,
          image: twobhk,
          title: "2 BHK Villa",
          price: 5500,
          location: "Abu Dhabi",
          type: "Villa",
        },
        {
          id: 5,
          image: twobhk,
          title: "2 BHK Villa",
          price: 5500,
          location: "Abu Dhabi",
          type: "Villa",
        },
        {
          id: 6,
          image:studio,
          title: "Studio Apartment",
          price: 3500,
          location: "Dubai",
          type: "Apartment",
        },
        {
          id: 7,
          image:onebhk,
    
          title: "1 BHK in Sharjah",
          price: 2500,
          location: "Sharjah",
          type: "Apartment",
        },
        {
          id: 8,
          image:bedspace,
          title: "Bedspace in Ajman",
          price: 800,
          location: "Ajman",
          type: "Bedspace",
        },
        {
          id: 9,
          image: twobhk,
          title: "2 BHK Villa",
          price: 5500,
          location: "Abu Dhabi",
          type: "Villa",
        },
        {
          id: 10,
          image: twobhk,
          title: "2 BHK Villa",
          price: 5500,
          location: "Abu Dhabi",
          type: "Villa",
        },
        {
          id: 11,
          image:studio,
          title: "Studio Apartment",
          price: 3500,
          location: "Dubai",
          type: "Apartment",
        },
        {
          id: 12,
          image:onebhk,
    
          title: "1 BHK in Sharjah",
          price: 2500,
          location: "Sharjah",
          type: "Apartment",
        },
        {
          id: 13,
          image:bedspace,
          title: "Bedspace in Ajman",
          price: 800,
          location: "Ajman",
          type: "Bedspace",
        },
        {
          id: 14,
          image: twobhk,
          title: "2 BHK Villa",
          price: 5500,
          location: "Abu Dhabi",
          type: "Villa",
        },
        {
          id: 15,
          image: twobhk,
          title: "2 BHK Villa",
          price: 5500,
          location: "Abu Dhabi",
          type: "Villa",
        },
        {
          id: 16,
          image: twobhk,
          title: "2 BHK Villa",
          price: 5500,
          location: "Abu Dhabi",
          type: "Villa",
        },
        {
          id: 17,
          image: twobhk,
          title: "2 BHK Villa",
          price: 5500,
          location: "Abu Dhabi",
          type: "Villa",
        },

      ];


    const value = {
        properties

        


    }



    return(
        <PropertyContext.Provider value={value}>
            {children}
        </PropertyContext.Provider>
    )
}

export default PropertyContextProvider;