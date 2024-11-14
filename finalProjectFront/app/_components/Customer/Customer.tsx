import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface Testimonial {
  id: number;
  name: string;
  imageUrl: string;
  stars: number;
  feedback: string;
}

const Customer = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Floriana Inga",
      imageUrl:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-2.webp",
      stars: 5,
      feedback:
        "Ultrices eros in cursus turpis. Aliquet enim tortor at auctor urna. Non blandit massa enim nec dui nunc mattis Est pellentesque.",
    },
    {
      id: 2,
      name: "John Doe",
      imageUrl:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-3.webp",
      stars: 4,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis.",
    },
    {
      id: 3,
      name: "Jane Smith",
      imageUrl:
        "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-1.webp",
      stars: 5,
      feedback:
        "Pharetra pharetra massa massa ultricies mi. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc id.",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <>
        {Array.from({ length: 5 }, (_, index) =>
          index < rating ? (
            <FaStar key={index} className="text-[#FFC300]" />
          ) : (
            <FaRegStar key={index} className="text-gray-400" />
          )
        )}
      </>
    );
  };

  return (
    <div className=" bg-black ">
      <div className="w-full max-w-[1540px] mx-auto  py-20 flex flex-col md:flex-row gap-8 items-start justify-between px-4 md:px-0">
        <div data-aos="fade-right" className="w-full pl-2 text-white md:w-1/3">
          <h2 className="text-[14px] font-semibold mb-2">Review & Ratings</h2>
          <h1 className="text-[40px] max-w-[400px] font-bold mb-4">
            Positive Customers Feedback
          </h1>
          <p className="text-base text-[16px] max-w-[450px]">
            Pretium lectus quam id leo in. In massa tempor nec feugiat nisl
            pretium fusce. Libero enim sed faucibus turpis in eu mi bibendum
            neque. Eget duis at tellus at urna.
          </p>
        </div>

        <div data-aos="flip-down" className="w-full md:w-2/3">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            className="customerSwiper"
          >
            {testimonials &&
              testimonials.map((item: any, index: number) => {
                return (
                  <SwiperSlide className="px-10 py-10 group relative cursor-grab min-h-[17rem] max-h-[17rem] !bg-[#23201E]">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-[#BB9D7B] z-20 transition-all duration-700 group-hover:h-full"></span>
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-5">
                        <div className="max-w-[100px] max-h-[100px] rounded-full overflow-hidden">
                          <Image
                            alt=""
                            src={`${item?.imageUrl}`}
                            className="object-cover"
                            height={1000}
                            width={1000}
                            quality={100}
                          />
                        </div>
                        <div className="">
                          <h2 className="text-white text-start">
                            {item?.name}
                          </h2>
                          <div className="flex gap-2">
                            {renderStars(item?.stars)}
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-white text-[16px] text-start">
                          {item?.feedback}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Customer;
