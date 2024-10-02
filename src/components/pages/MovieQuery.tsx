"use client";
import React from "react";
import MovieDetails from "./movieQuerySections/MovieDetails";
import Cast from "./movieQuerySections/Cast";
import SimilarMovies from "./movieQuerySections/SimilarMovies";
import Recommendations from "./movieQuerySections/Recommendations";
import { useGetMovieByIdQuery } from "@/redux/api/movie";
import { useParams } from "next/navigation";
import SkeletonСards from "../shared/SkeletonСards";
import MovieVideos from "./movieQuerySections/MovieVideos";

const MovieQuery = () => {
  const { movieId } = useParams();
  const { isLoading } = useGetMovieByIdQuery(Number(movieId));
  return (
    <>
      {!isLoading ? (
        <>
          <MovieDetails />
          <Cast />
          <MovieVideos />
          <SimilarMovies />
          <Recommendations />
        </>
      ) : (
        <SkeletonСards />
      )}
    </>
  );
};

export default MovieQuery;
