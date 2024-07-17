import SingleCraft from "./SingleCraft";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";



const AllCraftItems = () => {
    const {user} = useContext(AuthContext);
    const crafts = useLoaderData();
    
    return (
      <div>
        <h2 className="text-3xl font-extrabold text-center my-4">All Art & Craft Items</h2>
      
      <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              
            </th>
            <th>User</th>
            <th>Item Name</th>
            <th>Description</th>
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