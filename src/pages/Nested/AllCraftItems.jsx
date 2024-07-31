import SingleCraft from "./SingleCraft";
import { useLoaderData } from "react-router-dom";



const AllCraftItems = () => {    
    const crafts = useLoaderData();
    
    return (
      <div>
        <h2 className="text-lg md:text-3xl font-extrabold text-center my-4">All Art & Craft Items</h2>
      
      <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="hidden md:block">
              
            </th>
            <th>User</th>
            <th>Item Name</th>
            <th className="hidden md:block">Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          crafts.map(craft => <SingleCraft
          key={craft._id}
          craft={craft}
          ></SingleCraft>)
        }
                   
        </tbody>       
      </table>
    </div>
    </div>
    );
};

export default AllCraftItems;