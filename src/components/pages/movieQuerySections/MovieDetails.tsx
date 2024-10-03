"use client";
import PlayerButton from "@/components/ui/PlayerButton";
import Rating from "@/components/ui/Rating";
import RatingModal from "@/components/ui/RatingModal";
import { useGetMovieByIdQuery } from "@/redux/api/movie";
import { useRatingStore } from "@/store/useRatingStore";
import { useParams } from "next/navigation";
import React from "react";

const MovieDetails = () => {
  const { movieId } = useParams();
  const {isOpen}=useRatingStore()
  const { data } = useGetMovieByIdQuery(Number(movieId));

  const toHoursAndMinutes = (TotalMinutes: number) => {
    const hours = Math.floor(TotalMinutes / 60);
    const minutes = TotalMinutes % 60;
    return `${hours}h ${minutes < 10 ? `0${minutes}` : minutes}m`;
  };
  return (
    <section className="flex flex-col  py-[80px]  " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
>
      <div className="container"> 
        <div className="flex gap-x-8 pt-[50px] bg-black/75 p-5">
          <div className="flex items-center justify-center w-[300px] h-[500px] rounded-md overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              alt="cover" 
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-white  md:text-2xl lg:text-4xl truncate">
                {data?.title}
              </h1>
              <p className="text-neutral-400 truncate">{data?.tagline}</p>
            </div>

            <div className="flex gap-x-4 items-center">
              {data?.genres.map((ganre, index) => (
                <span
                  key={index}
                  className="text-white px-4 py-1 rounded-md bg-red-500 hover:bg-red-800 cursor-pointer"
                >
                  {ganre.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-y-7 py-3">
              <Rating data={data} />
              <PlayerButton title="Watch Trailer" />
              {
              isOpen&&<RatingModal/>
              }
            </div>
            <div className="flex flex-col gap-y-4">
              <h1 className="text-white text-2xl ">Overview</h1>
              <p className="text-neutral-300 max-w-[700px] ">
                {data?.overview}
              </p>
            </div>
            <ul className="flex flex-col ">
              <li className="flex item-center gap-x-3  py-3 border-b border-neutral-600">
                <span className="flex gap-x-2 items-center">
                  <p className="text-white truncate font-bold">Status:</p>
                  <p className="text-neutral-400 truncate">{data?.status}</p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <p className="text-white truncate font-bold">Release Date:</p>
                  <p className="text-neutral-400 truncate">
                    {data?.release_date}
                  </p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <p className="text-white truncate font-bold">Runtime:</p>
                  <p className="text-neutral-400 truncate">
                    {toHoursAndMinutes(data?.runtime!)}
                  </p>
                </span>
              </li>
              <li className="flex item-center gap-x-3  py-3 border-b border-neutral-600">
                <span className="flex gap-x-2 items-center">
                  <p className="text-white truncate font-bold">Country:</p>
                  <p className="text-neutral-400 truncate">
                    {data?.origin_country}
                  </p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <p className="text-white truncate font-bold">Language:</p>
                  <p className="text-neutral-400 truncate">
                    {data?.original_language}
                  </p>
                </span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
