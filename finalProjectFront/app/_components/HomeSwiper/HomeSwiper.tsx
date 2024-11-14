import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import SwiperNavigateLeft from "@/app/_assets/SwiperNavigateLeft";
import SwiperNavigationRight from "@/app/_assets/SwiperNavigationRight";
import { useRequest } from "@/app/_http/axiosFetcher";
import { motion } from "framer-motion";
import ReactCurvedText from "react-curved-text";
import Loading from "@/app/loading";

const HomeSwiper = () => {
  const text = "Scroll Down Scroll Down Scroll Down ";

  const { data, isLoading, error } = useRequest("fashions", {
    method: "GET",
    module: "fashionApi",
  });

  if (isLoading) {
    return <Loading />;
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative w-full pt-16">
      <Swiper
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {data &&
          data?.fashions.map((item: any, index: number) => {
            return (
              <SwiperSlide className="cursor-grab" key={index}>
                <div className="flex gap-5 bg-black flex-col md:gap-0 md:flex-row h-[60rem] relative">
                  <motion.div
                    className="w-full md:w-1/2 group relative h-full"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                  >
                    <Image
                      alt="slider image 1"
                      src={`http://localhost:3001/${item?.fashionImage}`}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />

                    <div className="flex flex-col mb-5 max-h-[20rem] overflow-hidden justify-center items-center w-full absolute bottom-0">
                      <h2 className="text-white ">{item?.fashionType}</h2>
                      <h1 className="text-[4rem] cursor-pointer text-white duration-500 group-hover:text-[#BB9D7B]  ">
                        <span className="hover:text-white duration-300">
                          {item?.fashionWhom}
                        </span>
                      </h1>
                      <p className="flex hover:text-[#BB9D7B] cursor-pointer  items-center text-[14px] text-white absolute duration-500 bottom-[-5rem] group-hover:bottom-[-5px]">
                        DISCOVER <FaAngleRight />
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-full md:w-1/2 group relative h-full"
                    initial="hidden"
                    animate="visible"
                    variants={fadeDown}
                  >
                    <Image
                      alt="slider image 2"
                      src={`http://localhost:3001/${item?.fashionImage2}`}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />

                    <div className="flex flex-col mb-5 max-h-[20rem] overflow-hidden justify-center items-center w-full absolute bottom-0">
                      <h2 className="text-white ">{item?.fashionType2}</h2>
                      <h1 className="text-[4rem] cursor-pointer text-white duration-500 group-hover:text-[#BB9D7B]  ">
                        <span className="hover:text-white duration-300">
                          {item?.fashionWhom2}
                        </span>
                      </h1>
                      <p className="flex hover:text-[#BB9D7B] cursor-pointer  items-center text-[14px] text-white absolute duration-500 bottom-[-5rem] group-hover:bottom-[-6px]">
                        DISCOVER <FaAngleRight />
                      </p>
                    </div>
                  </motion.div>

                  <div className="absolute left-[-8rem] top-[25rem] text-white">
                    <ul className="flex gap-8 rotate-[270deg]">
                      <li className="hover:text-[#BB9D7B] duration-300">
                        Facebook
                      </li>
                      <li className="hover:text-[#BB9D7B] duration-300">
                        Instagram
                      </li>
                      <li className="hover:text-[#BB9D7B] duration-300">
                        Twitter
                      </li>
                      <li className="hover:text-[#BB9D7B] duration-300">
                        Linkedin
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        <div className="custom-prev absolute duration-300 hover:border-[#BB9D7B]  z-20  w-[200px]  py-5 px-3  max-w-[60px] border  left-1/2 top-1/2 transform -translate-x-[110%] -translate-y-1/2 cursor-pointer border-white bg-transparent text-white p-3 rounded-full">
          <div>
            <SwiperNavigateLeft />
          </div>
        </div>
        <div className="custom-next w-[200px] duration-300  hover:border-[#BB9D7B] py-5 px-3  max-w-[60px] z-20 absolute left-1/2 top-1/2 transform border-white  translate-x-[10%] -translate-y-1/2 cursor-pointer bg-transparent border text-white p-3 rounded-full ">
          <div>
            <SwiperNavigationRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
