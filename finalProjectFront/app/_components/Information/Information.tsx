import Image from "next/image";
import React from "react";

const Information = () => {
  const informationStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  return (
    <div className="relative" style={informationStyle}>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-60 z-10 w-full h-full"></div>

      <div
        data-aos="flip-down"
        data-aos-duration="6000"
        className="flex overflow-hidden flex-wrap z-20 relative justify-between"
      >
        <div className="relative z-20 w-full md:w-1/2 lg:w-1/3">
          <Image
            alt=""
            src={
              "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-section-three-left-image-1.jpg"
            }
            height={1000}
            width={500}
            className="h-auto md:h-[50rem] w-full object-cover pt-2"
          />
        </div>

        <div className="flex flex-col relative z-20 justify-center w-full md:w-1/2 lg:w-1/3 px-5">
          <div>
            <h2 className="text-white text-[14px]">COOL LOOK</h2>
            <p className="text-white font-medium text-[30px] md:text-[40px] max-w-[500px]">
              We comprehend your style needs and create wonderful clothing
            </p>
          </div>
          <div className="mt-5">
            <div className="flex flex-wrap">
              <div className="flex flex-col items-center bg-black/30 px-5 py-5 md:px-10 md:py-7 w-1/2">
                <h2 className="text-[55px] md:text-[85px] text-[#BB9D7B] hover:text-white duration-700">
                  49+
                </h2>
                <p className="text-[14px] md:text-[18px] text-white hover:text-[#BB9D7B] duration-700 cursor-pointer">
                  TAILORS
                </p>
              </div>
              <div className="flex flex-col items-center px-5 py-5 md:px-10 md:py-7 w-1/2">
                <h2 className="text-[55px] md:text-[85px] text-[#BB9D7B] hover:text-white duration-700">
                  21M
                </h2>
                <p className="text-[14px] md:text-[18px] text-white hover:text-[#BB9D7B] duration-700 cursor-pointer">
                  REVIEWS
                </p>
              </div>
              <div className="flex flex-col items-center px-5 py-5 md:px-10 md:py-7 w-1/2">
                <h2 className="text-[55px] md:text-[85px] text-[#BB9D7B] hover:text-white duration-700">
                  56K
                </h2>
                <p className="text-[14px] md:text-[18px] text-white hover:text-[#BB9D7B] duration-700 cursor-pointer">
                  BOOKINGS
                </p>
              </div>
              <div className="flex flex-col items-center bg-black/30 px-5 py-5 md:px-10 md:py-7 w-1/2">
                <h2 className="text-[55px] md:text-[85px] text-[#BB9D7B] hover:text-white duration-700">
                  774+
                </h2>
                <p className="text-[14px] md:text-[18px] text-white hover:text-[#BB9D7B] duration-700 cursor-pointer">
                  CLIENTS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-center w-full md:w-1/2 lg:w-1/3 px-5">
          <div className="relative z-20 flex flex-col">
            <p className="max-w-[500px] text-[14px] md:text-[16px] text-white">
              Nulla pellentesque dignissim enim sit amet venenatis urna. Laoreet
              non curabitur gravida arcu ac tortor dignissim convallis aenean.
              Et netus et malesuada fames enim diam.
            </p>
            <div className="flex items-center gap-7 mt-4">
              <div className="text-white flex bg-[#BB9D7B] px-5 py-2 border border-[#BB9D7B] hover:bg-transparent duration-300">
                <button>SHOP THE SALES</button>
              </div>
              <div>
                <Image
                  alt=""
                  src={
                    "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/rating-image-1a.png"
                  }
                  height={100}
                  width={200}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="relative pt-16 z-20">
            <Image
              alt=""
              src={
                "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-section-three-right-image-1.jpg"
              }
              height={400}
              width={300}
              quality={100}
              className="h-auto w-full md:w-[40rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
