import { FaShippingFast } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { VscDebugStepBack } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";

const ExtraSection = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center space-y-2 my-8">
            <div className="flex items-center space-x-2">
                <div>
                <FaShippingFast className="text-2xl md:text-4xl" />
                </div>
                <div>
                    <h2>Free Shipping</h2>
                    <p className="opacity-60">Art & craft</p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div>
                <PiPhoneCall className="text-2xl md:text-4xl" />
                </div>
                <div>
                    <h2>Online Support</h2>
                    <p className="opacity-60">Art & craft</p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div>
                <VscDebugStepBack className="text-2xl md:text-4xl" />
                </div>
                <div>
                    <h2>Money Back</h2>
                    <p className="opacity-60">Art & craft</p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div>
                <FiSettings className="text-2xl md:text-4xl" />
                </div>
                <div>
                    <h2>Our Services</h2>
                    <p className="opacity-60">Art & craft</p>
                </div>
            </div>
            
        </div>
    );
};

export default ExtraSection;