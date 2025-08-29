import { useState, useEffect } from "react";


import Navbar from "./navbar"
import Service from "./Homecontainer/Service";
import Footer from "./Homecontainer/Footer";
import About from "./Homecontainer/About";
import Portfolio from "./Homecontainer/Portfolio";
import ContactForm  from "./Homecontainer/ContactForm";
import HeroSection from "./Homecontainer/Herosection";

export default function ImageSlider() {
  
  
   



  return (
    <div>
        <Navbar/>
        <div className="relative h-[100px]"></div>
    <div className="w-full h-[full]  relative relative border-b-3 border-blue-300 shadow-lg shadow-blue-200 ">
      
      <HeroSection />
       


    </div>
   
   <About />  
    <Service />
    <Portfolio />
    <ContactForm />
   
    
    <Footer />
    
    
    
    </div>
  );
}
