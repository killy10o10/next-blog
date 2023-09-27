import CategoryButton from '../categoryButton/CategoryButton';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'default',
  });
  if (!res.ok) {
    throw new Error('Failed');
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
            <CategoryButton
              key={item._id}
              categoryImage={item.img || ""}
              categoryBG={item.title}
              categoryText={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
