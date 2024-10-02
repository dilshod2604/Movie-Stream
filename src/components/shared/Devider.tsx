import React from "react";
import { twMerge } from "tailwind-merge";

type Orientation = "vertical" | "horizontal";
interface DeviderProps {
  className?: string;
  type: Orientation;
  height: string;
  width: string;
}
const Devider: React.FC<DeviderProps> = ({
  className,
  height,
  type,
  width,
}) => {
  return (
    <div
      className={twMerge(
        `bg-neutral-400 h-[${height}px] w-[${width}px]  rotate-${
          type === "vertical" ? "90" : "0"
        }`,
        className
      )}
    ></div>
  );
};

export default Devider;
