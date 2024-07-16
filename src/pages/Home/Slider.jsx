import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.png";


const Slider = () => {  

      
    return (
        <div>
            <AwesomeSlider animation="cubeAnimation">
        <div data-src={slider1} />
        <div data-src={slider2} />
        <div data-src={slider3} />
      </AwesomeSlider>
        </div>
    );
};

export default Slider;