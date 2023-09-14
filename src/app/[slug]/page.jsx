import PopularPost from '@/components/popularPost/PopularPost';
import Image from 'next/image';
import React from 'react';

const singlePostPage = () => {
  return (
    <div className="min-h-screen max-w-[1400px] text-inherit">
      <div className='grid md:grid-cols-2 gap-10 md:gap-0 mt-5'>
        <div className='flex flex-col gap-5 justify-center'>
          <h1 className="text-inherit tracking-wide leading-2 text-4xl lg:text-6xl font-black">Garlic bread with cheese: What the science tells us </h1>
          <div className='flex items-center gap-4'>
            <Image className='rounded-full h-16 w-16 object-cover' src="/culture.jpg" alt='editors pick' width={35} height={35} />
            <div>
              <h4 className='text-inherit font-semibold'>Kingsley Quami Okine</h4>
              <span className="dark:text-gray-600 text-gray-400 font-semibold">25 April 2023</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <Image src="/fashion.jpg" width={500} height={300} className='rounded-xl w-full h-[79%]' />
        </div>
      </div>

      <div className='grid md:grid-cols-7 gap-12 text-inherit'>
          <div className='col-span-5 flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus quidem aut a nam qui veritatis, mollitia vel culpa in corrupti molestiae vero maxime ut, asperiores quod blanditiis distinctio voluptatibus!
            architecto nisi facilis, praesentium voluptatibus itaque voluptatem consequuntur voluptatum accusantium culpa? Optio enim possimus, soluta suscipit quas quis.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, deserunt, temporibus quidem delectus voluptatum provident recusandae porro deleniti consequatur dolores tenetur quae inventore quibusdam nisi error! Eligendi doloribus laborum sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus quidem aut a nam qui veritatis, mollitia vel culpa in corrupti molestiae vero maxime ut, asperiores quod blanditiis distinctio voluptatibus!
            Ullam debitis assumenda explicabo repudiandae provident, perspiciatis temporibus repellendus numquam ipsam eveniet architecto nisi facilis, praesentium voluptatibus itaque voluptatem consequuntur voluptatum accusantium culpa? Optio enim possimus, soluta suscipit quas quis.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusamus quidem aut a nam qui veritatis, mollitia vel culpa in corrupti molestiae vero maxime ut, asperiores quod blanditiis distinctio voluptatibus!
             temporibus repellendus numquam ipsam eveniet architecto nisi facilis, praesentium voluptatibus itaque voluptatem consequuntur voluptatum accusantium culpa? Optio enim possimus, soluta suscipit quas quis.</p>

            <div>
              <h3 className='font-bold text-3xl my-10'>Comments</h3>
              <form className='flex gap-5 items-center'>
                <textarea className='w-[80%] rounded shadow px-4 py-2 text-xl text-blue-gray-900' placeholder='write comment here'></textarea>
                <button className='rounded shadow bg-blue-600 font-bold text-slate-100 h-fit py-2 px-8'>Post</button>
              </form>
            </div> 
          </div>
          <div className='col-span-2 hidden md:flex flex-col gap-10'>
            <div>
              <span className="dark:text-gray-600 text-gray-400">What's hot</span>
              <h4 className="font-bold text-2xl">Most Popular</h4>
            </div>
            <PopularPost category="travel" />
            <PopularPost category="food" />
            <PopularPost category="culture" />
            <PopularPost category="coding" />
            <PopularPost category="fashion" />
          </div>
      </div>
    </div>
  );
};

export default singlePostPage;
