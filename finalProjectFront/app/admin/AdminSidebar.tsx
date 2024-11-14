"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const AdminSidebar = ({ isOpen, onClose }: any) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`fixed top-0 z-40 flex flex-col bg-clip-border text-white bg-[#BB9D7B]  h-screen w-full max-w-[20rem]  shadow-xl shadow-blue-gray-900/5 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div
                onClick={() => router.push("/admin/news")}
                className="w-full py-3"
              >
                News
              </div>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div
                onClick={() => router.push("/admin/suits")}
                className="w-full py-3"
              >
                Suits
              </div>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>

            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div
                onClick={() => router.push("/admin/fashions")}
                className="w-full py-3"
              >
                Fashions
              </div>

              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
          </nav>
        </nav>
      </div>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed top-0 z-30 h-full w-full bg-black/70"
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
