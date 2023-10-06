import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({postHeading, postImage, postDescription, postCategory, postDate}) => {
  return (
    <div className="grid items-center lg:grid-cols-2 lg:gap-8">
      <div className="hidden md:block">
  
          <Image
            width={200}
            height={200}
            src={postImage}
            alt="post1"
            priority={true}
            className="w-[100%] rounded-sm object-cover"
          />
      </div>
      <div className="flex flex-col not-prose">
        <small className="flex items-center gap-1">
          <span className="text-gray-400 dark:text-gray-600">{postDate}</span> ●{' '}
          <span className="text-red-600 uppercase">{postCategory}</span>
        </small>
        <Link href={`/posts/${postCategory}`}>       
        <h3 className="text-inherit font-bold text-2xl md:my-4">
          {postHeading}
        </h3>
      </Link>
        <p>
          {postDescription}
        </p>
        <Link href={`/posts/${postCategory}`} className="font-bold w-fit border-b-2 border-red-600 my-4">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
