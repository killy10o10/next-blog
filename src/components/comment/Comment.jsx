"use client"
import Link from 'next/link';
import CommentText from '../commentText/CommentText';
import {useSession} from 'next-auth/react';
import useSWR from "swr";

const fetcher = async (url) => {
   const res = await  fetch(url);
   const data = await res.json();
   if(!res.ok) {
       throw  new Error(data.message);
   }
   return data;
}

const Comment = ({postSlug}) => {
  const { status } = useSession();
  const {data, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)

  return (
    <div className="flex flex-col transition delay-500">
      <h3 className="font-bold text-3xl my-10">Comments</h3>
      {status === 'authenticated' ? (
        <form className="flex flex-col md:flex-row gap-5 items-center">
          <textarea
            className="w-[80%] rounded shadow px-4 py-2 text-xl text-blue-gray-900 font-mono"
            placeholder="write comment here"></textarea>
          <button className="rounded shadow bg-blue-600 font-bold text-slate-100 h-fit py-2 px-8">
            Send
          </button>
        </form>
      ) : (
        <Link
          className="text-center text-2xl font-mono font-semibold py-2 bg-blue-600 text-slate-100"
          href="/login">
          Login to comment
        </Link>
      )}
       { !isLoading &&
          data?.map(commentData => <CommentText
            key={commentData.id}
            commentDate={commentData.createdAt}
            commentDesc={commentData.desc}
            commentUserProfilePic={commentData.user.image}
            commentUsername={commentData.user.name}
          />
       )}
    </div>
  );
};

export default Comment;
