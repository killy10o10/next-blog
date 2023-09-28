"use client"

import { useRouter } from "next/navigation"

const Pagination = ({page, hasPrev, hasNext}) => {
  const router = useRouter()

  return (
    <div className='flex items-center justify-between my-5'>
      <button disabled={!hasPrev} onClick={() => router.push(`?page=${page - 1}`)} className={`bg-red-700 disabled:bg-red-950 cursor-pointer disabled:cursor-not-allowed font-bold text-slate-100 disabled:text-slate-400 py-2 px-5 w-32`}>Previous</button>
      <button disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)} className='bg-red-700 disabled:bg-red-950 cursor-pointer disabled:cursor-not-allowed font-bold text-slate-100 disabled:text-slate-400 py-2 px-5 w-32'>Next</button>
    </div>
  )
}

export default Pagination

