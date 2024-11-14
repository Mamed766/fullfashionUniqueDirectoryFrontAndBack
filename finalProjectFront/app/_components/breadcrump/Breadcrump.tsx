"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Breadcrump = ({ title, bread1, bread2 }: any) => {
  const router = useRouter();
  const breadStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/breadcrumb-image.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <div className="relative py-20" style={breadStyle}>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80 z-10 w-full h-full"></div>
      <div className="relative z-20 flex flex-col items-center justify-center">
        <h2 className="text-[40px] text-white font-medium">{title}</h2>
        <ul>
          <li className="text-[16px] text-white  ">
            <span
              onClick={() =>
                router.push(
                  bread1.toLowerCase() === "home" ? "/" : bread1.toLowerCase()
                )
              }
              className="hover:text-[#BB9D7B] cursor-pointer duration-700"
            >
              {bread1}
            </span>{" "}
            / {title} {bread2 && `/ ${bread2}`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrump;
