import React from 'react'

function CategoryList() {
  return (
  <>
    <div className='prose max-w-5xl text-inherit'>
      <h2 className='text-inherit'>Categories</h2>
        <div className='flex flex-wrap gap-2 justify-between'>
          <span className='py-2 shadow px-5 w-32 text-blue-gray-900 font-bold cursor-pointer flex items-center justify-center rounded-md bg-blue-300'>Style</span>
          <span className='py-2 shadow px-5 w-32 text-blue-gray-900 font-bold cursor-pointer flex items-center justify-center rounded-md bg-pink-300'>Fashion</span>
          <span className='py-2 shadow px-5 w-32 text-blue-gray-900 font-bold cursor-pointer flex items-center justify-center rounded-md bg-lime-200'>Food</span>
          <span className='py-2 shadow px-5 w-32 text-blue-gray-900 font-bold cursor-pointer flex items-center justify-center rounded-md bg-red-300'>Travel</span>
          <span className='py-2 shadow px-5 w-32 text-blue-gray-900 font-bold cursor-pointer flex items-center justify-center rounded-md bg-yellow-100'>Culture</span>
          <span className='py-2 shadow px-5 w-32 text-blue-gray-900 font-bold cursor-pointer flex items-center justify-center rounded-md bg-violet-300'>Coding</span>
        </div>
    </div>
  </>
  )
}

export default CategoryList
