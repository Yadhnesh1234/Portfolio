import React from 'react';
import SkillList from './helper';
import { LOGO_HEIGHT, LOGO_WIDTH } from '../../constants';

const Skills = ({ isDarkTheme }) => {
  return (
    <div
      className={`${
        isDarkTheme ? 'bg-gray-900 text-white' : ''
      } w-screen h-auto`}
    >
      <div className="flex justify-center w-90">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-eurostile font-semibold ${isDarkTheme ? 'text-green-500' : 'hover:underline'}`}>
          Areas of Expertise
        </h1>
      </div>
      <div className="mt-14 w-100 flex justify-center flex-wrap">
        {SkillList.map((val) => {
          return (
            <div
              className={`ml-10 h-50 mr-10 mt-3 ${isDarkTheme ? 'hover:text-purple-600' : ''} lg:pr-24 lg:pl-24`}
              key={val.name}
            >
              <img
                src={val.logo}
                alt=""
                height={LOGO_HEIGHT}
                width={LOGO_WIDTH}
                className={`shadow-md border ${
                  isDarkTheme ? 'border-green-500' : 'none'
                } ${isDarkTheme ? 'filter brightness-200 shadow-green' : ''} ${
                  isDarkTheme ? 'animate-pulse' : 'hover:animate-bounce'
                }`}
                style={{
                  boxShadow: isDarkTheme ? '0 0 10px #00FF00, 0 0 20px rgba(0, 255, 0, 0.7)' : '0 0 5px rgba(0, 0, 0, 0.2)',
                  borderRadius: isDarkTheme ? 8 : 0,
                }}
              />
              <p
                className={`text-center text-sm md:text-lg lg:text-xl font-eurostile mt-4 md:mt-8 ${
                  isDarkTheme ? 'text-green-500' : ''
                }`}
              >
                {val.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
