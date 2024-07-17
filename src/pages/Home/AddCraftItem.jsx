import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddCraftItem = () => {
  const {user} = useContext(AuthContext);

  const handleAddCraft = (event) => {
    event.preventDefault();

    const form = event.target;

    const item = form.item.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const status = form.status.value;
    const time = form.time.value;
    const name = form.name.value;
    const email = form.email.value;

    const newCraft = {
      item,
      subcategory,
      description,
      photo,
      price,
      rating,
      status,
      time,
      name,
      email,
    };

    console.log(newCraft);

    // send data to the server
    fetch("http://localhost:5000/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-8">
      <h2 className="text-3xl font-extrabold text-center">Add Art & Craft</h2>
      <div className="flex justify-center">
      <form onSubmit={handleAddCraft}>
        <div className="md:flex mb-4">
          {/* Item Name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="item"
                placeholder="Craft Item Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* subcategory*/}
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategory"
                placeholder="Sub Category Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* short description*/}
        <div className="mb-4">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Photo URL */}
        <div className="mb-4">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-4">
          {/* price */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* rating */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-4">
          {/* Stock Status */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="status"
                placeholder="In stock / Made to Order"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Processing Time */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                placeholder="Processing Time
"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-4">
          {/* user name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name" 
                defaultValue={user.displayName}               
                placeholder="User Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* customization */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="customization"
                placeholder="Yes or No"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* User Email */}
        <div className="mb-4">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                defaultValue={user.email}
                placeholder="User Email"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Craft"
          className="btn btn-outline md:w-full"
        />
      </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
