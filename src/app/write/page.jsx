'use client';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css"
import {BsPlusCircle, BsImage, BsUpload} from 'react-icons/bs'
import {FaPhotoVideo} from 'react-icons/fa';

const WritePage = () => {
  const [open , setOpen] = useState(false);
  const [value , setValue] = useState('');

  const handleOpen = () => setOpen(!open);

  return (
    <div className="min-h-screen relative">
      <input type="text" placeholder='Heading Here' className='bg-transparent outline-none font-bold text-6xl p-12' />
      <div className='flex items-center gap-5 absolute z-50 left-5 top-36'>
        <button onClick={handleOpen} className='active:scale-95 transition'>
          <BsPlusCircle className='text-4xl' />
        </button>
        {
          open && 
          <div className='flex gap-3'>
            <button className='active:scale-95 transition border rounded-full p-2 border-green-500'>
              <BsImage className='text-xl' />
            </button>
            <button className='active:scale-95 transition border rounded-full p-2 border-green-500'>
              <BsUpload className='text-xl' />
            </button>
            <button className='active:scale-95 transition border rounded-full p-2 border-green-500'>
              <FaPhotoVideo className='text-xl' />
            </button>
          </div>
        }
      </div>
      <ReactQuill className='' theme='bubble' value={value} onChange={setValue} placeholder='Write a post...' />
      <button className='absolute active:scale-95 transition shadow top-0 right-0 bg-green-500 font-bold text-slate-100 px-5 py-2 rounded-full'>Publish</button>
    </div>
  );
};

export default WritePage;
