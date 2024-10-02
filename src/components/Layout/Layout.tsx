import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
interface LayoutProps {
  children: ReactNode;
}
const LayoutSite: React.FC<LayoutProps> = ({ children }) => {
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
