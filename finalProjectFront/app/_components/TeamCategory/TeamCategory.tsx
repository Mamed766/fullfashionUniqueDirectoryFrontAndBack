import ShopLogo from "@/app/_assets/ShopLogo";
import Image from "next/image";
import React from "react";
import { FaApple, FaPlay, FaWindows } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const TeamCategory = () => {
  return (
    <div>
      <div className="bg-black px-2 pt-10">
        <div className="max-w-[1500px] flex flex-wrap md:flex-nowrap justify-between   mx-auto">
          <div>
            <div>
              <Image
                alt=""
                src={
                  "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/rating-image-1a.webp"
                }
                height={100}
                width={200}
              />
            </div>

            <div className="text-white flex flex-col gap-3">
              <h2 className="text-[20px] font-medium mt-3">
                Front line Clothing
              </h2>
              <p className="max-w-[260px] ">
                Odio euismod lacinia at quis risus sed vulputate. Integer enim
                neque volutpat.
              </p>
              <div className="max-w-[300px] gap-2 flex flex-wrap">
                <button className="border px-7 py-1 border-[#BB9D7B] hover:bg-[#BB9D7B] duration-700 bg-transparent">
                  Blazers
                </button>
                <button className="border px-7 py-1 border-[#BB9D7B] hover:bg-[#BB9D7B] duration-700 bg-transparent">
                  Sports Bra
                </button>
                <button className="border px-7 py-1 border-[#BB9D7B] hover:bg-[#BB9D7B] duration-700 bg-transparent">
                  Suits
                </button>
                <button className="border px-7 py-1 border-[#BB9D7B] hover:bg-[#BB9D7B] duration-700 bg-transparent">
                  Leggings
                </button>
                <button className="border px-7 py-1 border-[#BB9D7B] hover:bg-[#BB9D7B] duration-700 bg-transparent">
                  Thight
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[50px] text-white md:text-center font-medium max-w-[800px]">
              Outstanding Tailoring By Our Talented Team Of Designers And
              Tailors
            </h1>

            <button className="bg-[#BB9D7B] border border-[#BB9D7B] hover:bg-transparent duration-500 mt-5 text-[14px] font-medium px-5 py-2 text-white ">
              BOOK YOUR DESIGNER
            </button>
          </div>
          <div>
            <div className="flex items-center ">
              <div className="bg-white cursor-pointer w-10 h-10 flex justify-center items-center px-2 rounded-full">
                <FaPlay className="text-[10px]" />
              </div>
              <ShopLogo />
            </div>
            <div className="text-white mt-5">
              <h1 className="text-[20px] font-medium">
                Daily Workout Programs
              </h1>
              <p className="max-w-[280px] mt-2">
                Viverra ipsum nunc aliquet bibendum enim facilisis gravi entum
                nibh tellus molestie
              </p>
            </div>
            <div className="mt-2 border-white/20 border-t-[1px]">
              <div className="flex mt-5 gap-2">
                <button className="bg-[#BB9D7B] hover:bg-transparent duration-500 text-white text-[14px] font-medium px-2 py-2 rounded-full">
                  EXPLORE NOW
                </button>

                <div className="flex ">
                  <div className="bg-[#BB9D7B] w-10 h-10 flex  items-center justify-center px-2 py-2 rounded-full">
                    <FaWindows className="text-white" />
                  </div>
                  <div className="bg-[#BB9D7B] w-10 h-10 border flex  items-center justify-center  border-black px-2 py-2 rounded-full -ml-1">
                    <FaApple className="text-white" />
                  </div>
                  <div className="bg-[#BB9D7B] w-10 h-10 px-2 py-2 flex  items-center justify-center  border border-black rounded-full  -ml-1">
                    <IoLogoGooglePlaystore className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            alt=""
            src={
              "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/team-1.webp"
            }
            width={1000}
            height={1000}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCategory;
