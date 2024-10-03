import { api as index } from "..";
import { SEARCHMOVIE } from "./types";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    searchMovie: build.query<
      SEARCHMOVIE.SearchMovieResponse,
      SEARCHMOVIE.SearchMovieRequest
    >({
      query: (query) => ({
        url: "/search/movie",
        method: "GET",
        params: { query: query },
      }),
      providesTags: ["search"],
    }),
  }),
});
export const { useSearchMovieQuery } = api;
