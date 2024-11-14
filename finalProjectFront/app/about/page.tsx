"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import Brand from "../_components/Brand/Brand";
import Information from "../_components/Information/Information";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";
import AboutCards from "../_components/AboutCards/AboutCards";

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = [
  {
    src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/team-image-2.webp",
    id: 1,
    name: "Saara",
    job: "PERSONAL TRAINER",
  },
  {
    src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/team-image-3a.webp",
    id: 2,
    name: "Kelvin",
    job: "HEALTH COACH",
  },
  {
    src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/team-image-1.webp",
    id: 3,
    name: "Jack",
    job: "SPORTS COACH",
  },
  {
    src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/team-image-2.webp",
    id: 4,
    name: "Saara",
    job: "PERSONAL TRAINER",
  },
];

const About = () => {
  const sliderStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/home-4-image-box-bg-image-a.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="pt-16">
        <Breadcrump bread1="Home" title="About Us" />
      </div>
      <div>
        <Brand />
      </div>
      <div>
        <Information />
      </div>
      <div
        style={sliderStyle}
        className="py-20 flex justify-center items-center "
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80 z-10 w-full h-full"></div>

        <div className="relative px-2 z-20 flex  flex-col md:flex-row justify-between gap-20 items-center">
          <div className="text-white flex flex-col gap-1">
            <div className="flex flex-col ">
              <p className="text-[14px]">TAILORS & DESIGNERS</p>
              <h2 className="text-[50px] max-w-[450px] font-medium">
                Our varied fashion business is value-driven
              </h2>
              <p className="text-[16px] max-w-[500px]">
                Sollicitudin ac orci phasellus egestas tellus. Amet nisl purus
                in mollis nunc sed id. Cursus eget nunc scelerisque viverra
                mauris in aliquam
              </p>
            </div>

            <div className="mt-5">
              <button className="bg-[#bb9d7b] hover:bg-black duration-700 px-10 py-2">
                BOOK YOUR TRAINERS
              </button>
            </div>
          </div>

          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
      <div className="bg-black">
        <AboutCards />
      </div>
    </div>
  );
};

export default About;
