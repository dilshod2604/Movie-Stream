"use client";
import { useVideoStore } from "@/store/useVideoStore";
import { Result } from "@/types/scheme";
import React, { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
interface VideoItemProps {
  data: Result;
}
const VideoItem: React.FC<VideoItemProps> = ({ data }) => {
  const { open } = useVideoStore();
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className="w-[300px] h-[250px] rounded-xl overflow-hidden flex flex-col gap-y-4 relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <img
        src={`https://img.youtube.com/vi/${data.key}/mqdefault.jpg`}
        alt="cover"
      />
      <h1 className="text-white">{data.name}</h1>

      <button
        className="absolute w-[300px] h-[170px] flex  items-center justify-center hover:bg-black/50 transition duration-300"
        onClick={() => open(data.key)}
      >
        {active ? (
          <BsFillPlayCircleFill size={50} className="text-[#da2f68]" />
        ) : (
          <BsPlayCircle size={50} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default VideoItem;
