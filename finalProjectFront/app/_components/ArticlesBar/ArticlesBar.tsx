import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

type NewsData = {
  id: number;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  date: string;
  title: string;
};

type ImageData = {
  src: string;
};

const images: ImageData[] = [
  {
    src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-1.webp",
  },
  {
    src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-2.webp",
  },
  {
    src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-3.webp",
  },
  {
    src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-4.webp",
  },
  {
    src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-5.webp",
  },
  {
    src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/insta-6.webp",
  },
];
const newsItems: NewsData[] = [
  {
    id: 1,
    image: {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-2-150x150.webp",
      alt: "Blog Image 1",
      height: 100,
      width: 100,
    },
    date: "OCT 19",
    title: "What & How To Pack For Your Workout?",
  },
  {
    id: 2,
    image: {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-1-150x150.webp",
      alt: "Blog Image 2",
      height: 100,
      width: 100,
    },
    date: "OCT 19",
    title: "Week End Fun Exercises To Burn Calories ",
  },
  {
    id: 3,
    image: {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-10-150x150.webp",
      alt: "Blog Image 2",
      height: 100,
      width: 100,
    },
    date: "OCT 19",
    title: "7 Different Types And Styles Of Blazers ",
  },
  {
    id: 4,
    image: {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-11-150x150.webp",
      alt: "Blog Image 2",
      height: 100,
      width: 100,
    },
    date: "OCT 19",
    title: "List Of On-trend Classic Tweed Women Blazers",
  },
];

const ArticlesBar = () => {
  return (
    <div className="">
      {" "}
      <div className="bg-[#23201E]  max-w-[330px] py-10 px-14">
        <div className="flex justify-between items-center gap-2 border-b-[1px] border-[#B18D73]">
          <input
            type="search"
            placeholder="Enter keyword"
            className="border-none outline-none bg-transparent text-[#B18D73] placeholder:text-[#B18D73]"
          />
          <FaSearch className="text-[#B18D73]" />
        </div>
        <div>
          <h2 className="text-white text-[30px] pt-5 pb-5">
            Recent Articles :
          </h2>
          {newsItems.map((item) => (
            <div key={item.id} className="flex gap-3 ">
              <div className="max-w-[80px] min-w-[80px] max-h-[100px] min-h-[100px]">
                <Image
                  alt={item.image.alt}
                  src={item.image.src}
                  height={item.image.height}
                  width={item.image.width}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[#B18D73] ">{item.date}</h2>
                <p className="max-w-[300px] text-[12px] text-white cursor-pointer hover:text-[#B18D73] duration-700">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-[30px] text-white">Tags :</h2>
          <div className="flex flex-wrap gap-2 pt-5">
            <button className="bg-gray-700 px-2 py-1 hover:bg-[#B18D73] duration-700 text-white">
              BLAZER
            </button>
            <button className="bg-gray-700 px-2 py-1 hover:bg-[#B18D73] duration-700 text-white">
              FITNESS WEAR
            </button>
            <button className="bg-gray-700 px-2 py-1 hover:bg-[#B18D73] duration-700 text-white">
              JEWELRY
            </button>
            <button className="bg-gray-700 px-2 py-1 hover:bg-[#B18D73] duration-700 text-white">
              WATCH
            </button>
          </div>
        </div>
        <div>
          <h2>Instagram :</h2>
          <div className="flex flex-wrap gap-2">
            {images.map((image, index) => (
              <div key={index} className="max-w-[80px] min-w-[80px]">
                <Image alt="" src={image.src} width={100} height={100} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesBar;
