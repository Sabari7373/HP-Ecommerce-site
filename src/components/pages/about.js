import React from "react";
import Image from "../../assets/4.png";

const AboutUs = () => {
  return (
    
   <div id="about" className="w-full h-fit">
  
    <div  className=" flex  md:flex-row w-full h-screen white bg-gradient-to-b from-gray-400 to-white">
    
      <div className=" w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
      
          <img
            src={Image}
            alt="About Us"
            className="w-full h-[370px] object-cover rounded-[30px]"
          />
        </div>
  

       
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
      
        <div className="text-center md:text-left">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-800 py-[40px]">
            About Us
          </h2>
          <p className="font-serif tracking-wide text-center text-lg md:text-xl text-gray-900 mb-6 ">
          Welcome to my HP Electronics Laptops, where our mission is to provide exceptional service and expertise to help our customer achieve their dream laptops.
            <br/>
            <br/>
            HP Electronics is the customer centric service provider located in Coimbatore. We offering various services since 2020. Along with three years of experience in laptops sales and service , Mr. Sabari Arun an energetic professional started making his dream come true. We have one of the best laptops sales company in Coimbatore.
          </p>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;