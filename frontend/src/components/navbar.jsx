import React from 'react'

const navbar = () => {
  return (
    <div className ="mainZero bg-white min-h-screen">
    <div className="nav flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-black text-white">
        <p className="title text-3xl font-bold mb-4 sm:mb-0">Byte Me</p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
            <a href="#services" className="text-white hover:text-gray-300">Services</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
    </div>
</div>

  )
}

export default navbar
