const CategoryButton = ({ categoryImage, categoryText, categoryBG }) => {
  const style = {
    backgroundImage: `url(${categoryImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const categoryClassMap = {
    fashion: "bg-fashion",
    coding: "bg-coding", 
    style: "bg-style", 
    food: "bg-food", 
    culture: "bg-culture", 
    travel: "bg-travel", 
  };

  // Check if categoryBG is in the map, default to 'bg-gray-500' if not found
  const backgroundClass = categoryClassMap[categoryBG] || "bg-green-500";

  return (
    <div className={`py-2 shadow px-5 text-slate-100 sm:w-44 w-full font-bold cursor-pointer flex items-center justify-center gap-1 capitalize rounded-md ${backgroundClass}`}>
      <div className='flex items-center'>
        <div style={style} className="h-8 w-8 rounded-full border-blue-500 border"></div>
        <span className='capitalize ml-2'>{categoryText}</span>
      </div>
    </div>
  );
};

export default CategoryButton;
