"use client";
import React from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import FaqAccardionTop from "../_components/FaqAccardionTop/FaqAccardionTop";
import FaqAccardionBottom from "../_components/FaqAccardionBottom/FaqAccardionBottom";

const page = () => {
  return (
    <div>
      <div className="pt-16">
        <Breadcrump bread1="Home" title="FAQ" />
      </div>
      <div className="bg-black py-20">
        <div className="max-w-[1500px] flex flex-col gap-20 px-4 md:px-10 mx-auto">
          <FaqAccardionTop />
          <FaqAccardionBottom />
        </div>
      </div>
    </div>
  );
};

export default page;
