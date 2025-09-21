// components/ProfileDetailCard.js
import { useState } from 'react';
import Image from 'next/image';

const ProfileDetailCard = () => {
    const [activeTab, setActiveTab] = useState('caseStudies');
    const [currentIndex, setCurrentIndex] = useState(0);

    const caseStudies = [
        {
            id: 1,
            title: "ONDC Case Study",
            image: "/63e6e4ea948f952ce3f9fdd03b165ff2843e23f9.png",
            alt: "ONDC case study showing interconnected hands around ONDC logo representing digital commerce network"
        },
        {
            id: 2,
            title: "Jal Jeevan Mission Case Study",
            image: "/547b466dc0f23a3462fe577cef93e4d423faaff1.jpg",
            alt: "Jal Jeevan Mission case study with water drop logo and Hindi text representing water for life mission"
        },
        {
            id: 3,
            title: "FinEasy Case Study",
            image: "/2a152dd0db277136fff592ed8db8046f509332e0.jpg",
            alt: "FinEasy case study showing hands using calculator for financial calculations"
        },
        {
            id: 4,
            title: "Digital India Case Study",
            image: "/download-1.jpeg",
            alt: "Digital India case study showing digital transformation initiatives"
        }
    ];

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            image: "/project-2.jpeg",
            alt: "E-commerce platform project showing online shopping interface"
        },
        {
            id: 2,
            title: "Mobile Banking App",
            image: "/project-3.jpeg",
            alt: "Mobile banking application project with secure financial features"
        },
        {
            id: 3,
            title: "Healthcare Portal",
            image: "/project-4.jpeg",
            alt: "Healthcare portal project for patient management and medical services"
        },
        {
            id: 4,
            title: "Education Management System",
            image: "/project-5.jpeg",
            alt: "Education management system for schools and online learning"
        }
    ];

    const currentData = activeTab === 'caseStudies' ? caseStudies : projects;
    const itemsToShow = 3;
    const maxIndex = Math.max(0, currentData.length - itemsToShow);

    const handlePrevious = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentIndex(0);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const visibleItems = currentData.slice(currentIndex, currentIndex + itemsToShow);
    const totalDots = maxIndex + 1;

    return (
        // Adjusted padding for mobile
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
            {/* Adjusted flex direction, alignment, gap, and margin for mobile */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 leading-tight text-center sm:text-left">
                    Case Insights &<br />
                    Key Projects
                </h2>
                {/* Adjusted padding, rounded corners, and made full width on mobile */}
                <div className="flex bg-gray-100 rounded-lg sm:rounded-full p-1 w-full sm:w-auto justify-center">
                    <button
                        onClick={() => handleTabChange('caseStudies')}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-full text-xs sm:text-sm font-medium transition-colors ${ 
                            activeTab === 'caseStudies'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Case Studies
                    </button>
                    <button
                        onClick={() => handleTabChange('projects')}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-full text-xs sm:text-sm font-medium transition-colors ${ 
                            activeTab === 'projects'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Projects
                    </button>
                </div>
            </div>
            <div className="relative">
                {/* Adjusted grid gap and bottom margin for mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    {visibleItems.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                <div className="aspect-[3/2] overflow-hidden">
                                    <Image
                                        width={400}
                                        height={267}
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            {/* Adjusted top margin and text size for mobile */}
                            <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-gray-900 text-center">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
                {currentData.length > itemsToShow && (
                    // Adjusted position, flex direction, and spacing for mobile
                    <div className="absolute -bottom-6 sm:-bottom-0.5 right-0 sm:right-4 flex flex-row sm:flex-col items-center sm:items-end space-x-2 sm:space-x-0 sm:space-y-2">
                        <div className="flex space-x-2">
                            {/* Adjusted button size for mobile */}
                            <button
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all ${ 
                                    currentIndex === 0
                                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 bg-white shadow-sm'
                                }`}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                             {/* Adjusted button size for mobile */}
                            <button
                                onClick={handleNext}
                                disabled={currentIndex === maxIndex}
                                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all ${ 
                                    currentIndex === maxIndex
                                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 bg-white shadow-sm'
                                }`}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* Kept dot navigation responsive as it was already */}
            {totalDots > 1 && (
                <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
                    {Array.from({ length: totalDots }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${ 
                                currentIndex === index
                                    ? 'bg-gray-800'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProfileDetailCard;