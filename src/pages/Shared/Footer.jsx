import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/christmas.jpg";



const Footer = () => {
    return (
<footer className="bg-black text-primary-content p-4">
      <div className="md:flex items-center justify-between">
        <div>
          <img className="w-12 h-12 rounded-full" src={logo} alt="" />
          <p className="font-bold">
          Art <span className="custom-font1 ps-2 tracking-tighter">f</span>inder
          </p>
          <p>Nilkhet, Dhaka, Bangladesh.</p>
          Contact: 02777-000000 <br />
          Phone: 01770-000000
        </div>
        

        <div>
            <h3 className="text-xl mb-2">Connect with</h3>
          <div className="md:grid grid-flow-col gap-4">
            <a href="https://twitter.com/home">
              <FaTwitter></FaTwitter>
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube></FaYoutube>
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center">Copyright © 2024 - All right reserved</p>
    </footer>
    );
};

export default Footer;