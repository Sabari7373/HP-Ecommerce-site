import React from "react";
import conceptImage from "../../assets/concept-3.png";

const Demo = () => {
  return (
    <div id="Our-Specs" className="flex flex-col md:flex-row w-full h-screen bg-gradient-to-b from-gray-400 to-white">
           
      <div className="w-full md:w-2/3 p-4 md:p-8 bg-gradient-to-b from-gray-400 to-white flex items-center justify-center">

          <div className=" md:pl-10 py-[50px] mt-20">
            <img
              src={conceptImage}
              alt="Home"
              className="w-full h-auto object-cover rounded-[40px] "
            />
          </div>

      </div>

      <div className="w-full md:w-1/2 pl-2 flex items-center justify-center">
           
        <div className="text-black mr-[50px] text-center mt-20  italic">
        <h2 className="text-[37px] font-bold text-gray-900  hover:text-sky-900 mb-[30px]">Our Specifications</h2>

          <br/>
          <h1 className="text-[27px] font-[600] mb-3 text-white hover:text-sky-900 bg-red-500 rounded-[8px]">Latest Technology</h1>
          <br/>
          <h1 className="text-[27px] font-[600] mb-3 text-white hover:text-sky-900 bg-cyan-400 rounded-[8px]">High Performance</h1>
          <br/>
          <h1 className="text-[27px] font-[600] mb-3 text-white hover:text-sky-900 bg-yellow-500 rounded-[8px]">Low prices</h1>
          <br/>
          <h1 className="text-[27px] font-[600] mb-3 text-white hover:text-sky-900 bg-green-500 rounded-[8px]">High Specifications</h1>
          <br/>
          <h1 className="text-[27px] font-[600] mb-3 text-white hover:text-sky-900 bg-blue-500 rounded-[8px]">Battery Optimizations </h1>

        </div>
      </div>
    </div>
  );
};

export default Demo;