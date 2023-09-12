import React from 'react'
import CategoryCard from '../cardList/CategoryCard'

function CategoryList() {
  return (
  <>
    <div className='prose max-w-5xl text-inherit'>
      <h2 className='text-inherit'>Categories</h2>
        <div className='flex flex-wrap gap-5 justify-between'>
          <CategoryCard categoryImage="/coding.jpg" categoryBG="violet-300" categoryText="coding" />
          <CategoryCard categoryImage="/style.jpg" categoryBG="pink-300" categoryText="style" />
          <CategoryCard categoryImage="/fashion.jpg" categoryBG="lime-200" categoryText="fashion" />
          <CategoryCard categoryImage="/food.png" categoryBG="red-300" categoryText="food" />
          <CategoryCard categoryImage="/culture.jpg" categoryBG="yellow-100" categoryText="culture" />
          <CategoryCard categoryImage="/travel.jpeg" categoryBG="blue-300" categoryText="travel" />
        </div>
    </div>
  </>
  )
}

export default CategoryList
