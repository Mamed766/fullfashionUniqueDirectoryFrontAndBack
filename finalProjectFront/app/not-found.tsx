import React from "react";
import Link from "next/link";

export default function NotFound() {
  const notfoundStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/themes/darkfashion/modules/404/assets/Images/404-image.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <div
      style={notfoundStyle}
      className="flex flex-col  items-center justify-center min-h-screen text-center"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#373435] opacity-80 z-10 w-full h-full"></div>

      <div className="relative flex flex-col justify-center items-center z-20">
        <h1 className="text-[202px] text-[#BB9D7B]">404</h1>
        <div className="flex flex-col justify-center items-center pb-[7rem]">
          <h2 className="text-[60px] text-white">Oops! That Page Not Found</h2>
          <p className="max-w-[600px] text-[18px] text-white">
            Proin non eros elementum, sagittis diam at, feugiat nunc. Ut velit
            arcu, posuere at neque quis, vestibulum vehicula dui. Praesent at
            felis ante. Cras sed ultricies risus. Nullam porta fermentum
            egestas. Praesent quis mauris ultrices.
          </p>
          <button className="bg-[#BB9D7B] hover:bg-transparent duration-700 mt-5 py-2 px-10">
            <Link className="text-white  " href={"/"}>
              Back to Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
