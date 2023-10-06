'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';
import { BsPlusCircle, BsImage, BsUpload } from 'react-icons/bs';
import { FaPhotoVideo } from 'react-icons/fa';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function WritePage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleOpen = () => setOpen(!open);

  return (
    <div className='min-h-screen relative'>
      <h3
        contentEditable
        type='text'
        placeholder='Title'
        className='bg-transparent h-fit overflow-scroll outline-none text-5xl font-bold p-12 w-[80%]'>
        Title
      </h3>
      <div className='flex items-center gap-5 absolute z-50 -left-4 top-36'>
        <button
          type='button'
          onClick={handleOpen}
          className='active:scale-95 transition'>
          <BsPlusCircle className='text-4xl' />
        </button>
        {open && (
          <div className='flex gap-3'>
            <button
              type='button'
              className='active:scale-95 transition border rounded-full p-2 border-green-500'>
              <BsImage className='text-xl' />
            </button>
            <button
              type='button'
              className='active:scale-95 transition border rounded-full p-2 border-green-500'>
              <BsUpload className='text-xl' />
            </button>
            <button
              type='button'
              className='active:scale-95 transition border rounded-full p-2 border-green-500'>
              <FaPhotoVideo className='text-xl' />
            </button>
          </div>
        )}
      </div>
      <ReactQuill
        className='ml-8'
        theme='bubble'
        value={value}
        onChange={setValue}
        placeholder='Tell your story...'
      />
      <button
        type='button'
        className='absolute active:scale-95 transition shadow top-0 right-0 bg-green-500 font-bold text-slate-100 px-5 py-2 rounded-full'>
        Publish
      </button>
    </div>
  );
}

export default WritePage;
