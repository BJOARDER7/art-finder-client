import { Link } from "react-router-dom";

const CraftItems = ({ craft }) => {
  console.log(craft);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="">
        <img
          src={craft?.photo}
          alt="Craft"
          className="rounded-xl w-auto h-28"
        />
      </figure>
      <div className="card-body text-start">
        <div className="h-28">
          <h2 className="card-title text-2xl font-bold">{craft.item}</h2>
          <p>
            {craft?.description.length > 50
              ? craft.description.slice(0, 50)
              : craft.description}
          </p>
        </div>
        <div className="mt-2">
          <p>$ {craft.price}</p>
          <p className="text-red-600">Save upto 40% off</p>
        </div>
        <div className="flex items-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>({craft.rating})</p>
        </div>
        <div className="card-actions flex justify-center">
          <button className="btn btn-sm btn-outline btn-error">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CraftItems;
