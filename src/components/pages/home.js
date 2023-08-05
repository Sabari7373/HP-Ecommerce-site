import React from "react";
import video from '../../assets/video.mp4'

const HomePage = () => {
  return (
    <div id="home" className="w-full h-[120vh] min-h-fit p-6 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto md:flex md:flex-row-reverse md:items-center">
     
        <div className="aspect-w-18 aspect-h-9 md:w-[60%] md:pr-8 my-10 rounded-lg">
            <video className="w-full h-full rounded-[40px]" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="text-center md:text-left">
            <h1 className="text-[42px]  font-bold text-gray-600 mb-6 ml-[10px]">Buy Your <span className="text-gray-800">Dream Laptop</span></h1>
            <h2 className="text-center text-4xl font-bold text-gray-600 mb-6 py-[15px] pr-[50px] hover:text-sky-500 ">Laptops for every lifestyle</h2>
            <p className="text-center tracking-wide text-lg text-black-700 mb-10 mr-[55px]">
            Welcome to our HP Laptops, where finding your dream laptops is our top priority. Our team of experienced sellers is dedicated to providing exceptional service and helping you navigate the complex process of buying or selling a products.
            </p>

         
          <div className="text-center md:text-left ml-[74px]">
          <form className="flex flex-col md:flex-row gap-4">
          
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your Email"
              className="px-6 py-2 bg-white rounded-full shadow-lg focus:outline-none"
            />
            <button className="px-6 py-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-green-900">
              Get Started
            </button>
          </form>
          
      
          </div>
          </div>
        </div> 
      </div>
     
    </div>
  );
};

export default HomePage;