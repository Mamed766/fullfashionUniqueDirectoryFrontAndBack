import { useState } from "react";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import {
  homeItems,
  shopItems,
  pageItems,
  newsItems,
} from "@/app/_static/mockdb";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const renderItems = (items: { label: string; link: string }[]) => {
    return (
      <nav className="flex flex-col gap-2 pl-5">
        {items.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className="w-full py-3 hover:text-black cursor-pointer">
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    );
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-50 flex flex-col bg-clip-border bg-[#BB9D7B] text-white h-screen w-full max-w-[20rem] shadow-xl shadow-blue-gray-900/5 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {!activeMenu ? (
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
            <div className="flex  w-full items-end justify-end text-[25px]">
              <IoMdClose className="cursor-pointer" onClick={onClose} />
            </div>
            <div
              role="button"
              onClick={() => toggleMenu("home")}
              className="flex items-center w-full p-3 rounded-lg text-start duration-700 hover:text-black leading-tight transition-all  hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80  focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="w-full py-3">Home</div>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
            <div
              role="button"
              onClick={() => toggleMenu("pages")}
              className="flex items-center w-full p-3 rounded-lg text-start duration-700 hover:text-black leading-tight transition-all  hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80  focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="w-full py-3">Pages</div>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start duration-700 hover:text-black leading-tight transition-all  hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80  focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link href={"/gift-card"} className="w-full py-3">
                Gift Card
              </Link>
              <div className="grid place-items-center mr-4"></div>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start duration-700 hover:text-black leading-tight transition-all  hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80  focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link href={"/gallery"} className="w-full py-3">
                Gallery
              </Link>
              <div className="grid place-items-center mr-4"></div>
            </div>
            <div
              role="button"
              onClick={() => toggleMenu("shop")}
              className="flex items-center w-full p-3 rounded-lg text-start duration-700 hover:text-black leading-tight transition-all  hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80  focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="w-full py-3">Shop</div>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>

            <div
              role="button"
              onClick={() => toggleMenu("news")}
              className="flex items-center w-full p-3 rounded-lg text-start duration-700 hover:text-black leading-tight transition-all  hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80  focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="w-full py-3">News</div>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start duration-700 hover:text-black leading-tight transition-all  hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80  focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link href={"/contact"} className="w-full py-3">
                Contact
              </Link>
              <div className="grid place-items-center mr-4"></div>
            </div>
          </nav>
        ) : (
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
            <div
              role="button"
              onClick={() => setActiveMenu(null)}
              className="flex items-center w-full p-3 rounded-lg text-start duration-700 hover:text-black leading-tight transition-all  hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80  focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <FaAngleLeft />
              </div>
              <div className="w-full py-3">Back to Menu</div>
            </div>

            {activeMenu === "home" && renderItems(homeItems)}
            {activeMenu === "shop" && renderItems(shopItems)}
            {activeMenu === "pages" && renderItems(pageItems)}
            {activeMenu === "news" && renderItems(newsItems)}
          </nav>
        )}
      </div>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed top-0 z-40 h-full w-full bg-black/70"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
