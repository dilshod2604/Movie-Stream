"use client";
import { useSearchMovieQuery } from "@/redux/api/search";
import { useParams, useRouter } from "next/navigation";
import React from "react";
const SearchResults = () => {
  const { searchQuery } = useParams();
  const { data } = useSearchMovieQuery(searchQuery);
  const router = useRouter();
  return (
    <section>
      <div className="container pt-[80px]">
        <div className="flex flex-wrap gap-x-4 gap-y-4">
          {data?.results.map((movie, index) => (
            <div
              key={index}
              className="flex flex-col w-[250px] h-[400px] rounded-xl gap-y-5 overflow-hidden bg-neutral-800 cursor-pointer "
              onClick={() => router.push(`/movie/${movie.id}`)}
            >
              <div className="flex items-center justify-center overflow-hidden w-[250px] h-[300px] rounded-xl ">
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    movie.poster_path ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt="cover"
                  className=" hover:bg-neutral-950/55 w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-y-3 px-3">
                <h1 className="text-white text-xl font-normal ">
                  {movie.title}
                </h1>
                <p className="text-neutral-400 text-sm font-bold ">
                  {movie.release_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
