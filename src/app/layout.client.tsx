import { FC, ReactNode } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "../redux/api/index";

interface LayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default LayoutClient;
