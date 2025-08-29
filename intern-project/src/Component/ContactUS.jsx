import { useState, useEffect } from "react";

// Import images

import Navbar from "../Component/navbar"
import Location from "../Component/ContactUScontainer/Location";
import Introduction from "../Component/aboutuspagecontainer/Introduction";
import EmailContact from "./Homecontainer/Footer";
import AboutUS from "./Homecontainer/aboutus";
import BritishTravelAwards from "./Homecontainer/britishTravelAward";
import { FaBox, FaPlane } from "react-icons/fa";
import ContactForm from "./ContactUScontainer/ContactForm";
import WhastappChat from "./Homecontainer/whatsapp";


export default function ContactUS() {
 

 

  return (
    <div>
        <Navbar/>
        <div className="relative h-[130px]"></div>
    <div className="w-full h-[500px]  relative relative  ">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="Hero"
        className="w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Dots Navigation */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            } hover:bg-white transition-colors duration-300`}
          />
        ))}
        
      </div>
      <div className="absolute bottom-[40%] left-1/2 transform -translate-x-[100%] flex items-center justify-center">
  <div className="text-white text-lg font-semibold text-[5em]">
    Contact Us
  </div>
</div>




    </div>
    <Location/>
    <ContactForm/>
   <EmailContact />
    <AboutUS />
    <BritishTravelAwards />
    <WhastappChat/>
   
     
    
    </div>
  );
}
