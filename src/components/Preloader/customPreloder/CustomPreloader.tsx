import React from "react";
import "./style.css";
import { div } from "framer-motion/client";
const CustomPreloader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <svg
        style={{ width: "200px", height: "auto", color: "#45d6b5" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 18 Q2 18 2 14, T2 10 Q2 6 6 6, M6 6 8 6, M13 18 15 18 Q19 18 19 14,T19 10 Q19 6 15 6"></path>
        <path d="M22 13 22 11" />
        <path d="M12 6 8 12 14 12 9 18">
          <animate
            attributeName="stroke"
            values="currentColor;yellow;yellow;"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dasharray"
            values="0,24;24,24;24,24"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            values="0;0;-24"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default CustomPreloader;
