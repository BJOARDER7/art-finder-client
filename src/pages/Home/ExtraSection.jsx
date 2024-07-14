import { FaShippingFast } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { VscDebugStepBack } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";

const ExtraSection = () => {
    return (
        <div className="flex justify-around">
            <div className="flex items-center">
                <div>
                <FaShippingFast />
                </div>
                <div>
                    <h2>Free Shipping</h2>
                    <p>Art & craft</p>
                </div>
            </div>
            <div className="flex items-center">
                <div>
                <PiPhoneCall />
                </div>
                <div>
                    <h2>Online Support</h2>
                    <p>Art & craft</p>
                </div>
            </div>
            <div className="flex items-center">
                <div>
                <VscDebugStepBack />
                </div>
                <div>
                    <h2>Money Back</h2>
                    <p>Art & craft</p>
                </div>
            </div>
            <div className="flex items-center">
                <div>
                <FiSettings />
                </div>
                <div>
                    <h2>Our Services</h2>
                    <p>Art & craft</p>
                </div>
            </div>
            
        </div>
    );
};

export default ExtraSection;