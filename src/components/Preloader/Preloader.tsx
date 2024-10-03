import React from "react";
import "./style.css";
import { div } from "framer-motion/client";
const Preloader = () => {
  return (
    <div id="preloader">
      <div id="loader"></div>
    </div>
  );
};

export default Preloader;
