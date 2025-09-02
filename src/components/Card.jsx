import React from 'react'
import profile from '../assets/profile.jpeg';
import { FaGithub,FaLinkedin,FaInstagramSquare} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Card = () => {
  return (
    <div className='w-full' >
        <div className='flex flex-col justify-center max-w-sm mx-auto bg-white shadow-xl rounded-xl p-5'>
            <div className=''>
                <img  className='w-32 mx-auto shadow-xl rounded-full drop-shadow-xl ' src={profile} alt="profile" />
            </div>
            <div className='text-center mt-5'> 
                <p className='text-xl sm:text-2xl text-gray-900'>Vincent Jossy</p>

                <p className='text-xs sm:text-base text-gray-500 pt-2 pb-4 px-5 
                w-auto inline-block border-2'>Android | React developer</p>
                
                <div className='flex items-center justify-center mt-4'>
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
            </div>
            
        </div>
        
    </div>
  )
}

export default Card