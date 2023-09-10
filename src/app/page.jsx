import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";

export default function Home() {
  return(
   <>
      <div className="prose lg:prose-xl max-w-7xl flex flex-col min-h-screen  text-inherit">
        <h1 className="text-inherit">Garlic bread with cheese: What the science tells us</h1>
        <Featured />
        <CategoryList />
      </div>
   </>
  );
}
