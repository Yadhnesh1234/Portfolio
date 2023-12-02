import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ isDarkTheme, toggleDarkTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${isDarkTheme ? 'bg-gray-900' : 'bg-white'
        } p-4 md:p-8 flex items-center justify-between relative z-10 ${isMenuOpen ? 'pb-16 md:pb-0' : ''
        } lg:justify-around`}
      style={{
        boxShadow: isDarkTheme ? '0 0 10px #00FF00, 0 0 20px rgba(0, 255, 0, 0.7)' : 'none',
      }}
    >
      {/* Logo on the Left */}
      <span className={`font-bold text-xl ${isDarkTheme ? 'text-green-500' : 'text-gray-800'}`}>
        Y
      </span>

      {/* Dark Theme Toggle Button */}
      <button
        onClick={toggleDarkTheme}
        className={`${isDarkTheme ? 'hover:bg-green-600' : 'hover:bg-purple-600'
          } text-white  transition duration-300 text-xl p-2 rounded-full`}
      >
        {isDarkTheme ? '🌙' : '☀️'}
      </button>

      {/* Hamburger Menu or Cross Button */}
      <div className="md:hidden">
        {isMenuOpen ? (
          <button
            onClick={toggleMenu}
            className="text-gray-500  transition duration-300 text-xl"
          >
            &#x2715; {/* Cross icon */}
          </button>
        ) : (
          <button
            onClick={toggleMenu}
            className="text-gray-500  transition duration-300 text-xl"
          >
            &#9776; {/* Hamburger icon */}
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex md:flex-row space-y-5 ${isMenuOpen ? 'flex flex-col mb-10 items-center md:justify-center ' : 'hidden md:block'} absolute md:static bottom-[-100%] md:bottom-auto left-0 md:left-auto w-full md:w-auto ${isDarkTheme ? 'bg-gray-900' : 'bg-white'
          } md:bg-transparent md:space-x-0 z-0`}
      >
        {/* Blog Link */}
        <a
          href="/"
          className={`block lg:mr-10 md:mr-10 ${isDarkTheme ? 'text-green-500 hover:text-gray-400' : 'text-gray-800 hover:text-purple-600'
            }  mt-7 ${isMenuOpen ? 'mr-1' : 'mr-10'} transition duration-300 text-lg  md:inline-block md:text-lg`}
        >
          Blog
        </a>

        {/* Say Hello Button */}
        <ScrollLink
          to="contact"  // This should match the ID of your contact section
          smooth={true}
          duration={500}
        >
          <button
            className={`border ${isDarkTheme ? 'border-green-500 hover:bg-green-600 text-green-500 hover:text-gray-900' : 'text-purple-900 hover:text-white border-purple-600 hover:bg-purple-600'
              }  py-2 px-4 rounded-full transition duration-300 ease-in-out  text-lg md:inline-block md:text-lg`}
          >Say Hello
          </button>
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
