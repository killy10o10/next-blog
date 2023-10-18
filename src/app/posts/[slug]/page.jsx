import Comment from '@/components/comment/Comment';
import PopularPost from '@/components/popularPost/PopularPost';
import Image from 'next/image';


const getData = async (slug) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = new URL(`/api/posts/${slug}`, baseUrl);
  const res = await fetch(url.toString(), {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
};


const singlePostPage = async ({params}) => {
  const {slug} = params
  const { post } = await getData(slug);

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
        modifiedText.push(`<br/> <br />`);
      }
    }
    return modifiedText.join(' ');
  }

  function formatDateToWords(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className="min-h-screen max-w-[1400px] text-inherit">
      <div className='grid md:grid-cols-2 gap-10 md:gap-0 mt-5'>
        <div className='flex flex-col gap-5 justify-center'>
          <h1 className="text-inherit tracking-wide leading-2 text-4xl lg:text-6xl font-black">{post?.title}</h1>
          <div className='flex items-center gap-4'>
            {post && <Image className='rounded-full h-16 w-16 object-cover' src={post.user.image} alt='editors pick' width={35} height={35} />}
            <div>
              <h4 className='text-inherit font-semibold'>{post?.user.name}</h4>
              {post && <span className="dark:text-gray-600 text-gray-400 font-semibold">{formatDateToWords(post.createdAT.substring(0, 10))}</span>}
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
         {post && <Image src={post.img} alt='featured-image' width={500} height={350} className='rounded-xl w-full h-[350px] mb-10' />}
        </div>
      </div>

      <div className='grid md:grid-cols-7 gap-12 text-inherit'>
          <div className='col-span-5 flex flex-col' >
          {post && (
            <div
              dangerouslySetInnerHTML={{ __html: insertBrTags(post.desc, 48) }}
            />)
          }
            <br />
            <Comment postSlug={slug} />
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
