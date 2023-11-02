import React from "react";
import Client5 from '../../assets/client5.png'

const ContactUs = () => {
  return (
    <div id="contact" className=" w-[100%] min-h-screen p-4 flex items-center bg-gradient-to-b from-gray-400 to-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className=" max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>

            <div className="ml-[25%] mt-24 w-[150%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
              <div className="justify-center">

                <div className="z-10 bg-white p-1 rounded-lg shadow-md">

                  <h2 className="text-center text-[25px] font-bold text-gray-900 mt-2 mb-2">Contact Us</h2>

                </div>
              </div>
            </div>

            <div className="w-[300%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="justify-center">

                <div className="z-10 bg-white p-6 rounded-lg shadow-md">
                  <p className=" text-center text-lg text-gray-900 mb-2">
                    <h4 className="text-center text-[17px] font-bold text-gray-900 mb-1 ">Headquarters </h4>
                    No. 10/12 , Joshy Towers , Vilankurchi Road
                    Cheranmaa nagar , Coimbatore - 641035
                  </p>

                </div>
              </div>
            </div>

            <div className=" mt-5 w-[300%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="justify-center">

                <div className="z-10 bg-white p-4 rounded-lg shadow-md">
                  <p className="text-lg text-gray-700 mb-4">
                    <h4 className="text-center text-[17px] font-bold text-gray-900 mt-0.5 "> Call For Ordering, enquiring, complaints & feedback</h4>
                  </p>
                  <h4 className="text-center text-[15px] font-bold text-gray-900 mt-3 mb-2">General Enquiry : +91 9876 543 210</h4>
                  <h4 className="text-center text-[15px] font-bold text-gray-900 mt-3 mb-2">Whatsapp chat : +91 9898 656 532</h4>
                  <h4 className="text-center text-[15px] font-bold text-gray-900 mt-3 mb-2">Email : hpelectronics.online@gmail.com</h4>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mt-24 sm:mt-16 md:mt-[120px]">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-900">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="py-2 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-900">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-2 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-900">
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="py-2 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-900">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className="py-2 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-gray-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

