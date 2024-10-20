import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const tmdbBaseQuery = fetchBaseQuery({
  baseUrl: "https://api.themoviedb.org/3/",
  prepareHeaders: (headers) => {
    headers.set(
      "Authorization",
      `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_URL}`
    );
    return headers;
  },
});
const secondBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/",
});

const baseQueryWithTwoUrls: BaseQueryFn = async (arg, api, extraOptions) => {
  let result;
  if ( arg.url.startsWith("/api/v2")) {
    result = await secondBaseQuery(arg, api, extraOptions);
  } else {
    result = await tmdbBaseQuery(arg, api, extraOptions);
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithTwoUrls,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: [
    "tranding",
    "popular",
    "top_rated",
    "movie",
    "search",
    "upcoming",
    "rating",
    "authentication",
    "discover",
    "genres",
    "favorites",
  ],

  endpoints: () => ({}),
});
