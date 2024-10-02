import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.themoviedb.org/3/",
  prepareHeaders: (headers) => {
    headers.set(
      "Authorization",
      `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_URL}`
    );
    return headers;
  },
});

const baseQueryExtanded: BaseQueryFn = (arg, api, extraOptions) => {
  const result = baseQuery(arg, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtanded,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["tranding", "popular", "top_rated","movie","search","upcoming","rating","authentication",'discover',"genres" ],

  endpoints: () => ({}),
});
