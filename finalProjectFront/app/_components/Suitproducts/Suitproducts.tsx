import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRequest } from "@/app/_http/axiosFetcher";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/app/loading";
import ReviewForm from "../Review/Review";

const Suitproducts = () => {
  const router = useRouter();
  const { data, isLoading, error } = useRequest("suits", {
    method: "GET",
    module: "suitApi",
  });
  const searchParams = useSearchParams();
  const currentVisibleCount = searchParams.get("visible") || 6;
  data && console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  const handleViewMore = () => {
    const newVisibleCount = parseInt(currentVisibleCount as string) + 3;
    router.replace(`?visible=${newVisibleCount}`, { scroll: false });
  };

  const suitStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <>
      <div style={suitStyle} className="py-20 ">
        <div className="">
          <div className="absolute overflow-hidden top-0 bottom-0 left-0 right-0 bg-black opacity-80 z-10 w-full h-full"></div>
          <div className=" relative z-20">
            <div
              data-aos="fade-right"
              className="flex flex-col gap-1 text-white justify-center items-center"
            >
              <h2>RECENT PRODUCTS</h2>
              <h1 className="text-[50px]">Enduringly Stylish Materials</h1>
            </div>
            <div
              data-aos-duration="3000"
              data-aos="fade-up"
              className="flex  pt-5 gap-5 flex-wrap justify-center"
            >
              {data &&
                data?.suits
                  .slice(0, parseInt(currentVisibleCount as string))
                  .map((item: any, index: number) => {
                    return (
                      <div className="max-w-[30rem]  relative max-h-[48rem] group border border-transparent  duration-700">
                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                        <div
                          onClick={() => router.push(`suits/${item._id}`)}
                          className="relative max-h-[30rem] min-h-[30rem] h-full overflow-hidden cursor-pointer"
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
                              className="min-h-[30rem] max-h-[30rem] object-cover"
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
                              className="min-h-[30rem] max-h-[30rem]  object-cover"
                            />
                          </motion.div>
                        </div>
                        <div className="text-center relative  overflow-hidden w-full  pt-10 pb-20">
                          <h3 className="text-white text-[20px] cursor-pointer hover:text-[#BB9D7B] duration-700">
                            {item?.title}
                          </h3>
                          <p className="text-gray-500">${item?.price}.00</p>
                          <div className="w-full flex justify-center items-center">
                            <button
                              onClick={() => router.push(`suits/${item._id}`)}
                              className="text-white bg-[#BB9D7B] border border-transparent hover:border-[#BB9D7B] absolute bottom-[-1rem] opacity-0  group-hover:bottom-[1rem] group-hover:opacity-100 hover:bg-transparent duration-700  py-2 px-5 mt-2"
                            >
                              Select Options
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={handleViewMore}
                className="text-white flex  bg-[#BB9D7B] border border-transparent hover:border-[#BB9D7B]  group-hover:bottom-[1rem] group-hover:opacity-100 hover:bg-transparent duration-700  py-2 px-5 mt-10"
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suitproducts;
