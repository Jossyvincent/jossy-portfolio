import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const About = () => {
  const scrollToSkills = ()=> {
    const section = document.querySelector('#skills');
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='max-w-4xl mt-20 mx-auto'>
        <p className='text-2xl text-black md:text-4xl font-bold text-center'>Yooh! 👋</p>
        <p className='text-base text-gray-600 md:text-xl leading-relaxed text-center mt-4'>
            I'm a passionate developer with experience in building web applications and mobile apps
            using modern technologies. I am also a Machine Learning, AI and Cryptocurrency enthusiast.
        </p>
        
            <div className='mx-auto p-20'>
                <FaChevronDown onClick={scrollToSkills}
                className='animate-bounce mx-auto text-3xl text-blue-500 cursor-pointer'/>
            </div>

        

    </div>
  )
}

export default About