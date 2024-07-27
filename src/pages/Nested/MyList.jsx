
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = ({list, crafts, setCrafts}) => {
    
    const {_id, photo, item, price, rating, customization, status} = list;

    const handleDelete = _id => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/craft/${_id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      if (data.deletedCount > 0) {
                          
                          Swal.fire(
                              'Deleted!',
                              'Your craft has been deleted.',
                              'success'
                          )
                          const remaining = crafts.filter(craft => craft._id !== _id);
                          setCrafts(remaining);
                      }
                  })
          }
      })
  }

    return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="">
        <img
          src={photo}
          alt="Craft"
          className="rounded-xl w-auto h-48" />
      </figure>
      <div className="card-body items-start text-start">
        <h2 className="card-title text-xl md:text-2xl font-bold">{item}</h2>
        <div className="flex space-x-6 md:space-x-12">
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
        </div>
        <div>
            <p>Customization: {customization}</p>
            <p>Stock Status: {status}</p>
        </div>
        
        <div className="card-actions flex space-x-4 mx-auto">
          <Link to={`/mycraft/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>         
            <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>          
          
        </div>
      </div>
    </div>
    );
};

export default MyList;