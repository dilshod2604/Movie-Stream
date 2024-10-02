"use lcient";
import React, { useState } from "react";
import { TbPlayerPlay, TbPlayerPlayFilled } from "react-icons/tb";
import CircleButton from "../shared/CircleButton";

interface PlayerButtonProps {
  className?: string;
  title?: string;
} 
const PlayerButton: React.FC<PlayerButtonProps> = ({ className, title }) => {
  const [switchPlayer, setSwitchPlayer] = useState(false);
  return (
    <div className="flex items-center gap-x-5">
      <CircleButton />
      <div
        className="flex gap-x-4 items-center cursor-pointer group"
        onMouseEnter={() => setSwitchPlayer(true)}
        onMouseLeave={() => setSwitchPlayer(false)}
      >
        {switchPlayer ? (
          <TbPlayerPlay size={50} />
        ) : (
          <TbPlayerPlayFilled size={50} />
        )}
        <p className="text-white text-xl font-bold group-hover:text-[#da2f68] transition">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PlayerButton;
