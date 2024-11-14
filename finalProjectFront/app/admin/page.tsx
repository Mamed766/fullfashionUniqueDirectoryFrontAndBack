"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "./adminLayout/AdminLayout";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";

const page = () => {
  const brandStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://darkfashion.wpengine.com/wp-content/uploads/2023/09/section-bg-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  };

  const [username, setUsername] = useState("Guest");
  const [isClient, setIsClient] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      const decoded: any = jwtDecode(token);
      setUsername(decoded.username);
    }
  }, [getCookie("token")]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <div style={brandStyle} className="h-[100vh]">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-10 w-full h-full"></div>

      <div className=" relative z-30">
        <AdminLayout>
          <AdminSidebar isOpen={isSideBarOpen} onClose={handleSideBar} />
          <AdminHeader
            isSideBarOpen={isSideBarOpen}
            handleSideBar={handleSideBar}
          />
        </AdminLayout>
      </div>
      <div className="flex relative z-20 justify-center gap-2 items-center h-[100vh] text-white">
        <h1 className="text-[50px]"> Welcome, </h1>{" "}
        <h2 className="text-[50px]">
          {" "}
          {isClient && getCookie("token") && <div>{username}</div>}{" "}
        </h2>
      </div>
    </div>
  );
};

export default page;
