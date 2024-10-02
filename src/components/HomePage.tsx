"use client";
import React from "react";
import Welcome from "./pages/HomePageSections/Welcome";
import Trending from "./pages/HomePageSections/Trending";
import Popular from "./pages/HomePageSections/Popular";
import TopRated from "./pages/HomePageSections/TopRated";
import HomeSkeleton from "./ui/HomeSkeleton";
import { useGetPopularMoviesQuery } from "@/redux/api/popular";
const HomePage = () => {
  const { isLoading } = useGetPopularMoviesQuery("day");
  return (
    <>
      {isLoading ? (
        <HomeSkeleton />
      ) : (
        <>
          <Welcome />
          <Trending />
          <Popular />
          <TopRated />
        </>
      )}
    </>
  );
};

export default HomePage;
