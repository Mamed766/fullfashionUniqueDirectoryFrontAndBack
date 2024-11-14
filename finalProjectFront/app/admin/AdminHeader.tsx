"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const AdminHeader = ({ handleSideBar }: any) => {
  const router = useRouter();

  return (
    <>
      <div className="fixed top-0 w-full z-20  py-7 text-white  bg-[#201D1B]">
        <div className="max-w-screen-xl mx-auto  ">
          <div className="flex items-center px-10 justify-between">
            <div className="text-[20px] font-medium">ADMIN</div>
            <div onClick={handleSideBar} className=" cursor-pointer">
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
