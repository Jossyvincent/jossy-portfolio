import React from 'react'

const LandingPage = () => {
  return (
    <main className='min-h-screen '>
        <nav className='w-full fixed top-0 left-0 z-50'>
            <div className='max-w-xl mx-auto px-4 py-3 items-center flex justify-between'>
                <div className='text-dominant font-black text-lg'>Vincent Jossy</div>
                <ul className='hidden md:flex space-x-8 text-sm font-medium'>
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#home'>Projects</a>
                    </li>
                </ul>
            </div>
        </nav>

    </main>
  )
}

export default LandingPage