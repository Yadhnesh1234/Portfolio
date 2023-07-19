// Landing.js
import React from 'react';
import logoImage from '../../assets/avatar.svg'; 
import heroImage from '../../assets/devices.svg'; 

const Landing = () => {
  return (
    <>
    <div className="bg-white h-screen flex items-center justify-center flex-col ">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-eurostile font-semibold text-center">
        Full Stack Web Developer & Blogger
      </h1>
      <p className="text-center text-sm md:text-lg lg:text-xl font-eurostile mt-8 text-center">
        I design and code beautifully simple things, and I love what I do.
      </p>
      <img
        src={logoImage}
        alt=""
        width="210"
        height="229.34"
        className="mt-12 w-auto h-auto"
      />
      <img
        src={heroImage}
        alt=""
        width="860"
        height="348.75"
        className="mt-24"
      />
    </div>
    </>
  );
};

export default Landing