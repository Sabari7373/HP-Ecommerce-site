import React from "react";
import Client1 from "../../assets/client1.png";
import Client4 from "../../assets/client4.png";
import Client5 from "../../assets/client5.png";

const OurClients = () => {
  return (
    <div id="reviews" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[37px] font-bold text-gray-900 mb-4">Our Happy Customers</h2>
          <p className="text-[20px] text-gray-700 mb-8">
            See what our Customers have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
        <div className="justify-center">
        <img
          className="w-24 h-24 object-cover ml-[142px] rounded-full"
          src={Client1}
          alt="Client 1"
        />
        <div className="z-10 bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
          " I recently purchased an HP laptop , Their sales team was knowledgeable and professional, and helped us find my dream laptop easily. "
          </p>
          <p className="text-gray-500 text-right">- Virat Kholi</p>
        </div>
      </div>
      <div className="justify-center">
      <img
        className="w-24 h-24 object-cover rounded-full ml-[142px]"
        src={Client4}
        alt="Client 1"
      />
      <div className="z-10 bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          "I have first time purchase from HP Electronics shopping experience was so amazing & recieved the product in very secure condition ."
        </p>
        <p className="text-gray-500 text-right">- Glenn Maxwell</p>
      </div>
    </div>
    <div className="justify-center">
    <img
      className="w-24 h-24 object-cover rounded-full ml-[142px]"
      src={Client5}
      alt="Client 1"
    />
    <div className="z-10 bg-white p-8 rounded-lg shadow-md">
      <p className="text-lg text-gray-700 mb-4">
        "I recently purchased an HP laptop, and I couldn't be happier with my choice. The performance is outstanding, Thank You"
      </p>
      <p className="text-gray-500 text-right">- Ab De Villiers</p>
    </div>
  </div>
  </div>
  </div>
</div>
  );
};

export default OurClients;