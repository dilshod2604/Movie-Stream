import { buttons } from "@/constants/tools";
import { useSession } from "next-auth/react";
import React from "react";

const CircleButton = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-x-4">
      {buttons.map((button, index) => (
        <button className="flex items-center justify-center bg-indigo-900 p-4 rounded-full">
          <button.icon className="text-white" />
        </button>
      ))}
    </div>
  );
};

export default CircleButton;
