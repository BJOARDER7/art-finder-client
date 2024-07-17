import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


const SingleCraft = ({craft}) => {
    const {user} = useContext(AuthContext);

    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user?.photoURL}
                  alt="User Image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{craft.name}</div>
              <div className="text-sm opacity-50">{craft.email}</div>
            </div>
          </div>
        </td>
        <td>{craft.item}</td>
        <td>
          {craft.subcategory}
          <br />
          <span className="badge badge-ghost badge-sm">{craft.description}</span>
        </td>
        
        <th>
            <Link to={`/details/${craft._id}`}>
          <button className="btn btn-ghost btn-xs">View Details</button>
          </Link>
        </th>
      </tr>
    );
};

export default SingleCraft;