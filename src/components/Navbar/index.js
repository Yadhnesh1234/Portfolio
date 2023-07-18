// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-8 flex items-center justify-around">
      {/* Logo on the Left */}
      <span className="font-bold text-2xl">Y LOGO</span>
      <div></div>
      {/* Blog and Say Hello Group */}
      <div className="flex items-center space-x-4">

        {/* Blog Link */}
        <a href="/" className="text-gray-800 hover:text-purple-600 transition duration-300 text-xl">Blog</a>

        {/* Say Hello Button */}
        <button
          className="border border-purple-600 text-purple-600 py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white text-lg px-0 py-3 w-32"
        >
          Say Hello
        </button>

      </div>

    </nav>
  );
};

export default Navbar;
