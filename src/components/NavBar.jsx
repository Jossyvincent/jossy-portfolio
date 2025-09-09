import React from 'react'
import { useState } from 'react';
import { Menu, X } from "lucide-react";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='w-full bg-white fixed top-0 left-0 z-50'>
            <div className='max-w-xl mx-auto px-4 py-3 items-center flex justify-between'>
                {/* Name or Logo */}
                <div className='text-dominant font-black text-lg'>Vincent Jossy
                </div>
                {/*Desktop menu */}
                <ul className='hidden md:flex space-x-8 text-sm font-medium'>
                    <li>
                        <a href='#home' className='hover:text-dominant transition text-lg scroll-smooth'>Home</a>
                    </li>
                    <li>
                        <a href='#about' className='hover:text-dominant transition text-lg scroll-smooth'>About</a>
                    </li>
                    <li>
                        <a href='#projects' className='hover:text-dominant transition text-lg'>Projects</a>
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
                                <a href="#about" className='hover:text-dominant transition'
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
  )
}

export default NavBar