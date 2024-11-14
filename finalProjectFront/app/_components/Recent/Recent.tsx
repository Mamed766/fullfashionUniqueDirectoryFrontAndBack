import { useRequest } from "@/app/_http/axiosFetcher";
import Loading from "@/app/loading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Recent = () => {
  const blogsStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  const router = useRouter();

  const { data, isLoading, error } = useRequest("news", {
    method: "GET",
    module: "newsApi",
  });

  return (
    <div className="py-[10rem]" style={blogsStyle}>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-60 z-10 w-full h-full"></div>

      <div
        data-aos="fade-right"
        className="flex relative z-20 text-white justify-center items-center flex-col gap-2"
      >
        <h2 className="text-[14px]">RECENT BLOGS</h2>
        <h1 className="text-[50px] font-medium">News & Blogs</h1>
      </div>
      <div>
        <div className="flex relative z-20 pt-10 max-w-[1440px] justify-center mx-auto  flex-wrap   gap-20">
          {isLoading ? (
            <Loading />
          ) : (
            data &&
            data?.news.slice(0, 3).map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="relative  cursor-pointer min-w-[26rem] group max-w-[26rem] max-h-[25rem] min-h-[25rem]  bg-transparent"
                >
                  <div className="relative group min-w-[26rem] max-w-[26rem] max-h-[22rem] min-h-[20rem] overflow-hidden">
                    <div className="max-w-[35rem]  overflow-hidden">
                      <Image
                        alt="News Image"
                        src={`http://localhost:3001/${item?.image}`}
                        height={1000}
                        width={1000}
                        quality={100}
                        objectFit="cover"
                        onClick={() => router.push(`news/${item?._id}`)}
                        className="object-cover max-h-[16rem] min-h-[16rem] absolute scale-110 transition-transform duration-500 ease-in-out  group-hover:translate-x-[5%]"
                      />
                    </div>
                  </div>
                  <div
                    onClick={() => router.push(`news/${item?._id}`)}
                    className="absolute flex flex-col gap-2 justify-center w-[300px] min-h-[15rem] max-h-[15rem] group-hover:w-full group-hover:bg-[#23201E] group-hover:text-white bottom-[-3rem] right-0 py-10 px-10 bg-white transition-all duration-500 ease-in-out "
                  >
                    <h2 className="group-hover:text-[#BB9D7B] duration-700 ">
                      {item?.createAt.slice(0, 10)}
                    </h2>
                    <h2 className="text-[25px] hover:text-[#BB9D7B] duration-700">
                      {item?.title}
                    </h2>
                    <div>
                      <button className="border hover:bg-black duration-700 border-black group-hover:text-[#BB9D7B] group-hover:border-[#BB9D7B] px-10 py-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Recent;
