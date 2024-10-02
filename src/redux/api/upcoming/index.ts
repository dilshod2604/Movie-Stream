import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getUpcomingMovies: build.query<
      UPCOMING.GetUpcomingResponse,
      UPCOMING.GetUpcomingRequest
    >({
      query: () => ({
        url: `/movie/upcoming`,
        method: "GET",
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          language: "en-US",
        },

      }),
      providesTags: ["upcoming"],
    }),
  }),
});

export const { useGetUpcomingMoviesQuery } = api;
