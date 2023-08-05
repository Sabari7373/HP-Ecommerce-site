import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className=" w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-gray-400 to-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-center text-4xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-900 mb-8">
            If you have any queries , please don't hesitate to contact us
            </p>
         <div>
          
         </div>
            <h2 className="text-center text-2xl font-bold text-gray-900 mt-10 mb-4">No.25,</h2>
            <h2 className="text-center text-2xl font-bold text-gray-900 mt-10 mb-4">Dr.Rathakrishnan road</h2>
            <h2 className="text-center text-2xl font-bold text-gray-900 mt-10 mb-4">ontact UsC</h2>
            <h2 className="text-center text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>
            <h2 className="text-center text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>

            67, Dr.Rathakrishnan road, 9th Cross St, Gandhipuram, Tamil Nadu 641012
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800"
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