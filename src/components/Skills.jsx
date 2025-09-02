import React from 'react'
import { FaReact,FaFigma} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAndroidstudio,SiTailwindcss } from "react-icons/si";


const Skills = () => {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id='skills'>
        <p className='text-2xl text-black md:text-4xl text-center pt-4 font-bold'>
            Tech I use
        </p>
        <div className='flex flex-wrap justify-center pt-2'>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <FaReact className='mx-auto text-4xl'/>
                <p className='mt-6 text-xl sm:text-2xl text-center font-semibold'>React</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <IoLogoJavascript className='mx-auto text-4xl'/>
                <p className='mt-6 text-xl sm:text-2xl text-center font-semibold'>Javascript</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiAndroidstudio className='mx-auto text-4xl'/>
                <p className='mt-6 text-xl sm:text-2xl text-center font-semibold'>Android Studio</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <FaFigma className='mx-auto text-4xl'/>
                <p className='mt-6 text-xl sm:text-2xl text-center font-semibold'>Figma</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiTailwindcss className='mx-auto text-4xl'/>
                <p className='mt-6 text-xl sm:text-2xl text-center font-semibold'>Tailwindcss</p>
            </div>

        </div>

    </div>
  )
}

export default Skills