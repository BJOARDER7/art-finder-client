
import SingleCategory from "../Nested/SingleCategory";
import { useEffect, useState } from "react";



const ArtCraftCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/subcategory')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])

  console.log(categories)
    return (
        <div className="grid grid-col-1 md:grid-cols-3 gap-4 my-4 md:my-8">
          {
            categories.map(category => <SingleCategory
            key={category._id}
            category={category}
            ></SingleCategory>)
          }
        </div>
    );
};

export default ArtCraftCategories;