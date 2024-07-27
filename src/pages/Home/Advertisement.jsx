import addImg1 from '../../assets/artist.jpg';
import addImg2 from '../../assets/bird.jpg';


const Advertisement = () => {
  return (
    <div className='space-y-2 md:space-y-8'>
      <div className="hero bg-base-200 min-h-min rounded-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div>
            <h1 className="text-xl md:text-2xl text-rose-600 font-bold text-center"> UPTO 40% OFF LIST</h1>
            <div className='flex my-4 space-x-2'>
            <p className="p-2 text-lg md:text-xl font-bold">
            Art <br /> Best <br /> <span className="text-red-600">OFFER</span> <br /> Price.
            </p>
              <div>
              <img
            src={addImg1}
            className="w-auto h-36 rounded-lg shadow-2xl"
          />
              </div>
            </div>
            <div className='flex justify-end mt-4'>
            <button className="btn btn-outline btn-error btn-sm">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-min rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div>
            <h1 className="text-xl md:text-2xl text-rose-600 font-bold text-center"> UPTO 40% OFF LIST</h1>
            <div className='flex my-4 space-x-2'>
            <p className="p-2 text-lg md:text-xl font-bold">
            Craft <br /> Best <br /> <span className="text-red-600">OFFER</span> <br /> Price.
            </p>
              <div>
              <img
            src={addImg2}
            className="w-auto h-36 rounded-lg shadow-2xl"
          />
              </div>
            </div>
            <div className='flex justify-end mt-4'>
            <button className="btn btn-outline btn-error btn-sm">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
