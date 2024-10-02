import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovies: build.query<
      POPULAR.GetPopularResponse,
      POPULAR.GetPopularRequest
    >({
      query: (query) => ({
        url: `/${query}/popular`,
        method: "GET",
      }),
      providesTags: ["popular"],
    }),
  }),
});

export const { useGetPopularMoviesQuery } = api;
