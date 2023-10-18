import Link from 'next/link';
import CategoryButton from '../categoryButton/CategoryButton';

const getData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = new URL('/api/categories', baseUrl);

  const res = await fetch(url.toString(), {
    cache: 'default',
  });
  if (!res.ok) {
    throw Error('Failed');
  }
  return res.json();
};


const CategoryList = async () => {
  const data = await getData();

  return (
    <>
      <div className="prose text-inherit max-w-full my-4">
        <h2 className="text-inherit">Categories</h2>
        <div className="flex flex-wrap gap-5 justify-between items-center">
          {data?.map((item) => (
            <Link
              key={item.id}
              href={`/blog?category=${item.title}`}
              className='no-underline'
            >
              <CategoryButton
                categoryImage={item.img || ""}
                categoryBG={item.title}
                categoryText={item.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
