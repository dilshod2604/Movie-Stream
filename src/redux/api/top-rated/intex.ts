import { api as index } from "..";
import { TOPRATED } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTopRatedMovies: build.query<
      TOPRATED.GetTopRatedResponse,
      TOPRATED.GetTopRatedRequest
    >({
      query: () => ({
        url: "/movie/top_rated",
        method: "GET",
      }),
      providesTags: ["top_rated"],
    }),
  }),
});
export const { useGetTopRatedMoviesQuery } = api;
