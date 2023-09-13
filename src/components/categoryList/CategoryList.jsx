import React from 'react'
import CategoryButton from '../categoryButton/CategoryButton'

function CategoryList() {
  return (
    <>
      <div className='prose text-inherit max-w-full my-4'>
        <h2 className='text-inherit'>Categories</h2>
        <div className='flex flex-wrap gap-5 justify-between items-center'>
          <CategoryButton categoryImage="/coding.jpg" categoryBG={`bg-coding`} categoryText="coding" />
          <CategoryButton categoryImage="/style.jpg" categoryBG="bg-style" categoryText="style" />
          <CategoryButton categoryImage="/fashion.jpg" categoryBG="bg-fashion" categoryText="fashion" />
          <CategoryButton categoryImage="/food.png" categoryBG="bg-food" categoryText="food" />
          <CategoryButton categoryImage="/culture.jpg" categoryBG={"bg-culture"}categoryText="culture" />
          <CategoryButton categoryImage="/travel.jpeg" categoryBG="bg-travel" categoryText="travel" />
        </div>
      </div>
    </>
  )
}

export default CategoryList
