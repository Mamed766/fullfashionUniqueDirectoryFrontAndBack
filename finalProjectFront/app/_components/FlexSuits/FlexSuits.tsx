import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import { useRequest } from "@/app/_http/axiosFetcher";
import "./flexsuits.scss";

const FlexSuits = () => {
  const suitStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  const router = useRouter();

  const { data, isLoading, error } = useRequest("suits", {
    method: "GET",
    module: "suitApi",
  });

  return (
    <>
      <div style={suitStyle}>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80 z-10 w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="max-w-[1500px] relative z-20 mx-auto"
        >
          <div className="w-full  mx-auto py-20 flex gap-5 flex-col md:flex-row  px-4 md:px-0">
            <div className="w-full relative z-20 md:w-3/5 max-h-[49rem] min-h-[30rem]">
              <div className="w-full h-auto">
                <Image
                  alt="Custom Suit"
                  src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/hotspot-background.webp"
                  layout="responsive"
                  objectFit="cover"
                  width={500}
                  height={1000}
                />
              </div>
            </div>
            <div className="w-full relative z-20 md:w-1/2 mt-8 md:mt-0 flex flex-col text-white  items-start px-4 md:px-8">
              <div className="w-full">
                <h2 className="text-[14px] font-semibold">SUPREME QUALITY</h2>
                <h1 className="text-[40px] font-bold my-4">
                  Custom Made Men's Suits
                </h1>
                <p className="text-[16px] max-w-[450px] mb-6">
                  Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
                  Nulla facilisi cras fermentum odio eu. Nunc sed augue.
                </p>
              </div>
              <div className="w-full">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  className="flexSwiper bg-transparent"
                >
                  {data &&
                    data?.suits.map((item: any, index: number) => {
                      return (
                        <SwiperSlide className="!bg-transparent">
                          <div className="flex   pt-5 gap-5 flex-wrap ">
                            <div className="max-w-[30rem] bg-transparent  relative max-h-[48rem] group border border-transparent  duration-700">
                              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                              <div
                                onClick={() => router.push(`suits/${item._id}`)}
                                className="relative bg-transparent max-h-[24rem] min-h-[24rem] h-full overflow-hidden cursor-pointer"
                              >
                                <motion.div
                                  initial={{ opacity: 1, scale: 1 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  whileHover={{ opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.7 }}
                                >
                                  <Image
                                    alt=""
                                    src={`http://localhost:3001/${item?.image1}`}
                                    height={1000}
                                    width={1000}
                                    quality={100}
                                    className="min-h-[24rem]  max-h-[24rem] object-cover"
                                  />
                                </motion.div>

                                <motion.div
                                  className="absolute top-0 left-0"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 0, scale: 0.8 }}
                                  whileHover={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.7 }}
                                >
                                  <Image
                                    alt=""
                                    src={`http://localhost:3001/${item?.image2}`}
                                    height={1000}
                                    width={1000}
                                    quality={100}
                                    className="min-h-[24rem]  max-h-[24rem]  object-cover"
                                  />
                                </motion.div>
                              </div>
                              <div className="text-center relative  overflow-hidden w-full  pt-10 pb-20">
                                <h3 className="text-white text-[20px] cursor-pointer hover:text-[#BB9D7B] duration-700">
                                  {item?.title}
                                </h3>
                                <p className="text-gray-500">
                                  ${item?.price}.00
                                </p>
                                <div className="w-full flex justify-center items-center">
                                  <button
                                    onClick={() =>
                                      router.push(`suits/${item._id}`)
                                    }
                                    className="text-white bg-[#BB9D7B] border border-transparent hover:border-[#BB9D7B] absolute bottom-[-1rem] opacity-0  group-hover:bottom-[1rem] group-hover:opacity-100 hover:bg-transparent duration-700  py-2 px-5 mt-2"
                                  >
                                    Select Options
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="w-full pb-5  mx-auto  flex flexwrapsuits     !flex-row-reverse gap-5  md:flex-row  px-4 md:px-0">
            <div className="w-full relative z-20 md:w-3/5 max-h-[49rem] min-h-[30rem]">
              <div className="w-full relative h-auto">
                <Image
                  alt="Custom Suit"
                  src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/inner-section-right-img.jpg"
                  layout="responsive"
                  objectFit="cover"
                  width={500}
                  height={1000}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                <div className="w-full absolute bottom-0 py-10 px-10 flex flex-col   bg-transparent text-white">
                  <h2 className="text-3xl font-bold mb-4">
                    Get 50% OFF on first class suits
                  </h2>
                  <div className="flex flex-col md:flex-row  px-2 justify-between border border-white py-2 w-full ">
                    <input
                      type="email"
                      placeholder="Enter your email to subscribe*"
                      className=" w-full  bg-transparent text-start text-white py-2 px-4 focus:outline-none placeholder-gray-400"
                    />
                    <button className="bg-[#BB9D7B] justify-end text-white py-2 px-6 mt-4 md:mt-0 md:ml-4 hover:bg-transparent hover:border-[#BB9D7B] border border-transparent hover:text-[#BB9D7B] transition duration-300">
                      SUBSCRIBE
                    </button>
                  </div>
                  <p className="text-sm text-white mt-4">
                    *Use code CLASSIC at checkout through 4/10. Exclusions
                    apply.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full relative z-20 md:w-1/2 mt-8 md:mt-0 flex flex-col text-white  items-start px-4 md:px-8">
              <div className="flex  w-full flex-col justify-end items-end">
                <h2 className="text-[14px] font-semibold">
                  COMPREHENSIVE DESIGN
                </h2>
                <h1 className="text-[40px]    text-end items-end font-bold my-4">
                  New Collections of Stylish Suits
                </h1>
                <p className=" max-w-[450px] text-[16px] mb-6">
                  Bisi vitae suscipit tellus mauris a diam maecenas sed enim.
                  Est ultricies integer quis auctor elit sed vulputate.
                </p>
              </div>

              <div className="w-full">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  className="flexSwiper bg-transparent"
                >
                  {data &&
                    data?.suits.slice(3, -1).map((item: any, index: number) => {
                      return (
                        <SwiperSlide className="!bg-transparent">
                          <div className="flex  justify-center  pt-5 gap-5 flex-wrap ">
                            <div className="max-w-[30rem] bg-transparent  relative max-h-[48rem] group border border-transparent  duration-700">
                              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                              <div
                                onClick={() => router.push(`suits/${item._id}`)}
                                className="relative bg-transparent max-h-[24rem] min-h-[24rem] h-full overflow-hidden cursor-pointer"
                              >
                                <motion.div
                                  initial={{ opacity: 1, scale: 1 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  whileHover={{ opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.7 }}
                                >
                                  <Image
                                    alt=""
                                    src={`http://localhost:3001/${item?.image1}`}
                                    height={1000}
                                    width={1000}
                                    quality={100}
                                    className="min-h-[24rem]  max-h-[24rem] object-cover"
                                  />
                                </motion.div>

                                <motion.div
                                  className="absolute top-0 left-0"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 0, scale: 0.8 }}
                                  whileHover={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.7 }}
                                >
                                  <Image
                                    alt=""
                                    src={`http://localhost:3001/${item?.image2}`}
                                    height={1000}
                                    width={1000}
                                    quality={100}
                                    className="min-h-[24rem]  max-h-[24rem]  object-cover"
                                  />
                                </motion.div>
                              </div>
                              <div className="text-center relative  overflow-hidden w-full  pt-10 pb-20">
                                <h3 className="text-white text-[20px] cursor-pointer hover:text-[#BB9D7B] duration-700">
                                  {item?.title}
                                </h3>
                                <p className="text-gray-500">
                                  ${item?.price}.00
                                </p>
                                <div className="w-full flex justify-center items-center">
                                  <button
                                    onClick={() =>
                                      router.push(`suits/${item._id}`)
                                    }
                                    className="text-white bg-[#BB9D7B] border border-transparent hover:border-[#BB9D7B] absolute bottom-[-1rem] opacity-0  group-hover:bottom-[1rem] group-hover:opacity-100 hover:bg-transparent duration-700  py-2 px-5 mt-2"
                                  >
                                    Select Options
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexSuits;
