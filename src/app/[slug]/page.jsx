import Image from 'next/image';
import React from 'react';

const singlePostPage = () => {
  return (
    <div className="min-h-screen max-w-[1400px] text-inherit">
      <div className='grid md:grid-cols-2'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className="text-inherit tracking-wide leading-2 text-4xl lg:text-6xl font-black">Garlic bread with cheese: What the science tells us</h1>
          <div>
            
          </div>
        </div>
        <div>
          <Image src="/fashion.jpg" width={500} height={500} className='rounded-xl w-full h-[70%]' />
        </div>
      </div>
    </div>
  );
};

export default singlePostPage;
