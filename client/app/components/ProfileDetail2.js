"use client";
import React from 'react';
import Image from 'next/image';
import {  FaYoutube} from 'react-icons/fa';
import { MdOutlineMotionPhotosPaused } from "react-icons/md";

export default function ProfileDetail2() {

  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-10">
      <h1 className="text-gray-900 font-bold text-4xl">Visual Resume</h1>
      
      {/* Container for the video */}
      <div className="mt-6 w-full max-w-4xl relative rounded-xl overflow-hidden shadow-lg bg-gray-100">
        {/* Background Image */}
        <div className="relative h-80 md:h-96 w-full">
          <Image
            src="/3.png"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={85}
            className="absolute inset-0"
          />
          
          {/* Overlay with YouTube Logo */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
            <div className="flex items-center gap-2.5">
              <FaYoutube className='w-10 h-10'/>
              <span className="font-semibold text-xl">YouTube</span>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-5 flex items-center space-x-2">
            <MdOutlineMotionPhotosPaused className='text-white w-8 h-8 cursor-pointer hover:text-gray-300
             transform duration-500'/>
            <span className='text-white border-1 border-white rounded-full bg-transparent text-sm px-3 py-1 font-bold cursor-pointer hover:text-gray-300 hover:border-gray-300 transform duration-500'>Watch The Full Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}