import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
const About = ({ isDarkTheme }) => {
  const resumePdfPath = './YadhneshGangurde_Resume.pdf';
  return (
    <div
      className={`${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-purple-600 text-white'
        } w-screen h-600 relative top-0`}
      style={{
        boxShadow: isDarkTheme
          ? '0 -4px 8px rgba(0, 255, 0, 0.4)' // Upper shadow (top side)
          : 'none',
        transition: 'box-shadow 0.5s', // Add a smooth transition
      }}
    >
      <div
        className={`flex flex-col justify-center items-center text-base p-20 lg:p-72 text-center ${isDarkTheme ? 'text-white' : 'text-black'
          }`}
      >
        <h2
          className={`text-4xl font-bold ${isDarkTheme ? 'text-green-500' : 'text-white'
            }`}
        >
          Hi, I’m Yadhnesh. Nice to meet you.
        </h2>
        <p
          className={`text-lg mt-8 ${isDarkTheme ? 'text-white' : 'text-white'
            }`}
        >
          A passionate Full Stack Web Developer. With expertise in HTML, CSS, JavaScript, Node.js, and Python, I craft captivating user interfaces and robust backends. A problem solver and team player, I love collaborating to bring ideas to life. Constantly learning and staying on top of trends, I'm committed to delivering exceptional results. Let's create something amazing together!
        </p>
        {/* Icons for LinkedIn, GitHub, and Instagram */}
        <div className="mt-4 flex">
          <a
            href="https://www.linkedin.com/in/yadhnesh-gangurde-7842251b8/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-500 hover:text-gray-700 ${isDarkTheme ? '' : 'text-gray-700 opacity-95'
              }`}
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/Yadhnesh1234"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-4 text-gray-500 hover:text-gray-700 ${isDarkTheme ? '' : 'text-gray-700 opacity-95'
              }`}
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.instagram.com/yadhnesh__gangurde/"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-4 text-gray-500 hover:text-gray-700 ${isDarkTheme ? '' : 'text-gray-700 opacity-95'
              }`}
          >
            <FaInstagram size={32} />
          </a>
        </div>
        <button
          className={`mt-4 bg-transparent ${isDarkTheme ?'hover:bg-black':'hover:bg-purple-900'} px-4 py-2 rounded-full text-white border ${isDarkTheme ? 'border-green-500' : 'border-white'
            } focus:outline-none ${isDarkTheme ? '' : 'opacity-95'}`}
        >
          <a
            href={resumePdfPath}
            download="YourResume.pdf"
            className="flex items-center"
          >
            <FiDownload size={20} className="mr-2" />
            Download Resume
          </a>
        </button>
      </div>
      {/* Glowing upper shadow */}
      {isDarkTheme && (
        <div
          className="absolute top-0 left-0 w-full h-8 bg-green-300 opacity-0"
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.6)', // More intense glowing effect
            animation: 'pulsate 2s infinite',
          }}
        ></div>
      )}
    </div>
  );
};

export default About;
