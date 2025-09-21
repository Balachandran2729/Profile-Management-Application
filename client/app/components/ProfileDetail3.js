import React from 'react';
import { FaDownload, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ProfileDetail3({ profile }) {
    return (
        <footer className="bg-gray-50 py-20 mt-10">
            <div className="max-w-6xl mx-auto px-15">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Connect with {profile.name}</h2>
                        <div className="flex justify-center">
                        <div 
                            className="bg-white hover:bg-gray-100 text-orange-500 px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors duration-200 shadow-md cursor-pointer"
                        >
                            <FaDownload size={16} />
                            Download My Resume
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-50 mt-10 pb-5 flex flex-col md:flex-row justify-between items-center border-b-1 border-gray-700">
                <div className="flex space-x-6 mb-6 md:mb-0">
                    <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer">
                        <FaEnvelope className="mr-2 text-gray-400" />
                        <span className="text-sm">Email</span>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer">
                        <FaPhoneAlt className="mr-2 text-gray-400" />
                        <span className="text-sm">Phone</span>
                    </div>
                </div>
                
                <div className="flex space-x-4">
                    <div className="flex items-center px-4 py-2 bg-transparent border-1 border-gray-500 rounded-full cursor-pointer">
                        <FaGithub className="mr-2 text-gray-500" />
                        <span className="text-sm">GitHub</span>
                    </div>
                    <div className="flex items-center px-4 py-2 bg-transparent border-1 border-gray-500 rounded-full cursor-pointer">
                        <FaLinkedin className="mr-2 text-gray-500" />
                        <span className="text-sm">LinkedIn</span>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 mt-8 text-center text-gray-500 text-sm">
                <p>{"© 2024 MAHE D'LRU"}</p>
            </div>
        </footer>
    );
}