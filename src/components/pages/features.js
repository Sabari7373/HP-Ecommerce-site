import React from "react";
import Imagee from "../../assets/1.png";
import Imageee from "../../assets/2.png";
import Imageeee from "../../assets/3.png";
import image from '../../assets/image4.png';

const Features = () => {
  return (
    <div id="feature" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-6 py-[15px]">Feature Products</h2>
    <p className="text-center text-lg text-gray-700 mb-8">
      Here are some of our featured products
      </p>
        <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imagee} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">Hp Pavilion </h3>
                <p className="text-[17px] text-gray-500">Rizon 5  |  512 ssd  |  15 inch</p>
                <p className="text-lg font-bold text-gray-700 mt-4"> Rs. 58,000</p>
                <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className='text-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imageee} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">HP Spectre</h3>
                <p className="text-[17px] text-gray-500">Core i7 | 512 ssd ba | 14 inch</p>
                <p className="text-lg font-bold text-gray-700 mt-4">Rs. 1,25,000</p>
                <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className='text-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imageeee} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">HP EliteBook</h3>
                <p className="text-[17px] text-gray-500">Ryzon 3 | 512 ssd | 15.6 inch</p>
                <p className="text-lg font-bold text-gray-700 mt-4">Rs. 90,000</p>
                <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className='text-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={image} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">HP Probook </h3>
                <p className="text-[17px] text-gray-500">Intel 5 | 1 tb ssd | 14 inch</p>
                <p className="text-lg font-bold text-gray-700 mt-4">Rs. 78,000</p>
                <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700  ">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;