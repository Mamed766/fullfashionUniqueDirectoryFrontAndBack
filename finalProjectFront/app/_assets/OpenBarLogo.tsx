import React from "react";
import "./openbar.scss";

const OpenBarLogo = () => {
  return (
    <i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 100 100"
        fill="none"
        stroke="white"
        strokeWidth="5"
      >
        <circle cx="35" cy="35" r="10" />
        <circle cx="65" cy="35" r="10" />
        <circle cx="35" cy="65" r="10" />
        <circle cx="65" cy="65" r="10" />
      </svg>
    </i>
  );
};

export default OpenBarLogo;
