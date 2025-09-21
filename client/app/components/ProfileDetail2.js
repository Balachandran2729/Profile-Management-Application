// components/ProfileDetail2.js
"use client";
import React from 'react';
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';
import { MdOutlineMotionPhotosPaused } from "react-icons/md";

export default function ProfileDetail2() {
  return (
    // Adjusted outer margins for mobile
    <div className="flex flex-col justify-center items-center mt-6 sm:mt-10 mb-6 sm:mb-10 px-4"> {/* Added px-4 for mobile padding */}
      {/* Adjusted title size for mobile */}
      <h1 className="text-gray-900 font-bold text-3xl sm:text-4xl">Visual Resume</h1>

      {/* Container for the video - Adjusted top margin for mobile */}
      <div className="mt-4 sm:mt-6 w-full max-w-4xl relative rounded-xl overflow-hidden shadow-lg bg-gray-100">
        {/* Background Image - Adjusted height for mobile */}
        <div className="relative h-60 sm:h-80 md:h-96 w-full"> {/* h-60 on mobile, h-80 on sm, h-96 on md */}
          <Image
            src="/3.png"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={85}
            className="absolute inset-0"
          />

          {/* Overlay with YouTube Logo - Adjusted positioning and size for mobile */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center space-x-2 text-white">
            <div className="flex items-center gap-2 sm:gap-2.5"> {/* Slightly reduced gap on mobile */}
              {/* Adjusted icon size for mobile */}
              <FaYoutube className='w-8 h-8 sm:w-10 sm:h-10' />
              {/* Adjusted text size for mobile */}
              <span className="font-semibold text-lg sm:text-xl">YouTube</span>
            </div>
          </div>

          {/* Play Button and Watch Full Video - Adjusted positioning and size for mobile */}
          <div className="absolute bottom-4 sm:bottom-6 right-3 sm:right-5 flex items-center space-x-2">
            {/* Adjusted icon size and hover effect for mobile */}
            <MdOutlineMotionPhotosPaused className='text-white w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:text-gray-300 transform duration-500' />
            {/* Adjusted text size, padding, and border classes for mobile */}
            <span className='text-white border border-white rounded-full bg-transparent text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 font-bold cursor-pointer hover:text-gray-300 hover:border-gray-300 transform duration-500'>
              Watch The Full Video
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}