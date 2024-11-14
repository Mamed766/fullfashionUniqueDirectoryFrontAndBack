import React from "react";
import { FaPlay } from "react-icons/fa";
import SimpleParallax from "simple-parallax-js";

const HomePhoto = () => {
  const brandStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <div style={brandStyle} className="py-20">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80 z-10 w-full h-full"></div>
      <div className="relative h-[50vh]  bg-black z-20 w-full flex items-center justify-center group">
        <SimpleParallax
          orientation="right"
          delay={1}
          transition="cubic-bezier(0,0,0,1)"
        >
          <img
            src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/video-bg-scaled.jpg"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          />
        </SimpleParallax>
        <div className="absolute flex justify-center scale-50 p-10 border opacity-0 group-hover:opacity-100 group-hover:scale-100 cursor-pointer duration-700 rounded-full">
          <FaPlay className="text-white text-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default HomePhoto;
