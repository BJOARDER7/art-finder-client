

const CraftItems = ({craft}) => {
    console.log(craft)
    return (
      <div className="card bg-base-100 shadow-xl">
      <figure className="">
        <img
          src={craft?.photo}
          alt="Craft"
          className="rounded-xl w-auto h-24" />
      </figure>
      <div className="card-body items-center text-start">
        <h2 className="card-title">{craft.item}</h2>
        <p>{craft.description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
    );
};

export default CraftItems;