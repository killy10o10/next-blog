import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import PostList from "@/components/postList/PostList";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page)  || 1;

  return(
   <>
      <div className="prose lg:prose-xl max-w-[1400px] flex flex-col min-h-screen  text-inherit mt-10">
        <h1 className="text-inherit">Garlic bread with cheese: What the science tells us</h1>
        <Featured />
        <CategoryList />
        <PostList page={page} />
      </div>
   </>
  );
}
