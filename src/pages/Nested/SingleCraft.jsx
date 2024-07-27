import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


const SingleCraft = ({craft}) => {
    const {user} = useContext(AuthContext);

    return (
        <tr>
        <th className="hidden md:block">
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="mask mask-squircle h-8 md:h-12 w-8 md:w-12">
                <img
                  src={user?.photoURL}
                  alt="User Image" />
              </div>
            </div>
            <div>
              <div className="font-bold text-xs md:text-base">{craft.name}</div>
              <div className="text-xs md:text-base opacity-50">{craft.email}</div>
            </div>
          </div>
        </td>
        <td className="text-sm md:text-base">{craft.item}</td>
        <td className="hidden md:block">
          {craft.subcategory}
          <br />
          <span className="badge badge-ghost badge-sm text-xs md:text-base">{craft.description}</span>
        </td>
        
        <th>
            <Link to={`/details/${craft._id}`}>
          <button className="btn btn-sm btn-outline btn-error text-xs md:text-base">View Details</button>
          </Link>
        </th>
      </tr>
    );
};

export default SingleCraft;