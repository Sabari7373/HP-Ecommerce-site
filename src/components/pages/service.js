import React from 'react';

import Imagee from "../../assets/service9.png";
import Imageee from "../../assets/service5.png";
import Imageeee from "../../assets/service7.png";
const OurServices = () => {
  return (
    <div id="service" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">Our Services </h2>
    <p className="text-center text-lg text-gray-700 mb-8">
        We offer many services for our customer, Here are some of our services
      </p>


        <div className="text-center container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
          
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imagee} alt="Service 1" />
                <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Repair Service</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">HP Electronics is the one-stop solution for all your laptop services. Yes, we offer premium quality Laptop Service Center in Coimbatore. Whatever the problem may be on your laptop, we are well experienced to repair it. </p>
                  <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700">
                  Learn More
                </button>
                </div>
              </div>
            </div>

          
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imageee} alt="Service 2" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Online Purchase</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">Here you can purchase all the laptops with maximum 30% discount using Coupens. We can deliver within just 3 working days. For all our products has free Open box delivary Options , No Delivary Charges</p>
                  <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700">
                  Learn More
                </button>
                </div>
              </div>
            </div>

           
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imageeee} alt="Service 3" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Exchange Offers</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We Accept all brand Laptops for Exchanging. you can get a cashback offers worth Rs. 2500 for exchange laptops. We have dedicated team for servicing branded Laptops, Notebooks and Personal Computers.  </p>
                  <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700">
                  Learn More
                </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;