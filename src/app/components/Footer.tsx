import React from "react";

export const Footer = () => {
  return (
    <footer className="px-4 pt-20 pb-10 bg-black md:px-16 ">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <h3 className="mb-3 text-xl font-bold text-white">Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Home</li>
              <li className="mb-2">TV Shows</li>
              <li className="mb-2">Movies</li>
              
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-3 text-xl font-bold text-white">Help</h3>
            <ul className="text-gray-400">
              <li className="mb-2">FAQ</li>
              <li className="mb-2">Contact Us</li>
              {/* Add more help links */}
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-3 text-xl font-bold text-white">Follow Us</h3>
            <div className="flex">
              <ul className="text-gray-400">
                <li className="mb-2">Facebook</li>
                <li className="mb-2">Twitter</li>
                <li className="mb-2">Instagram</li>
               
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-3 text-xl font-bold text-white">Legal</h3>
            <div className="flex">
              <ul className="text-gray-400">
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Terms and conditions</li>
                <li className="mb-2">Contact Us</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
      <div className="pt-10">
        <p className="text-center text-white text-md md:text-lg">
          © 2025
          <span className="hover:underline"> Netflix</span>
        </p>
      </div>
    </footer>
  );
};
