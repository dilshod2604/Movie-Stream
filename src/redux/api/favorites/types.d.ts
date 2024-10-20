import { IFavoriteMovie } from "@/types/scheme";

namespace FAVORITES {
  type getFavoritesResponse = void;
  type getFavoriteRequest = number;
  type GetFavoritesByIdResponse = IFavoriteMovie;
  type GetFavoritesByIdRequest = number;
  type DeleteFavoritesResponse = void;
  type DeleteFavoritesRequest = number;
}
