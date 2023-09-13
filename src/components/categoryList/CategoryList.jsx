import React from 'react'
import CategoryCard from '../categoryCard/CategoryCard'

function CategoryList() {
  return (
    <>
      <div className='prose text-inherit max-w-full my-4'>
        <h2 className='text-inherit'>Categories</h2>
        <div className='flex flex-wrap gap-5 justify-between items-center'>
          <CategoryCard categoryImage="/coding.jpg" categoryBG={`bg-coding`} categoryText="coding" />
          <CategoryCard categoryImage="/style.jpg" categoryBG="bg-style" categoryText="style" />
          <CategoryCard categoryImage="/fashion.jpg" categoryBG="bg-fashion" categoryText="fashion" />
          <CategoryCard categoryImage="/food.png" categoryBG="bg-food" categoryText="food" />
          <CategoryCard categoryImage="/culture.jpg" categoryBG={"bg-culture"}categoryText="culture" />
          <CategoryCard categoryImage="/travel.jpeg" categoryBG="bg-travel" categoryText="travel" />
        </div>
      </div>
    </>
  )
}

export default CategoryList
