import React from 'react';
import logoImage from '../../assets/avatar.svg';
import heroImage from '../../assets/devices.svg';
import About from '../../components/About';

const Landing = ({ isDarkTheme }) => {
  return (
    <div
      className={`${
        isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'
      } min-h-screen flex flex-col items-center justify-center mb-15 p-8 pt-24 md:p-8 lg:p-16`}
      style={{
        boxShadow: isDarkTheme
          ? '0 0 8px rgba(0, 255, 0, 0.2)'  // Slightly faint green shadow
          : 'none',
      }}
    >
      <h1
        className={`text-center text-3xl md:text-4xl lg:text-5xl font-eurostile font-semibold ${
          isDarkTheme ? 'text-green-500' : ''
        }`}
      >
        Full Stack Web Developer & Blogger
      </h1>
      <p
        className={`text-center text-sm md:text-lg lg:text-xl font-eurostile mt-4 md:mt-8 ${
          isDarkTheme ? 'text-green-500' : ''
        }`}
      >
        I design and code beautifully simple things, and I love what I do.
      </p>
      <img
        src={logoImage}
        alt=""
        className={`mt-6 md:mt-12 w-52 md:w-60 lg:w-72 h-auto ${
          isDarkTheme ? 'filter brightness-500 ' : ''
        }`}
        style={{
          boxShadow: isDarkTheme ? '0 0 10px #00FF00, 0 0 20px rgba(0, 255, 0, 0.7)' : 'none',
          borderRadius:90, 
        }}
      />
      <img
        src={heroImage}
        alt=""
        width="860"
        height="348.75"
        className={`mt-8 md:mt-12 max-w-full h-auto ${
          isDarkTheme ? 'filter brightness-50' : ''
        }`}
      />
      <About isDarkTheme={isDarkTheme}/>
    </div>
  );
};

export default Landing;
