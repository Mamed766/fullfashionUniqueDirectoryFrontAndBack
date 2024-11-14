import React from "react";
import Scissor from "@/app/_assets/Scissor";
import ScissorRotate from "@/app/_assets/ScissorRotate";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import StickLogo from "@/app/_assets/StickLogo";
import MachineLogo from "@/app/_assets/MachineLogo";
import PinLogo from "@/app/_assets/PinLogo";

export interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: JSX.Element;
}

export const cardData: CardData[] = [
  {
    id: 1,
    title: "Cutting-Edge Technology",
    description:
      "Nec ullamcorper sit amet risus nullam eget felis eget nunc. Ultrices neque ornare aenean euismod elementum nisi eleifend. click here",
    imageUrl:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-3.webp",
    icon: <ScissorRotate />,
  },
  {
    id: 2,
    title: "2500 Luxurious Fabrics",
    description:
      "Duis tristique sollicitudin nibh sit amet. Cum sociis natoque penatibus et magnis dis parturient montes aliquet nascetur.",
    imageUrl:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-1-icon-box-image-2.jpg",
    icon: <StickLogo />,
  },
  {
    id: 3,
    title: "Hand Stitched By Skilled Tailors",
    description:
      "Scelerisque fermentum dui faucibus in ornare. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Consequat.",
    imageUrl:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-1-icon-box-image-3.jpg",
    icon: <MachineLogo />,
  },
  {
    id: 4,
    title: "Outstanding Structure & Shape",
    description:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Cursus mattis molestie a iaculis orci at.",
    imageUrl:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-1-icon-box-image-4.jpg",
    icon: <PinLogo />,
  },
];

const Brand: React.FC = () => {
  const brandStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <div className="py-[10rem]" style={brandStyle}>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80 z-10 w-full h-full"></div>
      <div data-aos="fade-up" className="h-full relative overflow-hidden  z-20">
        <div className="flex flex-col z-20 items-center text-white   gap-5">
          <div className="flex-shrink-0 z-20 min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
            <Scissor />
          </div>
          <div className="ml-4 text-center z-20 ">
            <h2 className="text-[14px]">GLOBAL BRAND</h2>
            <h1 className="text-[50px]">Fashion & Design Company</h1>
          </div>
        </div>

        <div className="relative text-white w-full flex flex-wrap justify-center mt-10 z-20">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="relative   border-gray-500  flex flex-col gap-5 max-w-[22rem] min-h-[20rem] justify-center px-5 bg-opacity-90 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-0 group-hover:h-full border-l-[2px] border-[#BB9D7B] z-30 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 h-0 group-hover:h-full border-r-[2px] border-[#BB9D7B] z-30 transition-all duration-500"></div>
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${item?.imageUrl})`,
                }}
              >
                <div className="absolute inset-0 bg-[#34312E] opacity-60"></div>
              </div>
              <div className="z-20 relative">{item?.icon}</div>{" "}
              <h2 className="z-20 relative text-[32px]">{item?.title}</h2>
              <p className="z-20 relative text-[16px]">{item?.description}</p>
              <div className="flex justify-end items-end z-20 relative text-[#BB9D7B]">
                <MdOutlineArrowOutward className="group-hover:rotate-[45deg] text-[22px] duration-300 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
