import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface ModalProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isOpen: boolean;
}
const Modal: React.FC<ModalProps> = ({
  children,
  className,
  onClick,
  isOpen,
}) => {
  const style = () => {
    return isOpen === true
      ? "w-[200px] h-auto bg-neutral-800 rounded-md p-4 absolute transition duration-500 ease-in-out"
      : "w-[200px] h-auto bg-neutral-800 rounded-md p-4 absolute opacity-0 transition duration-700 ease-in-out";
  };
  return (
    <div className={twMerge(style(), className)} onClick={onClick}>
      <div className="flex flex-col  ">{children}</div>
    </div>
  );
};

export default Modal;
