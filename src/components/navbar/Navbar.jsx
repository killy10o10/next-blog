'use client'
import useColorMode from '@/hooks/useColorMode';
import Link from 'next/link';
import React from 'react';
import {BsFillSunFill, BsMoonFill, BsTwitter, BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'

function Navbar() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <nav className="navbar ">
      <div className='navbar-start gap-3 text-xl'>
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
      <div className='navbar-center'>
        <a className="btn btn-ghost normal-case text-xl">NextBlog</a>
      </div>
      <div className='navbar-end'>
        <button
            className="btn btn-ghost btn-circle"
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
            {colorMode === 'light' ? (
              <BsMoonFill className="h-6 w-6" />
            ) : (
              <BsFillSunFill className="h-6 w-6" />
            )}
          </button>
          <div className='flex gap-3'>
             <Link className='gradient-text' href="/">Home</Link>   
             <Link className='gradient-text' href="/">About</Link>   
             <a className='gradient-text' href="mailto:quamikilly@gmail.com">Contact</a>   
             <Link className='gradient-text' href="/">Login</Link>
          </div>  
      </div>
    </nav>
  )
}

export default Navbar
