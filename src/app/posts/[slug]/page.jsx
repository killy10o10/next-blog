import Comment from '@/components/comment/Comment';
import PopularPost from '@/components/popularPost/PopularPost';
import Image from 'next/image';


const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};

const singlePostPage = async ({params}) => {
  const {slug} = params
  const postData = await getData(slug);
  console.log(postData)

  const insertBrTags = (text, interval) => {
    if (typeof text !== 'string') {
      return ''; // Return an empty string or handle the error as needed
    }
  
    const words = text.split(' ');
    let modifiedText = [];
  
    for (let i = 0; i < words.length; i++) {
      modifiedText.push(words[i]);
  
      // Check if we need to insert a <br> tag
      if ((i + 1) % interval === 0 && i < words.length - 1) {
        modifiedText.push('<br>');
      }
    }
  
    return modifiedText.join(' ');
  }

  return (
    <div className="min-h-screen max-w-[1400px] text-inherit">
      <div className='grid md:grid-cols-2 gap-10 md:gap-0 mt-5'>
        <div className='flex flex-col gap-5 justify-center'>
          <h1 className="text-inherit tracking-wide leading-2 text-4xl lg:text-6xl font-black">{postData?.title}</h1>
          <div className='flex items-center gap-4'>
            <Image className='rounded-full h-16 w-16 object-cover' src="/culture.jpg" alt='editors pick' width={35} height={35} />
            <div>
              <h4 className='text-inherit font-semibold'>Kingsley Quami Okine</h4>
              <span className="dark:text-gray-600 text-gray-400 font-semibold">25 April 2023</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
         {postData && <Image src={postData.img} alt='featured-image' width={500} height={300} className='rounded-xl w-full h-[79%]' />}
        </div>
      </div>

      <div className='grid md:grid-cols-7 gap-12 text-inherit'>
          <div className='col-span-5 flex flex-col' >
            {
              postData && insertBrTags(postData.desc, 48)
            }
            <br />
            <Comment />
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
