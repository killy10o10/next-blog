import Image from 'next/image';

const CommentText = ({commentUsername, commentDate, commentDesc, commentUserProfilePic}) => {
  return (
      <div className="flex flex-col mt-10">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full h-10 w-10 object-cover"
            src={commentUserProfilePic}
            alt="editors pick"
            width={35}
            height={35}
          />
          <div className='flex flex-col'>
            <small className="text-inherit font-semibold">{commentUsername}</small>
            <small className="dark:text-gray-600 text-gray-400 font-semibold">{commentDate.substring(0, 10).replace(/-/g, ".")}</small>
          </div>
        </div>
        <p className="font-semibold">
            {
              commentDesc
            }
        </p>
      </div>
  )
}

export default CommentText
