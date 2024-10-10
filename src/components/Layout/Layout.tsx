"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Preloader from "../Preloader/Preloader";
interface LayoutProps {
  children: ReactNode;
}

const LayoutSite: React.FC<LayoutProps> = ({ children }) => {
  const [preloader, setPreloader] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  }, []); 
  if (preloader) {
    return <Preloader />;
  }
  return (
    <div className="flex flex-col justify-between min-h-[100vh] ">
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSite;
