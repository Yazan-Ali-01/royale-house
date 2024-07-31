import { FiHeadphones, FiRefreshCw, FiTruck } from "react-icons/fi";
import ServiceHighlight from "./ServiceHighlight";
import TitleHighlight from "../TitleHighlight";
import Image from "next/image";

const HighlightSection = () => (
  <div className="mx-40">
    <TitleHighlight text="Featured" />
    <h2 className="text-4xl font-bold mb-8">New Arrival</h2>
       <div className="w-11/12 mx-auto mb-8">
      <Image
        src="/images/highlights.png" // Replace with your actual image path
        alt="New Arrival"
        width={1600} // Adjust width in pixels as needed for your design
        height={900} // Adjust height in pixels as needed for your design
        layout="responsive"
        objectFit="cover"
        className="rounded-lg"
      />
   
    </div>
    <div className="flex justify-around border-t-2 border-gray-300 pt-4">
      <ServiceHighlight
        icon={<FiTruck className="text-3xl text-white" />}
        title="Free and Fast Delivery"
        description="Free delivery for all orders over $50"
      />
      <ServiceHighlight
        icon={<FiHeadphones className="text-3xl text-white" />}
        title="24/7 Customer Service"
        description="Friendly 24/7 customer support"
      />
      <ServiceHighlight
        icon={<FiRefreshCw className="text-3xl text-white" />}
        title="Money Back Guarantee"
        description="100% money back guarantee"
      />
    </div>
  </div>
);

export default HighlightSection