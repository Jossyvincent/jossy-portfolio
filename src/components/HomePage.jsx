import React from 'react';
import profile from '../assets/profile.jpeg';

const HomePage = () => {
    return (
    <main className=' '>
        {/* Main page */}
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
        
        

    </main>
  )
}

export default HomePage