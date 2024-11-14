"use client";
import ArticlesBar from "@/app/_components/ArticlesBar/ArticlesBar";
import Breadcrump from "@/app/_components/breadcrump/Breadcrump";
import { useRequest } from "@/app/_http/axiosFetcher";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import "../news.scss";
import InterestingStar from "@/app/_assets/InterestingStar";
import ReviewForm from "@/app/_components/Review/Review";

interface InterestingItem {
  id: number;
  text: string;
}

const interestingData1: InterestingItem[] = [
  { id: 1, text: "Cras adipiscing enim eu turpis egestas pretium aenean" },
  { id: 2, text: "Egestas egestas fringilla phasellus faucibus scelerisque" },
  { id: 3, text: "Morbi enim nunc faucibus a pellentesque sit amet porttios" },
  { id: 4, text: "Elementum pulvinar etiam non quam lacusets suspendisse" },
  {
    id: 5,
    text: "Blandit libero volutpat sed egestas sed cras ornare arcu dui",
  },
];

const interestingData2: InterestingItem[] = [
  { id: 1, text: "Ullamcorper morbi tincidunt ornare massa eget egestas" },
  { id: 2, text: "Amet aliquam id diam maecenas ultricies mi eget mauris" },
  {
    id: 3,
    text: "Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare",
  },
  {
    id: 4,
    text: "Egestas egestas fringilla phasellus faucibus scelerisque eleifend",
  },
  {
    id: 5,
    text: "Morbi enim nunc faucibus anon pellentesque sit amet porttitor",
  },
];

const page = () => {
  const newsStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-testimonial-background-image-2.jpg')",
    position: "relative",
  };

  const { id } = useParams();

  const { data, isLoading, error } = useRequest(
    () => (id ? `news/${id}` : null),
    {
      method: "GET",
      module: "suitApi",
    }
  );

  console.log(data);

  return (
    <>
      <div>
        <div className="pt-16">
          <Breadcrump bread1="Home" title={data && data?.newsItem.title} />
        </div>
        <div className="bg-black">
          <div className="flex max-w-[1500px] px-10 flex-wrap gap-3 mx-auto justify-between py-10">
            <div className="flex flex-col">
              <div className="max-h-[500px] min-w-full overflow-hidden sm:max-w-[768px] ">
                <Image
                  alt=""
                  width={1150}
                  height={500}
                  objectFit="cover"
                  className="object-cover w-full h-full"
                  src={`http://localhost:3001/${data?.newsItem.image}`}
                />
              </div>
              <div className="flex justify-between items-center pt-10">
                <div>
                  {" "}
                  <p className="text-white">
                    {data && data?.newsItem.createAt.slice(0, 10)} | 1 Comment
                  </p>{" "}
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    alt=""
                    src={
                      "https://secure.gravatar.com/avatar/d2870e384d55bb5b77095b72c915a47a?s=40&d=mm&r=g"
                    }
                    className="rounded-full"
                    height={40}
                    width={40}
                  />

                  <p className="text-white">Written by Admin</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-white pt-5 max-w-[1050px] text-[32px]">
                  {data && data?.newsItem?.desc1}
                </h2>

                <p className="text-white max-w-[1050px]">
                  {data && data?.newsItem?.desc2}
                </p>
              </div>
              <div className="flex pt-5 flex-col gap-2">
                <h2 className="max-w-[1050px] text-white text-[32px]">
                  Vel Turpis Nunc Eget Torem:
                </h2>
                <p className="text-white max-w-[1050px]">
                  Vivamus auctor turpis vel dignissim licitudin quisque eget
                  Arstibulum in ipsum velit. Aliquam libero sem asfds asf,
                  rutrum eu scelerisque ut, vehicula a erat. Phasellus ac sem
                  sed erat pos se quam dignissim. Mauris feugiat, nisi nec
                  dapibuasas a gas dictum, ligula nulla gravida ante, non
                  aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus justo,
                  nec mattis risus auris consequat viverra sapien id lobortis.
                </p>
              </div>
              <div className="flex pt-5 flex-wrap  gap-10 max-w-[1050px]">
                <Image
                  alt=""
                  src={
                    "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-detail-one-2.webp"
                  }
                  height={100}
                  width={500}
                />
                <Image
                  alt=""
                  src={
                    "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/blog-detail-one-3.webp"
                  }
                  height={100}
                  width={500}
                />
              </div>
              <div>
                <p className="max-w-[1050px] text-white pt-5">
                  Aliquam libero sem asfds asf, rutrum eu scelerisque ut,
                  vehicula a erat. Vestibulum in ipsum velit. Phasellus ac sem
                  sed erat pos se quam dignissim. Mauris feugiat, nisi nec
                  dapibuasas a gas dictum, ligula nulla gravida ante, non
                  aliquet odio elit ac orci. Curabi tinc Nunc eu rhoncus justo,
                  elit ac orci. Curabi tinc Nunc eu rhoncus justo,
                </p>
              </div>

              <div className="pt-5">
                <h2 className="text-[32px] text-white">
                  Cras Tincidunt Lobort:
                </h2>
                <div className="flex flex-wrap justify-between">
                  <div>
                    <ul className="flex flex-col gap-2">
                      {interestingData1.map((item) => (
                        <li key={item.id} className="flex gap-3 items-center">
                          <InterestingStar />
                          <p className="text-white">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-2">
                      {interestingData2.map((item) => (
                        <li key={item.id} className="flex gap-3 items-center">
                          <InterestingStar />
                          <p className="text-white">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div style={newsStyle} className="py-16 mt-10">
                <div className="absolute inset-0 bg-[#34312E] opacity-60"></div>
                <div className="relative max-w-[800px] mx-auto flex flex-col z-20">
                  <h2 className="flex   text-white">
                    Duis sit ametfaucibus porta.Quisque eget risus maximus erat
                    porttitor tincidunt vitae ac nulla. Ut ut augue id ex
                    vehicula fermentum quis sit amet felis.
                  </h2>
                  <ul className=" flex justify-end text-white list-disc">
                    <li className="text-[18px]">Joe Smith</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sticky self-start top-20">
              <ArticlesBar />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-20">
        <div className="max-w-[1440px] px-5 md:px-2 mx-auto">
          <ReviewForm />
        </div>
      </div>
    </>
  );
};

export default page;
