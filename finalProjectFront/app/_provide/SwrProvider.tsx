"use client";

import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { SWRConfig } from "swr";
import { ToastContainer } from "react-toastify";
import { defaultValues } from "../_swr/config";
import "aos/dist/aos.css";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig value={defaultValues}>
      <ToastContainer position="top-right" />
      {children}
    </SWRConfig>
  );
};
