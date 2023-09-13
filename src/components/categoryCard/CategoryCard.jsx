import React from 'react';

const CategoryCard = ({categoryImage, categoryText, categoryBG}) => {

  const style = {
    backgroundImage: `url(${categoryImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }
  return (
  <>
    <div className={`py-2 shadow px-5 text-blue-gray-900 sm:w-44 w-full font-bold cursor-pointer flex items-center justify-center gap-1 capitalize rounded-md ${categoryBG}`}>
      <div className='flex items-center'>
        <div style={style} className="h-8 w-8 rounded-full border-blue-500 border"></div>
        <span className='capitalize ml-2'>{categoryText}</span>
      </div>
    </div>
  </>
  );
};

export default CategoryCard;
