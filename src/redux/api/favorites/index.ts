import { api as index } from "..";
import { FAVORITES } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    addFavorites: build.mutation<
      FAVORITES.getFavoritesResponse,
      FAVORITES.getFavoriteRequest
    >({
      query: (movie_id) => ({
        url: "/api/v2/favorites",
        method: "POST",
        body: { movie_id },
      }),
      invalidatesTags: ["favorites"],
    }),
    getFavoritesById: build.query<
      FAVORITES.GetFavoritesByIdResponse,
      FAVORITES.GetFavoritesByIdRequest
    >({
      query: (id: number) => ({
        url: `/api/v2/get-favorite/${id}`,
        method: "GET",
      }),
      providesTags: ["favorites"],
    }),
    deleteFavorite: build.mutation<
      FAVORITES.DeleteFavoritesResponse,
      FAVORITES.DeleteFavoritesRequest
    >({
      query: (id) => ({
        url: `/api/v2/delete-favorites/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["favorites"],
    }),
  }),
});
export const {
  useAddFavoritesMutation,
  useGetFavoritesByIdQuery,
  useDeleteFavoriteMutation,
} = api;
