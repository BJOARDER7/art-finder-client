import { useLoaderData } from "react-router-dom";
import MyList from "../Nested/MyList";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyCraftList = () => {
  const {user} = useContext(AuthContext);
  const allList = useLoaderData();  
  
  const myList = allList.filter(list => list.email === user.email);
  const [crafts, setCrafts] = useState(myList);
  

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-24 mb-4">
        <h2 className="text-xl md:text-2xl font-bold">Filter By: Customization</h2>
        <select className="select select-error w-1/2 md:w-1/6 max-w-xs my-2">
          
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div className="grid grid-col-1 md:grid-cols-4 gap-4">
        {crafts.map((list) => (
          <MyList 
          key={list._id} 
          list={list}
          crafts={crafts}
          setCrafts={setCrafts}
          ></MyList>
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
