import React from 'react';

const PopularPost = ({ category }) => {
  return (
    <div>
      <small className={`bg-${category} capitalize py-1 px-3 rounded-full text-slate-100 text-sm font-bold shadow`}>
        {category}
      </small>
      <p className='my-1 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      <small className="flex items-center gap-1 text-sm">
        <span className="font-semibold">John Doe</span>●
        <span className="text-gray-400 dark:text-gray-600">01.09.2023</span>
      </small>
    </div>
  );
};

export default PopularPost;
