
const SingleCategory = ({category}) => {
    console.log(category)
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={category?.image}
            alt="Category"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{category.subcategory_name}</h2>
          <p>{category.short_description}</p>
          
        </div>
      </div>
    );
};

export default SingleCategory;