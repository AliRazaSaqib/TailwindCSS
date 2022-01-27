/** @format */

import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen text-center container mx-auto lg:px-8 px-3">
        <h1 className="font-sans text-black lg:text-5xl xl:text-5xl md:text-5xl sm:text-4xl text-1xl  ">
          Main Hero Message to sell yourself!
        </h1>
        <p className="lg:text-lg xl:text-lg md:text-lg sm:text-sm text-sm font-mono mt-4">
          Sub-hero message, not too long and not too short. Make it just right!
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded hover:text-slate-900">
            Click Me
          </button>
          <a href="/" className="font-mono hover:underlinepx-8 py-4">
            Additional Information
          </a>
        </div>

        <div className="absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition duration-300 animate-ping mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            />
          </svg>
          <p className="font-mono mt-2">Slide down</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
