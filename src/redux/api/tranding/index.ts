import { api as index } from "..";
import { TRANDING } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTrendingMovies: build.query<
      TRANDING.GetTrandingResponse,
      TRANDING.GetTrendingRequest
    >({
      query: (timeWindow) => ({
        url: `/trending/movie/${timeWindow}`,
        method: "GET",
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          language: "en-US",
        },
      }),
    }),
  }),
});

export const { useGetTrendingMoviesQuery } = api;
