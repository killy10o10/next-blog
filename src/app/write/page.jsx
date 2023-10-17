'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';
import { BsPlusCircle, BsImage, BsUpload } from 'react-icons/bs';
import { FaPhotoVideo } from 'react-icons/fa';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const storage = getStorage(app)

function WritePage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [media, setMedia] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    const upload = () => {
      const fileName = new Date().getTime() + file.name
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL)
            console.log('File available at', downloadURL);
          });
        }
      );
    }
    file && upload()
  }, [file])  

  const handleOpen = () => setOpen(!open);

  const slugify = (str) => str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+| -+$/g, ""); 

  const handlePublish = async () => {
    const res = await fetch("/api/posts/", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: "culture" 
      })
    })
    console.log(res)
  }

  return (
    <div className='min-h-screen relative'>
      <h3
        suppressContentEditableWarning={true}
        contentEditable
        type='text'
        onClick={(e) => {setTitle(e.target.innerText)}}
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
            <input type="file" id='image' className='hidden'  onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor='image' className='active:scale-95 transition border rounded-full p-2 border-green-500'>
              <BsImage className='text-xl' />
            </label>
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
        onClick={handlePublish}
        className='absolute active:scale-95 transition shadow top-0 right-0 bg-green-500 font-bold text-slate-100 px-5 py-2 rounded-full'>  
        Publish
      </button>
    </div>
  );
}

export default WritePage;
