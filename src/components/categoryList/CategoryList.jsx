import React from 'react'
import CategoryCard from '../categoryCard/CategoryCard'

function CategoryList() {
  return (
    <>
      <div className='prose text-inherit max-w-full mt-3'>
        <h2 className='text-inherit'>Categories</h2>
        <div className='flex flex-wrap gap-5 justify-between items-center'>
          <CategoryCard categoryImage="/coding.jpg" categoryBG={`bg-violet-300`} categoryText="coding" />
          <CategoryCard categoryImage="/style.jpg" categoryBG="bg-pink-300" categoryText="style" />
          <CategoryCard categoryImage="/fashion.jpg" categoryBG="bg-lime-200" categoryText="fashion" />
          <CategoryCard categoryImage="/food.png" categoryBG="bg-red-300" categoryText="food" />
          <CategoryCard categoryImage="/culture.jpg" categoryBG={"bg-yellow-100"}categoryText="culture" />
          <CategoryCard categoryImage="/travel.jpeg" categoryBG="bg-blue-300" categoryText="travel" />
        </div>
      </div>
    </>
  )
}

export default CategoryList
