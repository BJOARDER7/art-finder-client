import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Advertisement from "./Advertisement";
import ArtCraftCategories from "./ArtCraftCategories";
import ExtraSection from "./ExtraSection";
import Slider from "./Slider";
import CraftItems from "./CraftItems";

const Home = () => {
  const allCraft = useLoaderData();
   

    return (
        <div>
          <Navbar></Navbar> 
          <div className="flex w-full">
            <div className="w-4/5">
              <Slider></Slider>
            </div>
            <div className="w-1/5">
              <Advertisement></Advertisement>
            </div>
          </div>
          <ExtraSection></ExtraSection>
          <div className="grid grid-cols-6 gap-4">
          {
              allCraft.slice(0,6).map(craft => <CraftItems
              key={craft._id}
              craft={craft}
              ></CraftItems>)  
            }
          </div>
          <ArtCraftCategories></ArtCraftCategories>
          <Footer></Footer>
        </div>        
    );
};

export default Home;