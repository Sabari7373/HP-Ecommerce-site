import React from "react";
import PropertyImage1 from "../../assets/66.png";
import PropertyImage2 from "../../assets/77.png";
import PropertyImage3 from "../../assets/88.png";
import PropertyImage4 from "../../assets/99.png";

const SaleProperties = () => {
  return (
    <div id="sale" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-gray-400 to-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">Trending Sale Products</h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Avail exciting offer on Newly Launched. Purchase till stocks last.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">


          <div className="text-center  hover:shadow-md hover:shadow-[#040c16]">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={PropertyImage1} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">HP 15s | 13 Gen</h3>
                <p className="text-sm text-gray-500">Ryzon 3 | 512 ssd | 15.6 inch</p>
                <p class="text-lg font-bold text-gray-700 mt-4"><del>Rs. 55,000</del> On Sale Now: Rs.49,000</p>
                <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>



          <div className="text-center hover:shadow-md hover:shadow-[#040c16]">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={PropertyImage2} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">Hp 14s | 12th Gen</h3>
                <p className="text-sm text-gray-500">Intel 5 | 1 tb ssd | 14 inch</p>
                <p class="text-lg font-bold text-gray-700 mt-4"><del>Rs. 40,000</del> On Sale Now: Rs.32,990</p>
                <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="text-center hover:shadow-md hover:shadow-[#040c16]">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={PropertyImage3} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">HP Core 13 | 11th Gen</h3>
                <p className="text-sm text-gray-500">Core i7 | 512 ssd ba | 13 inch</p>
                <p class="text-lg font-bold text-gray-700 mt-4"><del>Rs. 55,000</del> On Sale Now: Rs.48,800</p>
                <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="text-center hover:shadow-md hover:shadow-[#040c16]">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={PropertyImage4} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">HP 15s | 11th Gen</h3>
                <p className="text-sm text-gray-500">intel 7 | 1 tb ssd | 14.5 inch</p>
                <p class="text-lg font-bold text-gray-700 mt-4"><del>Rs. 70,000</del> On Sale Now: Rs.59,000</p>
                <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-amber-700">
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

export default SaleProperties;