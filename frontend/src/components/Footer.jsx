import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-3 fixed bottom-0 left-0 w-full ">
      <div className="  h-[50px] px-4 w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Byte Me</h2>
            <p className="text-sm">© 2024 Byte Me. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
