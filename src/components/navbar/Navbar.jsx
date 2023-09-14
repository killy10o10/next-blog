'use client'
import useColorMode from '@/hooks/useColorMode';
import Link from 'next/link';
import React, { useState } from 'react';
import {BsFillSunFill, BsMoonFill, BsTwitter, BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {HiMiniBars3BottomRight, HiXMark} from 'react-icons/hi2'
import AuthLink from '../authLink/AuthLink';

function Navbar() {
  const [colorMode, setColorMode] = useColorMode();
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  return (
    <nav className="flex justify-between p-2">
      <div className='flex items-center gap-3 text-xl'>
        <a href="https://github.com/killy10o10" target='_blank'>
          <BsGithub />
        </a>
        <a href="https://twitter.com/Quami_Killy" target='_blank'>
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/kingsley-okine/" target='_blank'>
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/quami_killy/" target='_blank'>
          <BsInstagram />
        </a>
      </div>
    
      <div className='flex flex-col md:flex-row items-center'>
        <button
            className="btn btn-ghost btn-circle mr-2"
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
            {colorMode === 'light' ? (
              <BsMoonFill className="h-6 w-6" />
            ) : (
              <BsFillSunFill className="h-6 w-6" />
            )}
          </button>
          <div className={`${openNav ? "flex flex-col justify-center h-screen bg-blue-gray-900 w-screen left-0 text-4xl" : "hidden"} absolute text-center z-10 top-20 md:flex md:h-auto md:w-auto md:bg-transparent md:static md:text-left md:text-lg md:flex-row gap-3`}>
             <Link className='gradient-text' href="/">Home</Link>   
             <Link className='gradient-text' href="/blog">Blog</Link>   
             <Link className='gradient-text' href="/">About</Link>   
             <a className='gradient-text' href="mailto:quamikilly@gmail.com">Contact</a>   
             <AuthLink />
          </div>  
      </div>
      <button onClick={toggleNav} className='btn btn-circle text-2xl md:hidden'>
        {openNav ? <HiXMark /> : <HiMiniBars3BottomRight />}
      </button>
    </nav>
  )
}

export default Navbar
