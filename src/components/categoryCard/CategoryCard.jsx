import React from 'react';

const CategoryCard = ({categoryImage, categoryText, categoryBG}) => {

  const style = {
    backgroundImage: `url(${categoryImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }
  return (
    <div className={`py-2 shadow px-5 text-blue-gray-900 sm:w-44 w-full font-bold cursor-pointer grid grid-cols-2 items-center justify-center gap-1 capitalize rounded-md ${categoryBG}`}>
      <div style={style} className="h-8 w-8 rounded-full place-self-end  border-blue-500 border"></div>
      <div className='flex items-center'>
        <span className='capitalize'>{categoryText}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
