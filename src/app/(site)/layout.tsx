import LayoutSite from "@/components/Layout/Layout";
import SessionProvider from "@/providers/SessionProvider";
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
 
        <LayoutSite>{children}</LayoutSite>
    
    </div>
  );
};

export default Layout;
