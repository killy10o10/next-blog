import PostList from '@/components/postList/PostList'

const BlogPage = ({searchParams}) => {
  const page = parseInt(searchParams.page)  || 1;
  const { category} =  searchParams

  return (
    <div className='min-h-screen flex flex-col max-w-[1400px]'>
      <h1 className={`bg-${category} py-2 my-5 font-bold text-slate-100 text-center text-4xl shadow-lg capitalize`}>{category} Blog</h1>
      <PostList page={page} category={category} />
    </div>
  )
}

export default BlogPage
