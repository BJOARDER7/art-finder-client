import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const craft = useLoaderData();
  const {name, email, photo, item, subcategory, description, status, price, rating, time} = craft;
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={photo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-xl md:text-5xl font-bold">{item}</h1>
          <p className="opacity-60">Subcategory: {subcategory}</p>
          <p className="py-2 md:py-4">
           <span className="font-bold">About:</span> {description}
          </p>
          <div>
            <p>Availabe {status}</p>
            <div className="grid grid-cols-2 items-center">
            <p>Price: ${price}</p>
            <p>Rating : {rating}</p>
            <p>Processing Time: {time}</p>            
            </div>
          </div>
          <hr className="border-1 border-orange-600 w-2/3" />
          <div>
            <h2>User Profile:</h2>
            <div className="flex items-center space-x-4 md:space-x-8">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DetailsPage;
