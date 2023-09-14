import Image from 'next/image';
import React from 'react'

const CommentText = () => {
  return (
      <div className="flex flex-col mt-10">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full h-10 w-10 object-cover"
            src="/culture.jpg"
            alt="editors pick"
            width={35}
            height={35}
          />
          <div className='flex flex-col'>
            <small className="text-inherit font-semibold">Kingsley Quami Okine</small>
            <small className="dark:text-gray-600 text-gray-400 font-semibold">25 April 2023</small>
          </div>
        </div>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus eum eveniet amet
          aliquid cupiditate quisquam harum. Consectetur, sequi? Aut rerum porro ipsam illum
          doloribus quos maiores perferendis nostrum debitis.
        </p>
      </div>
  )
}

export default CommentText
