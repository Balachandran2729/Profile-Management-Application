import Link from 'next/link';
import { IoMdMail ,IoIosArrowBack ,IoLogoNodejs , IoLogoCss3} from "react-icons/io";
import { FaPhoneAlt ,FaPlayCircle , FaHtml5 , FaPython} from "react-icons/fa";
import { FaDownload ,FaFilePowerpoint } from "react-icons/fa6";
import { RiFileWord2Fill } from "react-icons/ri";
import { SiAdobephotoshop } from "react-icons/si";

export default function ProfileDetail1({profile}) {
    return (
      <div className='flex flex-col'>
        <div className='bg-orange-500 p-4 h-40 text-white flex flex-col justify-between items-baseline gap-4 '>
            <div className='flex flex-row justify-start items-center gap-2 text-ml cursor-pointer hover:underline'>
                <IoIosArrowBack className='w-6 h-6'/> 
                <Link href='/'>
                    <h1 className='text-ml font-bold cursor-pointer'>Back to Home</h1>
                </Link>
            </div>
            <div className='flex justify-between items-center w-full px-20'>
                <div className='flex flex-row gap-20  '>
                    <div className='flex flex-row justify-center items-center gap-3 text-ml cursor-pointer hover:underline'>
                        <IoMdMail className='w-6 h-6'/> 
                        <p>Email</p>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-3 text-ml cursor-pointer hover:underline'>
                        <FaPhoneAlt className='w-5 h-5'/>
                        <p>Phone</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center gap-2 text-ml cursor-pointer border-1 border-white rounded-full px-3 py-1 hover:bg-white hover:text-orange-400 transition duration-300'>
                    <FaDownload className='w-5 h-5'/>
                    <span className='ml-2'>Download My Resume</span>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center relative'>
            <div className='me-50'>
                <img 
                    src={profile.avatar} 
                    alt={profile.name}
                    className="object-cover rounded-full border-4 border-white w-50 h-50 absolute -top-25"
                />
            </div>
            <div className='mt-30'>
                 <h3 className="font-bold text-2xl text-gray-800">{profile.name}</h3>
                 <p className="text-xl text-gray-600">{profile.gender} | {profile.age} | {profile.pronouns}</p>
            </div>
            <div className='flex flex-row justify-center items-center gap-2 text-ml cursor-pointer border-1 rounded-full px-3 py-2 mt-10 bg-orange-400 text-white transition duration-300 
            hover:text-orange-500 hover:bg-white  hover:border-orange-400
            '>
                <FaPlayCircle className='w-6 h-6'/>
                <p> Watch My Visual Resume Now</p>
            </div>
        </div>
        <div className='flex m-15 border-1 border-gray-800 rounded-full px-5 py-2 text-sm gap-4'>
            <p>Core Skills & Technical Proficiencies</p>
            <p>Professional Journey & Internship Roles</p>
            <p>Case Insights & Key Projects</p>
            <p>Learning & Academic Milestones</p>
            <p>Endorsements from Mentors & Peers</p>
        </div>
        <div className='px-25 text-center text-gray-800'>
        <p>{profile.about}</p>
        </div>
        <div className='p-15 flex text-gray-300  justify-between items-center text-[100px]'>
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