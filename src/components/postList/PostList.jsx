import PostCard from '../postCard/PostCard';
import PopularPost from '../popularPost/PopularPost';
import CategoryChip from '../categoryChip/CategoryChip';
import Image from 'next/image';
import Pagination from '../pagination/Pagination';

const getData = async (page, category) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&category=${category||""}`, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

const PostList = async ({ page, category }) => {
  const {posts, count} = await getData(page, category);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className="prose max-w-full grid md:grid-cols-7 gap-12 text-inherit">
      <div className="col-span-5 flex flex-col gap-10 md:block">
        <h4 className="text-inherit font-bold text-2xl">Recent Posts</h4>
        {posts?.map((post) => (
          <PostCard
            key={post.id}
            postCategory={post.slug}
            postDescription={post.desc.substring(0, 176)}
            postImage={post.img}
            postHeading={post.title}
            postDate={post.createdAT.substring(0, 10)}
          />
        ))}
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
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
