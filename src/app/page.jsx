// import Footer from "@/components/footer/Footer";
// import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return(
   <>
    {/* <Navbar /> */}
      <div className="flex flex-col min-h-screen items-center justify-center p-3 lg:p-8">
        <article className="prose lg:prose-xl text-inherit">
          <h1 className="text-inherit">Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their
            children, with the food earning such an iconic status in our culture that kids will often dress
            up as warm, cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
            springing up around the country.
          </p>
        </article>
      </div>
      {/* <Footer /> */}
   </>
  );
}
