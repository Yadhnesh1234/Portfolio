import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-white p-4 md:p-8 flex items-center justify-around relative z-10 ${isMenuOpen ? 'pb-16 md:pb-0' : ''}`}>
      {/* Logo on the Left */}
      <span className="font-bold text-xl">Y LOGO</span>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 hover:text-purple-600 transition duration-300 text-xl"
        >
          &#9776;
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex md:flex-row space-x-4 space-y-5 ${isMenuOpen ? 'flex flex-col items-center justify-center md:block' : 'hidden md:block'} absolute md:static bottom-[-100%] md:bottom-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent md:space-x-0 z-0`}
      >
        {/* Blog Link */}
        <a href="/" className="block text-gray-800 hover:text-purple-600 transition duration-300 text-lg md:inline-block md:text-lg">Blog</a>

        {/* Say Hello Button */}
        <button
          className="border border-purple-600 text-purple-600 py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white text-lg md:inline-block md:text-lg"
        >
          Say Hello
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
