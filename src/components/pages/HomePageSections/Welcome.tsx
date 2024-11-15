"use client";
import SearchTrack from "@/components/ui/SearchTrack";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { words } from "@/constants/arrays";
import { useGetUpcomingMoviesQuery } from "@/redux/api/upcoming";
import SkeletonImage from "antd/es/skeleton/Image";
import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [randomUrl, setRandomUrl] = useState<string>("");
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const { data, isLoading } = useGetUpcomingMoviesQuery();

  const bgRandomImage = () => {
    const rendomIndex = Math.floor(Math.random() * data?.results.length!);
    const backdropImage = data?.results[rendomIndex].backdrop_path;
    if (backdropImage)
      setRandomUrl(`https://image.tmdb.org/t/p/original${backdropImage}`);
  };

  useEffect(() => {
    if (!isLoading) {
      bgRandomImage();
    }
  }, [data]);

  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {isLoadingImage && (
        <SkeletonImage style={{ width: "300px", height: "200px" }} active />
      )}
      {randomUrl && (
        <div className="w-full h-full overflow-hidden">
          <img
            src={randomUrl}
            alt="cover"
            className="w-full h-screen"
            onLoad={() => setIsLoadingImage(false)}
          />
        </div>
      )}

      <div className=" flex flex-col justify-center absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-b from-transparent to-[#04152D]  ">
        <div className="container pt-[80px]">
          <div className="flex flex-col items-center justify-center z-[-1]">
            <TypewriterEffect words={words} />
            <SearchTrack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
