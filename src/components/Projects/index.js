import React, { useState, useEffect } from 'react';
import ProjectList from './helper';
import { FaLink, FaGithub } from 'react-icons/fa';
import { IMG_HEIGHT, IMG_WIDTH } from '../../constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      className={`w-full text-center ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'
        } pt-20`}
    >
      <ToastContainer />
      <h1
        className={`text-3xl md:text-4xl lg:text-5xl font-eurostile font-semibold ${isDarkTheme ? 'text-green-500' : ''
          }`}
      >
        My Work
      </h1>
      <div className="relative mx-auto mt-6 max-w-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out p-12"
          style={{
            transform: `translateX(-${currentIndex * 24.45}%)`,
            width: `${ProjectList.length * 100}%`,
          }}
        >
          {ProjectList.map((val, index) => (
            <div
              key={index}
              className={`w-full h-1/2 ml-2 mr-2 ${index === currentIndex ? (isDarkTheme ? 'highlight-dark' : 'highlight') : 'blur'
                }`}
              style={{ width: IMG_WIDTH }}
            >
              <div className={`bg-white w-500 h-500 hover:animate-bounce ${isDarkTheme ? 'text-white shadow-green' : 'shadow-md'} rounded-lg overflow-hidden h-full`}>

                <img
                  src={val.image}
                  alt=""
                  height={IMG_HEIGHT}
                  width={IMG_WIDTH}
                  className={`w-full h-auto mx-auto ${isDarkTheme ? 'filter brightness-100 shadow-green' : 'shadow-md'
                    }`}
                  style={{
                    boxShadow: isDarkTheme
                      ? '0 0 5px #00FF00, 0 0 15px rgba(0, 255, 0, 0.7)'
                      : '0 0 9px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </div>
              <p
                className={`text-lg md:text-xl lg:text-2xl font-semibold font-eurostile mt-4 ${isDarkTheme ? 'text-green-500' : ''
                  }`}
              >
                {val.name}
              </p>
              <p
                className={`text-sm md:text-lg lg:text-xl font-eurostile mt-2 ${isDarkTheme ? 'text-gray-400' : ''
                  }`}
              >
                {val.desc}
              </p>
              <div className="flex mt-2 justify-evenly">
                {val.live_url ? (
                  <a
                    href={val.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm mr-4 ${isDarkTheme ? 'text-green-500' : 'text-purple-500'
                      } hover:underline`}
                  >
                    <FaLink size={22} className="mr-1" />
                  </a>
                ) :
                  <span
                    className={`text-sm mr-4 ${isDarkTheme ? 'text-green-500' : 'text-purple-500'
                      } hover:underline`}
                    style={{cursor:"pointer"}}
                    onClick={()=>{toast.error("Sorry Live Demo Not Available ! ",{ position: toast.POSITION.TOP_CENTER })}}
                  >
                    <FaLink size={22} className="mr-1" />
                  </span>
                }
                {val.git_hub_link && (
                  <a
                    href={val.git_hub_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm ${isDarkTheme ? 'text-green-500' : 'text-purple-500'
                      } hover:underline`}
                  >
                    <FaGithub size={24} className="mr-1" />
                  </a>
                )}
              </div>
            </div>
          ))}

        </div>
        <button
          className={`${isDarkTheme ? 'border-green-500 ' : 'border-purple-500 '} text-black absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 border rounded-lg shadow-md px-2 py-1 ${currentIndex === 0 ? 'invisible' : 'visible'
            }`}
          onClick={() => handleSlide('left')}
        >
          &lt;
        </button>
        <button
          className={`${isDarkTheme ? 'border-green-500 ' : 'border-purple-500 text'} text-black absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 border rounded-lg shadow-md px-2 py-1 `}
          onClick={() => handleSlide('right')}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Project;
