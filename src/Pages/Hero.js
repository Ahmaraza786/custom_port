



import React from 'react';
import { DownloadIcon } from '@heroicons/react/outline';
import profile from "./ahmad.png";

const cvFile = process.env.PUBLIC_URL + '/Ahmad.pdf';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
      <div className="mb-8">
        <img src={profile} alt="Ahmad" className="rounded-full w-32 h-32 mx-auto" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi! I'm Ahmad Raza 👋</h1>
      <h2 className="text-xl md:text-2xl mb-4">Full Stack Developer.</h2>
      <p className="mb-8 text-gray-700 max-w-md mx-auto">As a dedicated MERN Stack Developer, I am adept in crafting full-stack applications that are both dynamic and user-centric. My expertise spans MongoDB, Express.js, React, and Node.js, enabling me to engineer seamless, scalable, and performant web solutions.</p>
      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
          Hire Me
        </button>
        <a href={cvFile} download className="bg-transparent text-black py-3 px-8 rounded-full border border-black flex items-center justify-center hover:bg-gray-800 hover:text-white transition duration-300">
          <DownloadIcon className="h-5 w-5 mr-2" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
