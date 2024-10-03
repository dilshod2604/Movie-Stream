"use client";
import SkeletonPage from "@/components/shared/SkeletonPage";
import { useDiscoverMoviesQuery } from "@/redux/api/discover";
import { useGetGenresQuery } from "@/redux/api/genres";
import { Select, SelectProps } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const Movies = () => {
  const router = useRouter();
  const [genersValue, setGenersValue] = useState<string>("");
  const { data } = useGetGenresQuery();
  const { data: discoverData, isLoading } = useDiscoverMoviesQuery(genersValue);

  const genresOptions = data?.genres.map((genre) => ({
    value: genre.id,
    label: genre.name,
  }));
  const options: SelectProps["options"] = genresOptions;

  const handleChange = (value: string[]) => {
    setGenersValue(value.join(" ,"));
  };

  if (isLoading) return <SkeletonPage />;
  return (
    <section className="pt-[80px]">
      <div className="container">
        <div className="flex flex-col ">
          <div className=" w-full  flex items-center justify-between py-4 max-md:flex-col max-md:items-start">
            <h1 className="text-white font-semibold text-3xl">
              Explore movies
            </h1>
            <div>
              <Select
                mode="multiple"
                placeholder="Select genres"
                options={options}
                style={{ width: "300px" }}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className=" w-full flex flex-wrap gap-x-4  gap-y-4">
            {discoverData?.results.map((item, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
