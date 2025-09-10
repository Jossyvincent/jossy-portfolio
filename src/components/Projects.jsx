import React from 'react'
import aquarech from '../assets/AquarechProject.jpeg';
import web from '../assets/webProject.png'
import health from '../assets/healthapp.jpeg';

const Projects = () => {
  return (
    <section className='mt-15 '>
        <div className=''>
            <div className=''>
                <h3 className='text-black font-bold text-center text-xl md:text-2xl lg:text-3xl'>MY PROJECTS</h3>
            </div>
            <div className='mt-5 mx-auto max-w-4xl'>
                <p className='text-center text-gray-600 md:text-xl'>A showcase of my work and the technologies I love. Each project reflects a 
                    piece of my journey as a developer- building, Learning and improving.
                </p>
            </div>
            <div className='mt-6 '>
                <div className='flex justify-center items-center flex-col md:flex-row'>
                    <button className='bg-dominant mt-2 px-4 py-2 text-white rounded-2xl text-sm
                     hover:text-black hover:bg-gray-200 transition'>Mobile Development
                     </button>
                    <button className='bg-dominant mt-2 ml-4 px-4 py-2 text-white rounded-2xl text-sm
                     hover:text-black hover:bg-gray-200 transition'>Web Development
                    </button>
                    <button className='bg-dominant mt-2 ml-4 px-4 py-2 text-white rounded-2xl text-sm
                     hover:text-black hover:bg-gray-200 transition'>Web Design</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-7 mx-4'>
                {/*Mobile devlopment*/}
                <div className='bg-gray-100 shadow-md overflow-hidden rounded-lg p-5'>
                    <img src={aquarech} alt='project screen shot' className='w-full h-48 object-contain'>
                    </img>
                    <div className='p-5'>
                        <h3 className='font-semibold text-xl mb-2'>Mobile Development</h3>
                        <p className='text-gray-600 mb-4'>This ia a collaborative project built during my attachment at a start-up. The stack is
                        Android Studio and Java
                        </p>
                        <a href='https://github.com/Jossyvincent/Aquarech-app' target='_blank' className='text-dominant
                          hover:underline'>View Project
                        </a>
                    </div>
                </div>
                {/* web development */}
                <div className='bg-gray-100 shadow-md overflow-hidden rounded-lg p-5'>
                    <img src={web} alt='project screen-shot' className='w-full h-48 object-contain'>
                    </img>
                    <div className='p-5'>
                        <h3 className='font-semibold text-xl mb-2'>Web development</h3>
                        <p className='text-gray-600 mb-4'>This a my portfolio website. Every front-end developer knows
                         that this where everyone start. The stack for this was react and tailwindcss with vite.
                        </p>
                        <a href='https://github.com/Jossyvincent/jossy-portfolio' target='_blank' className='text-dominant
                           hover:underline'>View Project
                        </a>
                    </div>
                </div>
                {/* health app */}
                <div className='bg-gray-100 shadow-md overflow-hidden rounded-lg p-5'>
                    <img src={health} alt='project screen-shot' className='w-full h-48 object-contain'>
                    </img>
                    <h3 className='font-semibold text-xl mb-2'>Mobile Development</h3>
                    <p className='text-gray-600 mb-4'>A revolutionary health app that help incerease
                        accessibilty to helthcare in remote areas
                    </p>
                    <a href='https://github.com/Jossyvincent/mediConnect' target='_blank' className='text-dominant
                    hover:underline'>View Project
                    </a>
                </div>
                {/*fourth project */}
                {/*<div className='bg-gray-100 shadow-md overflow-hidden rounded-lg p-5'>
                    <h3 className='font-semibold text-xl mb-2'>Mobile Development</h3>
                    <p className='text-gray-600 mb-4'>This ia a collaborative project built during my attachment at a start-up. The stack is
                        Android Studio and Java
                    </p>
                    <a href='https://github.com/Jossyvincent/Aquarech-app' target='_blank' className='text-dominant
                    hover:underline'>View Project
                    </a>
                </div> */}

            </div>
        </div>
    </section>
  )
}

export default Projects