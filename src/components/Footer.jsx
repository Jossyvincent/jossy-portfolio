import React from 'react'
import { FaGithub,FaLinkedin,FaInstagramSquare} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='py-4'>
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
  )
}

export default Footer