import { METHODS } from "http";
import { api as index } from "..";
import { CASTS, MOVIE, RECCOMENDATIONS, SIMILAR, VIDEOS } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMovieById: build.query<MOVIE.GetMovieRrsponse, MOVIE.GetMovieRequest>({
      query: (movie_id) => ({   
        url: `/movie/${movie_id}`,
        method: "GET",
      }),
      providesTags: ["movie"],
    }),
    getMovieCredits: build.query<CASTS.GetCastResponse, CASTS.GetCastRequest>({
      query: (movie_id) => ({
        url: `/movie/${movie_id}/credits`,
        method: "GET",
      }),
      providesTags: ["movie"],
    }),
    getSimilarMovies: build.query<
      SIMILAR.GetSimilarMoviesResponse,
      SIMILAR.GetSimilarMoviesRequest
    >({
      query: (movie_id) => ({
        url: `/movie/${movie_id}/similar`,
        method: "GET",
      }),
      providesTags: ["movie"],
    }),

    getRecommendationMovies: build.query<
      RECCOMENDATIONS.GetRecommendationsResponse,
      RECCOMENDATIONS.GetRecommendationsRequest
    >({
      query: (movie_id) => ({
        url: `/movie/${movie_id}/recommendations`,
        method: "GET",
      }),
      providesTags: ["movie"],
    }),
    getMovieVideos:build.query<VIDEOS.GetVideosResponse,VIDEOS.GetVideosRequest>({
      query:(movie_id)=>({
        url:`/movie/${movie_id}/videos`,
        method:'GET'
      }),
      providesTags:["movie"]
    })
  }),
});
export const {
  useGetMovieByIdQuery,
  useGetMovieCreditsQuery,
  useGetSimilarMoviesQuery,
  useGetRecommendationMoviesQuery,
  useGetMovieVideosQuery
} = api;
