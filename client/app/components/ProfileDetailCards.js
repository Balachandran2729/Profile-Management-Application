import { useState } from 'react';

const ProfileDetailCard = () => {
    const [activeTab, setActiveTab] = useState('caseStudies');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Sample data - replace with your actual data
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
        <div className="w-full max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl font-bold text-gray-700 leading-tight">
                    Case Insights &<br />
                    Key Projects
                </h2>

                {/* Tab Navigation */}
                <div className="flex bg-gray-100 rounded-full p-1">
                    <button
                        onClick={() => handleTabChange('caseStudies')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${ 
                            activeTab === 'caseStudies'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Case Studies
                    </button>
                    <button
                        onClick={() => handleTabChange('projects')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${ 
                            activeTab === 'projects'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Projects
                    </button>
                </div>
            </div>

            {/* Cards Container */}
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {visibleItems.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                <div className="aspect-[3/2] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows - Positioned above the dots */}
                {currentData.length > itemsToShow && (
                    <div className="absolute bottom-0.5 right-4 flex flex-col items-center space-y-2">
                        <div className="flex space-x-2">
                            <button
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${ 
                                    currentIndex === 0
                                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 bg-white shadow-sm'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={handleNext}
                                disabled={currentIndex === maxIndex}
                                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${ 
                                    currentIndex === maxIndex
                                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 bg-white shadow-sm'
                                }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation Dots */}
            {totalDots > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
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