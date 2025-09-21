import React from 'react';
import { FaDownload, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ProfileDetail3({ profile }) {
    return (
        // Adjusted py/mx/px for mobile
        <footer className="bg-gray-50 py-10 sm:py-20 mt-6 sm:mt-10 px-4 sm:px-0">
            {/* Adjusted px for mobile */}
            <div className="max-w-6xl mx-auto px-4 sm:px-15">
                {/* Padding adjusted for mobile */}
                <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Text size responsive for mobile */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Connect with {profile.name}</h2>
                    <div className="flex justify-center">
                        {/* Button padding/size responsive for mobile */}
                        <div
                            className="bg-white hover:bg-gray-100 text-orange-500 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md cursor-pointer text-sm sm:text-base"
                            onClick={() => window.open('/resume.pdf', '_blank')} // Added onClick handler for functionality
                        >
                            <FaDownload size={14} /> {/* Icon size responsive */}
                            <span>Download My Resume</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Adjusted mx/mt/pb/flex for mobile stacking, px added for mobile spacing */}
            <div className="max-w-6xl mx-4 sm:mx-50 mt-6 sm:mt-10 pb-4 sm:pb-5 flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 px-4 sm:px-0">
                {/* Stacked vertically on mobile, adjusted spacing */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6 md:mb-0">
                    <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer">
                        <FaEnvelope className="mr-2 text-gray-400 text-sm" /> {/* Icon size */}
                        <span className="text-xs sm:text-sm">Email</span> {/* Text size */}
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer">
                        <FaPhoneAlt className="mr-2 text-gray-400 text-sm" /> {/* Icon size */}
                        <span className="text-xs sm:text-sm">Phone</span> {/* Text size */}
                    </div>
                </div>

                {/* Reduced space-x on mobile */}
                <div className="flex space-x-2 sm:space-x-4">
                    {/* Padding adjusted for mobile */}
                    <div className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent border border-gray-500 rounded-full cursor-pointer text-xs sm:text-sm">
                        <FaGithub className="mr-1.5 sm:mr-2 text-gray-500 text-sm" /> {/* Icon size/margin */}
                        <span>GitHub</span>
                    </div>
                    {/* Padding adjusted for mobile */}
                    <div className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent border border-gray-500 rounded-full cursor-pointer text-xs sm:text-sm">
                        <FaLinkedin className="mr-1.5 sm:mr-2 text-gray-500 text-sm" /> {/* Icon size/margin */}
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
            {/* Adjusted mt/px for mobile, kept text styles */}
            <div className="max-w-6xl mx-auto px-4 sm:px-4 mt-4 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm">
                <p>2024 MAHE D LRU</p>
            </div>
        </footer>
    );
}