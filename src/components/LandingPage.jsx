import React from 'react';
import { Menu, X } from "lucide-react";
import profile from '../assets/profile.jpeg';
import { FaGithub,FaLinkedin,FaInstagramSquare} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useState } from 'react';

const LandingPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='min-h-screen '>
        <nav className='w-full bg-white fixed top-0 left-0 z-50'>
            <div className='max-w-xl mx-auto px-4 py-3 items-center flex justify-between'>
                {/* Name or Logo */}
                <div className='text-dominant font-black text-lg'>Vincent Jossy
                </div>
                {/*Desktop menu */}
                <ul className='hidden md:flex space-x-8 text-sm font-medium'>
                    <li>
                        <a href='#home'className='hover:text-dominant transition text-lg'>Home</a>
                    </li>
                    <li>
                        <a href='#about' className='hover:text-dominant transition text-lg'>About</a>
                    </li>
                    <li>
                        <a href='#home' className='hover:text-dominant transition text-lg'>Projects</a>
                    </li>
                </ul>

                {/* Mobile menu */}
                <button className='md:hidden bg-white text-dominant' onClick={()=>setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24}/> : <Menu size={24} />}

                </button>
            
            {/* Mobile menu drop-down */}
                {isOpen && (
                    <div className='md:hidden bg-white border-t shadow-xl'>
                        <ul className='flex flex-col items-center space-y-4 py-4 text-sm font-medium'>
                            <li>
                                <a href="#home" className='hover:text-dominant transition'
                                 onClick={()=> setIsOpen(false)}>Home</a>
                            </li>
                            <li>
                                <a href="#About" className='hover:text-dominant transition'
                                 onClick={()=> setIsOpen(false)} >About</a>
                            </li>
                            <li>
                                <a href="#projects" className='hover:text-dominant transition'
                                 onClick={()=> setIsOpen(false)}>Projects</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            
        </nav>
        {/* Main landing page */}
        <div className='min-h-screen p-4 mt-4 bg-white overflow-hidden'>
            <div className='container mx-auto px-4 lg:px-8 py-8 lg:py-16'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16'>
                    {/*left content section*/}
                    <div className='flex-1 max-w-2xl lg:max-w-none'>
                        <div className='space-y-6 lg:space-y-4'>
                            {/* hello */}

                            <h1 className='text-3xl md:text-4xl lg:text-5xl
                            font-medium text-black leading-tight'>Hello,</h1>

                            {/* I am jossy */}
                            <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                            font-medium text-black leading-tight'>I am Jossy.</h2>

                            {/* I am a devloper*/}
                            <h3 className='text-2xl md:text-3xl lg:text-4xl
                            text-dominant font-medium leading-tight'>I am a developer</h3>

                            {/*description*/}
                            <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700
                            leading-relaxed max-w-xl'>Hello I am a frontend developer. 
                            I build React and Android applications</p>

                            {/*hire me button*/}
                            <div className='pt-4 lg:pt-8'>
                                <button className='inline-flex item justify-center px-8 md:px-12 lg:px-16
                                py-3 md:py-4 lg:py-5 text-xl md:text-2xl lg:text-3xl text-white 
                                bg-dominant rounded-2xl'>Hire me
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*Right image section */}
                    <div className='flex-1 relative flex items-center justify-center'>
                        <div className='relative'>
                           
                             {/*image*/}
                             <div className='relative'>
                                <img src={profile} alt='profile pic' 
                                className=' h-64 w-64 md:h-80 md:w-80 
                                lg:h-96 lg:w-96 rounded-full inset-0'></img>
                             </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
        {/*footer*/}
        <div className='py-4 bg-white'>
                <div className='flex justify-center mt-4'>
                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full
                     hover:text-white transition-colors duration-300' href='https://github.com/Jossyvincent'>
                        <FaGithub />
                        <span className='sr-only'>Github</span>
                    </a>
                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-400 hover:bg-blue-400 rounded-full
                     hover:text-white transition-colors duration-300' href='https://www.linkedin.com/in/vincentjossy'>
                        <FaLinkedin />
                        <span className='sr-only'>LinkedIn</span>
                    </a>
                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-black hover:bg-black rounded-full
                     hover:text-white transition-colors duration-300' href='https://x.com/kojowis'>
                        <FaXTwitter />
                        <span className='sr-only'>Twitter</span>
                    </a>
                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-400 rounded-full
                     hover:text-white transition-colors duration-300' href='https://instagram.com/jossy_vincent'>
                        <FaInstagramSquare />
                        <span className='sr-only'>Instagram</span>
                    </a>
                </div>
                <div className='flex mt-4 justify-center'>
                    <p className='text-sm text-gray-500'>&copy; 2025 Vincent Jossy. All rights reserved.</p>
                </div>
        
            </div>

    </main>
  )
}

export default LandingPage