import { useLoaderData } from "react-router-dom";
import MyList from "../Nested/MyList";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyCraftList = () => {
  const {user} = useContext(AuthContext);
  const allList = useLoaderData();
  
  const myList = allList.filter(list => list.email === user.email);
  

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-24 mb-4">
        <h2 className="text-xl md:text-2xl font-bold">Filter By:</h2>
        <select className="select select-error w-1/6 max-w-xs my-2">
          <option disabled selected>
            Customization
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {myList.map((list) => (
          <MyList key={list._id} list={list}></MyList>
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
