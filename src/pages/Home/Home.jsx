import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Advertisement from "./Advertisement";
import ArtCraftCategories from "./ArtCraftCategories";
import CraftItems from "./CraftItems";
import ExtraSection from "./ExtraSection";
import Slider from "./Slider";

const Home = () => {
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
          <CraftItems></CraftItems>
          <ArtCraftCategories></ArtCraftCategories>
          <Footer></Footer>
        </div>        
    );
};

export default Home;