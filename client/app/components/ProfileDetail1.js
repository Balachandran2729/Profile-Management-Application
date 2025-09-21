// components/ProfileDetail1.js
import Link from 'next/link';
import Image from 'next/image';
import { IoMdMail, IoIosArrowBack, IoLogoNodejs, IoLogoCss3 } from "react-icons/io";
import { FaPhoneAlt, FaPlayCircle, FaHtml5, FaPython } from "react-icons/fa";
import { FaDownload, FaFilePowerpoint } from "react-icons/fa6";
import { RiFileWord2Fill } from "react-icons/ri";
import { SiAdobephotoshop } from "react-icons/si";

export default function ProfileDetail1({ profile }) {
    return (
        <div className='flex flex-col'>
            {/* Orange Gradient Banner - Adjusted padding for mobile */}
            <div className='bg-gradient-to-r from-orange-400 to-red-500 p-4 sm:p-8 h-auto sm:h-40 text-white flex flex-col justify-between items-baseline gap-2 sm:gap-4'>
                {/* Back Button - Adjusted icon/text size and gap for mobile */}
                <div className='flex flex-row justify-start items-center gap-1.5 sm:gap-2 text-sm sm:text-base cursor-pointer hover:underline'>
                    <IoIosArrowBack className='w-5 h-5 sm:w-6 sm:h-6' />
                    <Link href='/'>
                        <h1 className='text-sm sm:text-base font-bold cursor-pointer'>Back to Home</h1>
                    </Link>
                </div>
                {/* Contact Info & Download - Adjusted layout, spacing, and item sizes for mobile */}
                <div className='flex flex-col sm:flex-row justify-between items-center w-full gap-3 sm:gap-0 sm:px-20'>
                    <div className='flex flex-row gap-6 sm:gap-20'>
                        {/* Email - Adjusted icon size and gap */}
                        <div className='flex flex-row justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base cursor-pointer hover:underline'>
                            <IoMdMail className='w-5 h-5 sm:w-6 sm:h-6' />
                            <p>Email</p>
                        </div>
                        {/* Phone - Adjusted icon size and gap */}
                        <div className='hidden sm:flex flex-row justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base cursor-pointer hover:underline'>
                            <FaPhoneAlt className='w-4 h-4 sm:w-5 sm:h-5' />
                            <p>Phone</p>
                        </div>
                    </div>
                    {/* Download Button - Adjusted padding, icon size, and gap */}
                    <div className='hidden sm:flex flex-row justify-center items-center gap-1.5 sm:gap-2 text-sm sm:text-base cursor-pointer border border-white rounded-full px-2.5 py-1 sm:px-3 sm:py-1 hover:bg-white hover:text-orange-400 transition duration-300'>
                        <FaDownload className='w-4 h-4 sm:w-5 sm:h-5' />
                        <span className='ml-1 sm:ml-2'>Download My Resume</span>
                    </div>
                </div>
            </div>

            {/* Profile Info Section - Adjusted margins, positioning, and text sizes for mobile */}
            <div className='flex flex-col justify-center items-center text-center relative'>
                {/* Image Container - Keeps 'me-50' for desktop (sm:me-50), removes margin on mobile */}
                <div className='me-30 sm:me-50'>
                    <Image
                        width={150}
                        height={150}
                        src={profile.avatar}
                        alt={profile.name}
                        // Adjusted size and positioning for mobile (w-32 h-32 -top-16), keeps desktop size (sm:w-50 sm:h-50 sm:-top-25)
                        className="object-cover rounded-full border-4 border-white w-32 h-32 sm:w-50 sm:h-50 absolute -top-16 sm:-top-25"
                    />
                </div>
                {/* Name & Details - Adjusted top margin and text sizes for mobile */}
                <div className='mt-20 sm:mt-30'> {/* Reduced mt on mobile */}
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-800">{profile.name}</h3>
                    <p className="text-base sm:text-xl text-gray-600">{profile.gender} | {profile.age} | {profile.pronouns}</p>
                </div>
                {/* Watch Resume Button - Adjusted margin, padding, icon size, and text size for mobile */}
                <div className='flex flex-row justify-center items-center gap-1.5 sm:gap-2 text-sm sm:text-base cursor-pointer border rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 mt-6 sm:mt-10 bg-orange-400 text-white transition duration-300 hover:text-orange-500 hover:bg-white hover:border-orange-400'>
                    <FaPlayCircle className='w-5 h-5 sm:w-6 sm:h-6' />
                    <p>Watch My Visual Resume Now</p>
                </div>
            </div>

            {/* Skills/Sections Bar - Adjusted margins, padding, text size, and made responsive */}
            <div className='flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center m-4 sm:m-15 border border-gray-800 rounded-full px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm gap-2 sm:gap-4'>
                <p className='whitespace-nowrap'>Core Skills & Technical Proficiencies</p>
                <p className='whitespace-nowrap'>Professional Journey & Internship Roles</p>
                <p className='whitespace-nowrap'>Case Insights & Key Projects</p>
                <p className='whitespace-nowrap'>Learning & Academic Milestones</p>
                <p className='whitespace-nowrap'>Endorsements from Mentors & Peers</p>
            </div>

            {/* About Section - Adjusted horizontal padding for mobile */}
            <div className='px-4 sm:px-25 text-center text-gray-800'>
                <p>{profile.about}</p>
            </div>

            {/* Technical Icons - Adjusted padding and icon size for mobile */}
            <div className='p-6 sm:p-15 flex text-gray-300 justify-center sm:justify-between items-center text-[20px] sm:text-[100px] flex-wrap sm:flex-nowrap gap-6 sm:gap-0'>
                <SiAdobephotoshop />
                <IoLogoNodejs />
                <FaHtml5 />
                <IoLogoCss3 />
                <FaPython />
                <RiFileWord2Fill />
                <FaFilePowerpoint />
            </div>
        </div>
    );
}