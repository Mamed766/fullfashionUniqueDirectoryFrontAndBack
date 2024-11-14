"use client";
import React, { useState, useEffect } from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import Image from "next/image";
import axios from "axios";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ArticlesBar from "../_components/ArticlesBar/ArticlesBar";
import "./news.scss";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import ReviewForm from "../_components/Review/Review";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState<any[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<any>(null);
  const limit = 8;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchNews = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/v2/news", {
        params: {
          page,
          limit,
        },
      });
      setNewsData(response.data.news);
      setPaginationInfo(response.data.pagination);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="pt-16 bg-black">
        <Breadcrump bread1="Home" title="News" />
        <div className="max-w-[1440px] mx-auto ">
          <div className="py-20 flex flexwrapbar flexjustifybar justify-between  justifybar gap-10 px-5 bg-black">
            <div className="flex newscenter flex-wrap sm:gap-20 md:gap-16 gap-20">
              {loading ? (
                <Loading />
              ) : (
                newsData.map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="relative  cursor-pointer min-w-[30rem] group max-w-[30rem] max-h-[25rem] min-h-[25rem]  bg-black"
                    >
                      <div className="relative group min-w-[30rem] max-w-[30rem] max-h-[22rem] min-h-[20rem] overflow-hidden">
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

            <div className="marginbar  sticky top-20 self-start">
              <ArticlesBar />
            </div>
          </div>

          {paginationInfo && paginationInfo.totalPages > 1 && (
            <div className="flex justify-center mt-6 pb-10">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 mx-1 text-white rounded disabled:opacity-50"
              >
                <FaAngleLeft />
              </button>
              {Array.from({ length: paginationInfo.totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 mx-1 ${
                    currentPage === index + 1
                      ? "bg-white-500 border-2 text-white border-[#BB9D7B] rounded-full bg-[#BB9D7B]"
                      : " border border-[#BB9D7B] text-white rounded-full "
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === paginationInfo.totalPages}
                className="px-3 py-1 mx-1 bg-white-500 text-white disabled:opacity-50"
              >
                <FaAngleRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default News;
