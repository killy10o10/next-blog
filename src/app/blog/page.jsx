import PostList from '@/components/postList/PostList'

const blogPage = () => {
  return (
    <div className='min-h-screen flex flex-col max-w-[1400px]'>
      <div className='bg-fashion py-2 my-5 font-bold text-slate-100 text-center text-4xl shadow-lg'>Style Blog</div>
      <PostList />
    </div>
  )
}

export default blogPage
