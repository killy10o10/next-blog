import Image from 'next/image'
import React from 'react'

const PostList = () => {
  return (
    <div className='prose max-w-full grid grid-cols-7 gap-5 text-inherit'>
      <div className='col-span-5'>
        <h4 className='text-inherit'>Recent Posts</h4>
        <div className='grid items-center grid-cols-2 gap-8'>
          <div>
            <Image width={200} height={200} src="/food.png" alt="post1" className='w-[100%] rounded-sm object-cover' />
          </div>
          <div className='flex flex-col'>
            <span>11.02.2023 ● <span className='text-red-600 uppercase'>culture</span></span>
            <h3 className='text-inherit'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. endus sit consequatur quaerat provident quidem possimus ipsa iusto nulla quasi iste? Repellat minima ipsam ullam quam!</p>
            <button className='font-bold w-fit border-b-2 border-red-600'>Read More</button>
        </div>
      </div>
      </div>
      <div className='col-span-2 not-prose mt-5'>
          <span className=''>What's hot</span>
          <h4 className='font-bold text-2xl mb-5'>Most Popular</h4>
        <div>
          <small className='py-1 px-3 bg-blue-300 rounded-lg text-blue-gray-900 text-sm font-bold'>Travel</small>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <small className='flex items-center gap-1 text-sm mt-2'><span className='font-bold'>John Doe</span><span>● 01.09.2023</span></small>
        </div>
      </div>
    </div>
  )
}

export default PostList
