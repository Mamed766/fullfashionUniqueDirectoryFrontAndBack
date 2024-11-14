"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import AdminHeader from "../AdminHeader";

interface LayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const noLayoutPages = [
    "/admin",
    "/",
    "/register",
    "/admin/fashions",
    "/admin/suits",
  ];
  const shouldShowLayout = !noLayoutPages.includes(pathname);

  return (
    <>
      <div className="z-50"></div>
      <div className="">
        {shouldShowLayout && <AdminHeader />}

        {children}
      </div>
    </>
  );
};

export default AdminLayout;
