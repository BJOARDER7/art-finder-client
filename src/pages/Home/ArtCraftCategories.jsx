
import SingleCategory from "../Nested/SingleCategory";
import { useEffect, useState } from "react";



const ArtCraftCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect( () => {
    fetch('https://art-finder-server.vercel.app/subcategory')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])

  console.log(categories)
    return (
        <div className=" my-4 md:my-8">
          <h2 className="text-lg md:text-3xl font-extrabold text-center my-4">Browse Featured Categories</h2>
          <div className="grid grid-col-1 md:grid-cols-3 gap-4">
          {
            categories.map(category => <SingleCategory
            key={category._id}
            category={category}
            ></SingleCategory>)
          }
        </div>
        </div>
    );
};

export default ArtCraftCategories;