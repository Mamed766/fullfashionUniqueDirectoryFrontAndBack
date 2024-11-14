"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import UserSidebar from "../Sidebar/UserSidebar";
import Sidebar from "../Sidebar/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isUserSideBarOpen, setUserIsSideBarOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const pathname = usePathname();
  const validRoutes = [
    "/",
    "/about",
    "/faq",
    "/team",
    "/updateprofile",
    "/track",
    "/products",
    "/login",
    "/register",
    "/gallery",
    "/shop",
    "/suits",
    "/wishlist",
    "/suits/:id",
    "/cart",
    "/news",
  ];

  // const noLayoutPages = [
  //   "/admin",
  //   "/admin/fashions",
  //   "/admin/suits",
  //   "/not-found",
  // ];

  const isSuitRouteWithId =
    pathname.startsWith("/suits/") && pathname.split("/").length === 3;
  const isNewsRouteWithId =
    pathname.startsWith("/news/") && pathname.split("/").length === 3;

  const shouldShowLayout =
    validRoutes.includes(pathname) || isSuitRouteWithId || isNewsRouteWithId;

  const handleUserSideBar = () => {
    setUserIsSideBarOpen((prev) => !prev);
  };

  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <>
      <RecoilRoot>
        <ChakraProvider>
          <div className="z-50">
            <Sidebar
              isOpen={isSideBarOpen}
              onClose={() => setIsSideBarOpen(false)}
            />
            <UserSidebar
              isOpen={isUserSideBarOpen}
              onClose={() => setUserIsSideBarOpen(false)}
            />
          </div>
          <div className="">
            {shouldShowLayout && (
              <Header
                handleSidebar={handleSideBar}
                handleUserSideBar={handleUserSideBar}
              />
            )}

            {children}

            {shouldShowLayout && <Footer />}
          </div>
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
};

export default Layout;
