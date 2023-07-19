import React from 'react';
import logoImage from '../../assets/avatar.svg'; 
import heroImage from '../../assets/devices.svg'; 

const Landing = () => {
  return (
    <>
    <div className="bg-white min-h-screen flex items-center justify-center flex-col p-4 md:p-8 lg:p-16">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-eurostile font-semibold">
        Full Stack Web Developer & Blogger
      </h1>
      <p className="text-center text-sm md:text-lg lg:text-xl font-eurostile mt-4 md:mt-8">
        I design and code beautifully simple things, and I love what I do.
      </p>
      <img
        src={logoImage}
        alt=""
        className="mt-6 md:mt-12 w-52 md:w-60 lg:w-72 h-auto"
      />
      <img
        src={heroImage}
        alt=""
        width="860"
        height="348.75"
        className="mt-8 md:mt-12 max-w-full h-auto"
      />
    </div>
    </>
  );
};

export default Landing;
