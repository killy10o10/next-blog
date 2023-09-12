import Image from 'next/image';
import React from 'react';

const CategoryCard = ({categoryImage, categoryText, categoryBG}) => {
  return (
    <div className={`py-2 shadow px-5 text-blue-gray-900 w-[15%] font-bold cursor-pointer flex items-center justify-center gap-3 capitalize rounded-md bg-${categoryBG}`}>
      <div className="avatar">
        <div className="rounded-full ring ring-primary ring-offset-base-100">
          <Image width={32} height={32} src={categoryImage} alt={categoryText} />
        </div>
      </div>
      <div className='flex items-center'>
        <span className='capitalize'>{categoryText}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
