"use client";
import { useGetMovieCreditsQuery } from "@/redux/api/movie";
import { useParams } from "next/navigation";
import React from "react";

const Cast = () => {
  const { movieId } = useParams();
  const { data } = useGetMovieCreditsQuery(Number(movieId));
  return (
    <section className="flex flex-col pt-[50px]">
      <div className="container">
        <h1 className="flex items-center text-white text-2xl mb-5 font-bold">Top Cast</h1>
        <div className="flex items-center gap-x-4 overflow-auto scroll-hidden ">
          {data?.cast.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-4 w-[200] g-[300px] items-center"
            >
              <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-lg font-bold m-0">
                  {item.original_name}
                </h1>
                <p className="text-neutral-400 font-sm ">{item.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cast;
