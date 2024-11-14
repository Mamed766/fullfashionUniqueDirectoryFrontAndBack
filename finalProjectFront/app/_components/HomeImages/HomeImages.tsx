import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";

interface Post {
  image: string;
  description: string;
  date: string;
}

const posts: Post[] = [
  {
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-2.webp",
    description: "Lorem ipsum dolor sit amet maxime.",
    date: "August 04, 2022",
  },
  {
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-3.webp",
    description: "Adipisicing elit. Dolor sit amet maxime Nemo",
    date: "November 20, 2023",
  },
  {
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-5.webp",
    description: "Adipisicing elit. Nemo, facilis.",
    date: "December 9, 2005",
  },
  {
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-4.webp",
    description: "Adipisicing elit. Nemo, facilis.",
    date: "October 14, 2022",
  },
  {
    image:
      "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-instagram-image-1.webp",
    description: "Adipisicing elit. Nemo, facilis.",
    date: "September 12, 2026",
  },
];

const HomeImages = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        loop={true}
        watchOverflow={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="homeimageSwiper cursor-grab"
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="relative group w-full h-[40vh] overflow-hidden">
              <Image
                alt=""
                src={post.image}
                layout="fill"
                className="object-cover group-hover:scale-110 duration-700"
              />
              <div className="absolute px-2 opacity-0 group-hover:opacity-100 duration-700 text-white flex flex-col justify-center items-center gap-10 bottom-0 w-full h-full bg-black/70">
                <p className="max-w-[200px] text-center">{post.description}</p>
                <FaInstagram className="text-[30px]" />
                <p>{post.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeImages;
