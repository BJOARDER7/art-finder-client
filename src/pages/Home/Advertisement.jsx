import addImg1 from '../../assets/bird.jpg';
import addImg2 from '../../assets/pottery.jpg';


const Advertisement = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-min">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={addImg1}
            className="w-auto h-36 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-xl text-rose-600 font-bold"> UPTO 40% OFF LIST</h1>
            <p className="py-2">
            Art & craft <span className="text-red-600">OFFER</span> price.
            </p>
            <button className="btn btn-sm">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-min">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={addImg2}
            className="w-auto h-36 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-xl text-rose-600 font-bold"> UPTO 40% OFF LIST</h1>
            <p className="py-2">
            
            Art & craft <span className="text-rose-600">OFFER</span> price.
            </p>
            <button className="btn btn-sm">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
