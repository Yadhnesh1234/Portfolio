import React, { useState, useEffect } from 'react';
import ProjectList from './helper';
import { IMG_HEIGHT, IMG_WIDTH } from '../../constants';

const Project = ({ isDarkTheme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle slide changes
  const handleSlide = (direction) => {
    const numProjects = ProjectList.length;
    if (direction === 'left') {
      setCurrentIndex((currentIndex - 1 + numProjects) % numProjects);
    } else if (direction === 'right') {
      setCurrentIndex((currentIndex + 1) % numProjects);
    }
  };

  // Function to automatically slide to the next project
  const autoSlide = () => {
    handleSlide('right');
  };

  // Use a useEffect hook to trigger autoSlide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(autoSlide, 3000);
    return () => {
      clearInterval(slideInterval);
    };
  }); // Depend on currentIndex to reset interval on manual slide

  return (
    <div
      className={`w-full text-center ${
        isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'
      } pt-20`}
    >
      <h1
        className={`text-3xl md:text-4xl lg:text-5xl font-eurostile font-semibold ${
          isDarkTheme ? 'text-green-500' : ''
        }`}
      >
        My Work
      </h1>
      <div className="relative mx-auto mt-6 max-w-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out p-12"
          style={{
            transform: `translateX(-${currentIndex * 24.67}%)`,
            width: `${ProjectList.length * 100}%`,
          }}
        >
          {ProjectList.map((val, index) => (
            <div
              key={index}
              className={`w-full h-1/2 ml-2 mr-2 ${
                index === currentIndex ? (isDarkTheme ? 'highlight-dark' : 'highlight') : 'blur'
              }`}
              style={{ width: IMG_WIDTH }}
            >
              <img
                src={val.image}
                alt=""
                height={IMG_HEIGHT}
                width={IMG_WIDTH}
                className={`w-full h-auto mx-auto hover:animate-bounce ${
                  isDarkTheme ? 'filter brightness-100 shadow-green' : 'shadow-md'
                }`}
                style={{
                  boxShadow: isDarkTheme ? '0 0 5px #00FF00, 0 0 15px rgba(0, 255, 0, 0.7)' : '0 0 9px rgba(0, 0, 0, 0.2)',
                }}
              />
              <p
                className={`text-lg md:text-xl lg:text-2xl font-semibold font-eurostile mt-4 ${
                  isDarkTheme ? 'text-green-500' : ''
                }`}
              >
                {val.name}
              </p>
              <p
                className={`text-sm md:text-lg lg:text-xl font-eurostile mt-2 ${
                  isDarkTheme ? 'text-gray-400' : ''
                }`}
              >
                {val.desc}
              </p>
            </div>
          ))}
        </div>
        <button
          className={`${isDarkTheme?'border-green-500 ':'border-purple-500 '} text-black absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 border rounded-lg shadow-md px-2 py-1 ${
            currentIndex === 0 ? 'invisible' : 'visible'
          }`}
          onClick={() => handleSlide('left')}
        >
          &lt;
        </button>
        <button
          className={`${isDarkTheme?'border-green-500 ':'border-purple-500 text'} text-black absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 border rounded-lg shadow-md px-2 py-1 `}
          onClick={() => handleSlide('right')}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Project;
