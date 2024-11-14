import BasketLogo from "@/app/_assets/BasketLogo";
import CargoLogo from "@/app/_assets/CargoLogo";
import HeadPhoneLogo from "@/app/_assets/HeadPhoneLogo";
import TruckLogo from "@/app/_assets/TruckLogo";
import React from "react";

type ShippingInfo = {
  id: number;
  title: string;
  description: string;
  Logo: any;
};

const shippingData: ShippingInfo[] = [
  {
    id: 1,
    title: "SHIPPING",
    description: "Free Shipping World Wide",
    Logo: <TruckLogo />,
  },
  {
    id: 2,
    title: "Hassle Free",
    description: "Customer Support",
    Logo: <HeadPhoneLogo />,
  },
  {
    id: 3,
    title: "30 DAYS",
    description: "Free & Easy Returns",
    Logo: <CargoLogo />,
  },
  {
    id: 4,
    title: "Secured",
    description: "Quick Check Out Process",
    Logo: <BasketLogo />,
  },
];

const ServicesHome = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-[1440px] mx-auto">
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center md:justify-between items-center gap-10"
        >
          {shippingData.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="flex items-center gap-3">
                {item.Logo}
                <div className="flex flex-col text-white">
                  <h2 className="text-[14px]">{item.title}</h2>
                  <h1 className="text-[22px] max-w-[150px] font-medium">
                    {item.description}
                  </h1>
                </div>
              </div>
              {index < shippingData.length - 1 && (
                <div className="flex-grow hidden md:block">
                  <hr className="border-t-2 border-white" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
