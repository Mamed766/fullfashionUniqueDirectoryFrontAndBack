"use client";
import AddToCartLogo from "@/app/_assets/AddToCartLogo";
import OpenBarLogo from "@/app/_assets/OpenBarLogo";
import SearchLogo from "@/app/_assets/SearchLogo";
import Dropdown from "@/app/_components/Dropdown/Dropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  homeItems,
  newsItems,
  pageItems,
  shopItems,
} from "@/app/_static/mockdb";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { jwtDecode } from "jwt-decode";
import {
  Box,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
} from "@chakra-ui/react";

import "./header.scss";
import { deleteCookie, getCookie } from "cookies-next";
import { useRecoilValue } from "recoil";
import { cartQuantityState } from "@/app/atoms/CartState";
const Header = ({ handleUserSideBar, handleSidebar }: any) => {
  const [username, setUsername] = useState("Guest");
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const cartQuantity = useRecoilValue(cartQuantityState);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      const decoded: any = jwtDecode(token);
      setUsername(decoded.username);
    }
  }, [getCookie("token")]);

  const handleLogout = () => {
    deleteCookie("token");

    window.location.reload();
    router.push("/");
  };

  const linkClass = (path: string) =>
    pathname === path
      ? `relative text-[#BB9D7B] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#BB9D7B]`
      : `relative  hover:text-[#BB9D7B] duration-300  text-white after:content-[""] after:absolute   after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#BB9D7B] after:transition-all after:duration-300 hover:after:w-full`;

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSearch = () => {
    router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
    setIsModalOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
      setSearchQuery("");
      e.preventDefault();
    }
  };

  return (
    <div className="px-5 pb-5  pt-3 bg-black border-[1px]  border-gray-600 fixed z-30 w-full">
      <div className="bg-black flex items-center justify-between ">
        <div className="cursor-pointer">
          <Image
            alt=""
            src={
              "https://darkfashion.wpengine.com/wp-content/uploads/2023/09/Light-logo.svg"
            }
            height={36}
            width={183}
          />
        </div>
        <div className="header__mobile">
          <ul className="flex text-[14px] gap-7  mt-[15px]">
            <li className={`${linkClass("/")} relative group`}>
              <div
                onClick={() => handleNavigation("/")}
                className="cursor-pointer"
              >
                HOME
                <Dropdown items={homeItems} />
              </div>
            </li>
            <li className={`${linkClass("/pages")} relative group`}>
              <div
                onClick={() => handleNavigation("/pages")}
                className="cursor-pointer"
              >
                PAGES
                <Dropdown items={pageItems} />
              </div>
            </li>
            <li className={linkClass("/gift-card")}>
              <div
                onClick={() => handleNavigation("/gift-card")}
                className="cursor-pointer"
              >
                GIFT CARD
              </div>
            </li>
            <li className={linkClass("/gallery")}>
              <div
                onClick={() => handleNavigation("/gallery")}
                className="cursor-pointer"
              >
                GALLERY
              </div>
            </li>
            <li className={`${linkClass("/shop")} relative group`}>
              <div
                onClick={() => handleNavigation("/shop")}
                className="cursor-pointer"
              >
                SHOP
                <Dropdown items={shopItems} />
              </div>
            </li>
            <li className={`${linkClass("/news")} relative group`}>
              <div
                onClick={() => handleNavigation("/news")}
                className="cursor-pointer"
              >
                NEWS
                <Dropdown items={newsItems} />
              </div>
            </li>
            <li className={linkClass("/contact")}>
              <div
                onClick={() => handleNavigation("/contact")}
                className="cursor-pointer"
              >
                CONTACT
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center mt-2 gap-7">
            <div>
              <h1 className="text-white pl-2 usernametext flex flex-wrap">
                Welcome,
                {username}!
              </h1>
            </div>
            <div
              onClick={handleSearchClick}
              className="mr-2 cursor-pointer header__mobile"
            >
              <SearchLogo />
            </div>
            <div
              onClick={() => router.push("/cart")}
              className="cursor-pointer relative header__mobile"
            >
              <div className="w-5 h-5 rounded-full bg-[#BB9D7B] absolute right-[-10px] top-[-10px]  flex items-center  justify-center text-[10px] text-white">
                {cartQuantity}
              </div>
              <AddToCartLogo />
            </div>
            <div
              onClick={handleUserSideBar}
              className="pt-[0.5px] cursor-pointer header__mobile"
            >
              <OpenBarLogo />
            </div>
            {isClient && getCookie("token") && (
              <div>
                <IoMdLogOut
                  onClick={handleLogout}
                  className="text-white pt-[0.5px] hover:text-red-600 duration-700  cursor-pointer  text-[27px] flex items-center"
                />
              </div>
            )}
            <div
              onClick={handleSidebar}
              className="text-white header__xl text-[25px] cursor-pointer"
            >
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <Modal isOpen={isModalOpen} onClose={handleModalClose} isCentered>
          <ModalOverlay bg="black" />
          <ModalContent bg="black" p={10}>
            <Box>
              <Input
                placeholder="Search..."
                variant="unstyled"
                borderBottom="2px solid #BB9D7B"
                color="white"
                _placeholder={{ color: "gray.500" }}
                _focus={{ boxShadow: "none" }}
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
              />
            </Box>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
