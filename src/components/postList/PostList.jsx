import PostCard from '../postCard/PostCard';
import PopularPost from '../popularPost/PopularPost';
import CategoryChip from '../categoryChip/CategoryChip';
import Image from 'next/image';
import Pagination from '../pagination/Pagination';

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: 'default',
  });
  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

const PostList = ({page}) => {

  return (
    <div className="prose max-w-full grid md:grid-cols-7 gap-12 text-inherit">
      <div className="col-span-5 flex flex-col gap-10 md:block">
        <h4 className="text-inherit font-bold text-2xl">Recent Posts</h4>
        <PostCard postCategory="culture" postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. endus sit consequatur quaerat provident quidem possimus ipsa iusto nulla quasi iste? Repellat minima ipsam ullam quam!" postImage="/culture.jpg" postHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit." postDate="11.02.2023" />
        <PostCard postCategory="food" postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. endus sit consequatur quaerat provident quidem possimus ipsa iusto nulla quasi iste? Repellat minima ipsam ullam quam!" postImage="/food.png" postHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit." postDate="11.02.2023" />
        <PostCard postCategory="coding" postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. endus sit consequatur quaerat provident quidem possimus ipsa iusto nulla quasi iste? Repellat minima ipsam ullam quam!" postImage="/coding.jpg" postHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit." postDate="11.02.2023" />
        <PostCard postCategory="fashion" postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. endus sit consequatur quaerat provident quidem possimus ipsa iusto nulla quasi iste? Repellat minima ipsam ullam quam!" postImage="/fashion.jpg" postHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit." postDate="11.02.2023" />
        <PostCard postCategory="travel" postDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. endus sit consequatur quaerat provident quidem possimus ipsa iusto nulla quasi iste? Repellat minima ipsam ullam quam!" postImage="/travel.jpeg" postHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit." postDate="11.02.2023" />
        <Pagination />
      </div>
      <div className="hidden col-span-2 not-prose mt-5 md:flex flex-col gap-10">
        <div>
          <span className="dark:text-gray-600 text-gray-400">What's hot</span>
          <h4 className="font-bold text-2xl">Most Popular</h4>
        </div>
        <PopularPost category="travel" />
        <PopularPost category="food" />
        <PopularPost category="culture" />
        <PopularPost category="coding" />
        <div>
          <span className="dark:text-gray-600 text-gray-400">Discover by topics</span>
          <h4 className="font-bold text-2xl">Categories</h4>
        </div>
        <div className="flex items-center flex-wrap gap-5">
          <CategoryChip category="culture" />
          <CategoryChip category="food" />
          <CategoryChip category="travel" />
          <CategoryChip category="style" />
          <CategoryChip category="coding" />
          <CategoryChip category="fashion" />
        </div>
        <div>
          <span className="dark:text-gray-600 text-gray-400">Chosen by the editor</span>
          <h4 className="font-bold text-2xl">Editors Pick</h4>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <Image
              className="rounded-full h-20 w-20 object-cover"
              src="/food.png"
              alt="editors pick"
              width={35}
              height={35}
            />
            <PopularPost category="food" />
          </div>
          <div className="flex items-center gap-4">
            <Image
              className="rounded-full h-20 w-20 object-cover"
              src="/travel.jpeg"
              alt="editors pick"
              width={35}
              height={35}
            />
            <PopularPost category="travel" />
          </div>
          <div className="flex items-center gap-4">
            <Image
              className="rounded-full h-20 w-20 object-cover"
              src="/coding.jpg"
              alt="editors pick"
              width={35}
              height={35}
            />
            <PopularPost category="coding" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
