import { useLoaderData } from "react-router-dom";
import Advertisement from "./Advertisement";
import ArtCraftCategories from "./ArtCraftCategories";
import ExtraSection from "./ExtraSection";
import Slider from "./Slider";
import CraftItems from "./CraftItems";


const Home = () => {
  const allCraft = useLoaderData();  

    return (
        <div>          
          <div className="md:flex w-full gap-4 mb-4 md:mb-8">
            <div className="w-full md:w-3/4 p-4 my-4">
              <Slider></Slider>
            </div>
            <div className="w-full md:w-1/4 p-4 my-4">
              <Advertisement></Advertisement>
            </div>
          </div>
          <ExtraSection ></ExtraSection>
          <div>
          <div className="legend-font text-center w-full lg:w-3/5 mx-auto my-4 lg:my-8 px-6 space-y-2 lg:space-y-4">
          <h3 className="text-2xl lg:text-4xl font-semibold">Craft Items</h3>
          <p className="text-sm lg:text-lg opacity-60"> Arts and crafts provide a wealth of benefits for children, both in the short and long term.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {
              allCraft?.slice(0,6).map(craft => <CraftItems
              key={craft._id}
              craft={craft}
              ></CraftItems>)  
            }
          </div>
          </div>
          
          <ArtCraftCategories></ArtCraftCategories>          
        </div>        
    );
};

export default Home;