import React from 'react';
import PostCard from '../postCard/PostCard';
import PopularPost from '../popularPost/PopularPost';

const PostList = () => {
  return (
    <div className="prose max-w-full grid grid-cols-7 gap-12 text-inherit">
      <div className="col-span-5">
        <h4 className="text-inherit font-bold text-2xl">Recent Posts</h4>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className="col-span-2 not-prose mt-5 flex flex-col gap-10">
        <div>
          <span className="dark:text-gray-600 text-gray-400">What's hot</span>
          <h4 className="font-bold text-2xl">Most Popular</h4>
        </div>
        <PopularPost category="travel" />
        <PopularPost category="food" />
        <PopularPost category="culture" />
        <PopularPost category="coding" />
        <div className='flex items-center flex-wrap gap-5'>
          <button className='bg-food px-5 py-1 font-bold rounded-md text-slate-900 capitalize'>Food</button>
          <button className='bg-culture px-5 py-1 font-bold rounded-md text-slate-900 capitalize'>culture</button>
          <button className='bg-coding px-5 py-1 font-bold rounded-md text-slate-900 capitalize'>coding</button>
          <button className='bg-fashion px-5 py-1 font-bold rounded-md text-slate-900 capitalize'>fashion</button>
          <button className='bg-style px-5 py-1 font-bold rounded-md text-slate-900 capitalize'>style</button>
          <button className='bg-travel px-5 py-1 font-bold rounded-md text-slate-900 capitalize'>travel</button>
        </div>
      </div>
    </div>
  );
};

export default PostList;
