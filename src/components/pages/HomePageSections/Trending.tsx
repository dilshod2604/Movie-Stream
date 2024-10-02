"use client";
import SkeletonCards from "@/components/shared/SkeletonCards";
import SwitchButton from "@/components/shared/SwitchButton";
import { useGetTrendingMoviesQuery } from "@/redux/api/tranding";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Trending = () => {
  const [timeWindow, setTimeWindow] = useState<string>("day");

  const { data, isLoading } = useGetTrendingMoviesQuery(timeWindow);
  const router = useRouter();
  return (
    <section className="w-full bg-gradient-to-t  from-transparent to-[#04152d85] pt-5">
      <div className="container">
        <div className="flex flex-col items-start gap-y-5">
          <div className="flex items-center justify-between w-full ">
            <h1 className="text-white  font-bold text-2xl">Trending</h1>
            <SwitchButton
              state={timeWindow}
              setSate={setTimeWindow}
              value1="day"
              value2="week"
            />
          </div>

          <div className=" w-full flex items-center gap-x-4 overflow-x-auto scroll-hidden snap-x  ">
            {isLoading ? (
              <SkeletonCards />
            ) : (
              data?.results.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-2 rounded-md w-[200px] h-auto snap-center cursor-pointer"
                  onClick={() => router.push(`/movie/${item.id}`)}
                >
                  <div className="flex flex-col items-center justify-center overflow-hidden w-[200px] h-[250px] rounded-md">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <h1 className="text-white text-xl  truncate">{item.title}</h1>
                  <p className="text-neutral-400 text-sm font-bold ">
                    {item.release_date}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
