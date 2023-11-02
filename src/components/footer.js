import React from "react";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-500 to-gray-800">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <nav className="py-4 -mx-5 flex flex-wrap justify-center" aria-label="Footer">
         
          <div className="px-5  cursor-pointer">
            <Link to="home"  className="text-white hover:text-cyan-300">
              Home
            </Link>
          </div>
          <div className="px-5  cursor-pointer">
            <Link to="feature" className="text-white hover:text-cyan-300">
              Features
            </Link>
          </div>
          <div className="px-5  cursor-pointer">
            <Link to="reviews"className="text-white hover:text-cyan-300">
              Customers
            </Link>
          </div>
          <div className="px-5  cursor-pointer">
            <Link to="service"className="text-white hover:text-cyan-300">
              Services
            </Link>
          </div>
          <div className="px-5  cursor-pointer">
            <Link to="contact" className="text-white hover:text-cyan-300">
              Contact Us
            </Link>
          </div>
        </nav>

         
          <div className="mt-6 row-span-1">
            
            <div >
              <h3 className="text-white hover:text-black text-center  text-lg font-medium ">
                  Social Media links
              </h3>
               <div  className="text-white  text-center  text-lg font-medium">
              
                  <span  className="text-center px-5 hover:text-cyan-300">FaceBook</span>
                  <span  className="text-center px-5 hover:text-cyan-300">Instsagram</span>
                  <span  className="text-center px-5 hover:text-cyan-300">WhatsApp</span>
                  <span  className="text-center px-5 hover:text-cyan-300">Twitter</span> 
               </div>
              
            </div>
            <p className="mt-3 p-4 text-center text-base text-white">&copy; {new Date().getFullYear()} Hp Electronics. All rights reserved.</p>
          </div>        
          
      </div>
    </footer>
  );
};
export default Footer;