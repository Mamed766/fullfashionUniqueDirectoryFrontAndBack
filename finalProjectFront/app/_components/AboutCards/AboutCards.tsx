import HublotLogo from "@/app/_assets/HublotLogo";
import MachineLogo from "@/app/_assets/MachineLogo";
import OmegaLogo from "@/app/_assets/OmegaLogo";
import PinLogo from "@/app/_assets/PinLogo";
import RolexLogo from "@/app/_assets/RolexLogo";
import ScissorRotate from "@/app/_assets/ScissorRotate";
import StickLogo from "@/app/_assets/StickLogo";
import TudorLogo from "@/app/_assets/TudorLogo";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

export interface CardData {
  id: number;
  title?: string;
  description?: string;
  imageUrl: string;
  icon?: any;
}

export const cardData: CardData[] = [
  {
    id: 1,
    title: "IWC",
    description: "SCHAFFHAUSEN",
    imageUrl:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-instagram-2.jpg",
  },
  {
    id: 2,
    icon: <RolexLogo />,
    imageUrl:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-5.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-instagram-3.jpg",
    icon: <OmegaLogo />,
  },
  {
    id: 4,
    imageUrl:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-3.jpg",
    icon: <HublotLogo />,
  },
  {
    id: 5,
    imageUrl:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-instagram-1.jpg",
    icon: <TudorLogo />,
  },
];

const AboutCards = () => {
  return (
    <div>
      <div className="relative text-white w-full flex flex-wrap justify-center md:justify-between z-20">
        {cardData.map((item: any) => (
          <div
            key={item.id}
            className="relative  max-w-[17rem]  min-w-[17rem]  min-h-[15rem]   border-gray-500  flex flex-col gap-5 justify-center px-5 bg-opacity-90 transition-all duration-500 group overflow-hidden"
          >
            <div
              className="absolute top-0 left-[15%] min-w-[10rem]  h-full bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage: `url(${item?.imageUrl})`,
              }}
            >
              <div className="absolute inset-0 bg-[#34312E] opacity-60"></div>
            </div>
            <div className="z-20 relative left-[1.2rem] top-[1.5rem] max-w-[10rem]">
              {item?.icon}
            </div>{" "}
            <h2 className="z-20 relative right-[1rem] text-[32px] text-center">
              {item?.title}
            </h2>
            <p className="z-20 relative right-[1rem] text-[10px] text-center">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
