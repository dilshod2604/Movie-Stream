"use lcient";
import React, { useState } from "react";
import { TbPlayerPlay, TbPlayerPlayFilled } from "react-icons/tb";
import CircleButton from "../shared/CircleButton";

interface PlayerButtonProps {
  className?: string;
  title?: string;
  movie_id: number;
}
const PlayerButton: React.FC<PlayerButtonProps> = ({
  className,
  title,
  movie_id,
}) => {
  const [switchPlayer, setSwitchPlayer] = useState(false);
  return (
    <div
      className="flex items-center gap-x-5 max-sm:flex-col
    max-sm:items-start max-sm: gap-y-5 "
    >
      <CircleButton movie_id={movie_id} />
      <div
        className="flex gap-x-4 items-center cursor-pointer group"
        onMouseEnter={() => setSwitchPlayer(true)}
        onMouseLeave={() => setSwitchPlayer(false)}
      >
        {switchPlayer ? (
          <TbPlayerPlay size={50} className="text-red-500" />
        ) : (
          <TbPlayerPlayFilled size={50} className="text-white" />
        )}
        <p className="text-white text-xl font-bold group-hover:text-[#da2f68] transition">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PlayerButton;
