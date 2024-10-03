import { ISearchMovie } from "@/types/scheme";

namespace SEARCHMOVIE {
  type SearchMovieResponse = ISearchMovie;
  type SearchMovieRequest = string | string[];
}
