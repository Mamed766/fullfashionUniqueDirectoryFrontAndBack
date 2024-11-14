import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./TeamInfo.scss";

const TeamInfo = () => {
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
  ];

  const PHOTOS = [
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-4-team-3.webp",
      id: 1,
      name: "Saara",
      job: "PERSONAL TRAINER",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-4-team-2.webp",
      id: 2,
      name: "Kelvin",
      job: "HEALTH COACH",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/team-image-3a.webp",
      id: 3,
      name: "Kelvin",
      job: "HEALTH COACH",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-4-team-1.webp",
      id: 4,
      name: "Kelvin",
      job: "HEALTH COACH",
    },
  ];

  const brandStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/home-4-image-box-bg-image-a.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <div style={brandStyle} className="bg-black ">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80 z-10 w-full h-full"></div>

      <div className="max-w-[1500px] py-20 relative z-20 mx-auto">
        <div className="flex textflex teamflex flex-col gap-4 md:flex-row">
          <div className="flex  px-2 textflex items-center md:items-start flex-col gap-5">
            <div className="text-white">
              <h2>TRULY PERFECT TEAM</h2>
              <h1 className="text-[50px] font-medium max-w-[800px]">
                Persons Who Design Comfort & Stylish Formal And Casual Attire
              </h1>
              <p className="max-w-[500px]">
                Rutrum quisque non tellus orci ac auctor augue. Mattis aliquam
                faucibus purus in. Amet porttitor eget dolor morbi non arcu enim
                blandit volutpat.
              </p>
            </div>
            <div>
              <button className="text-[14px]  px-2 py-2 text-white border bg-[#BB9D7B] border-[#BB9D7B] hover:bg-transparent duration-500">
                BOOK YOUR DESIGNER
              </button>
            </div>
          </div>
          <div className="flex flex-col teamflex gap-5 justify-center  items-center  md:flex-row mt-5 overflow-hidden  ">
            {SLIDES &&
              SLIDES.map((item: any, index: number) => {
                return (
                  <div className="embla__slide group  cursor-grab" key={index}>
                    <div className="relative text-white max-w-[26.3rem]">
                      <img
                        src={item?.src}
                        alt={`Slide ${item?.id}`}
                        className="embla__slide__img relative "
                      />
                      <div className="bg-[#BB9D7B] group-hover:bottom-[0] duration-500 py-5 flex justify-between items-center px-2 absolute bottom-[-10rem] w-full ">
                        <div>
                          <h2 className="text-[30px] font-medium hover:text-black duration-500">
                            {item?.name}
                          </h2>
                          <p>{item?.job}</p>
                        </div>
                        <div>
                          <ul className="flex gap-2">
                            <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                              <FaFacebookF />
                            </li>
                            <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                              <FaInstagram />
                            </li>
                            <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                              <FaYoutube />
                            </li>
                            <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                              <FaLinkedinIn />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex flex-col teamflex gap-4 md:flex-row">
          <div className="flex flex-col gap-4 teamflex md:flex-row mt-5 items-center   overflow-hidden  ">
            {PHOTOS &&
              PHOTOS.map((item: any, index: number) => {
                return (
                  <div className="embla__slide group  cursor-grab" key={index}>
                    <div className="relative text-white max-w-[26.3rem]">
                      <img
                        src={item?.src}
                        alt={`Slide ${item?.id}`}
                        className="embla__slide__img relative "
                      />
                      <div className="bg-[#BB9D7B] group-hover:bottom-[0] duration-500 py-5 flex justify-between items-center px-2 absolute bottom-[-10rem] w-full ">
                        <div>
                          <h2 className="text-[30px] font-medium hover:text-black duration-500">
                            {item?.name}
                          </h2>
                          <p>{item?.job}</p>
                        </div>
                        <div>
                          <ul className="flex gap-2">
                            <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                              <FaFacebookF />
                            </li>
                            <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                              <FaInstagram />
                            </li>
                            <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                              <FaYoutube />
                            </li>
                            <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                              <FaLinkedinIn />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
