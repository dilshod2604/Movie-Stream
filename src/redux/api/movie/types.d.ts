import { IAddRating, IAddRatingRequest, ICasts, IMovie, IRecommendations, ISimilarMovies, IVideos } from "@/types/scheme";
import { Interface } from "readline";

namespace MOVIE {
  type GetMovieRrsponse = IMovie;
  type GetMovieRequest = number;
}
namespace CASTS {
  type GetCastResponse = ICasts;
  type GetCastRequest = number;
}
namespace SIMILAR {
  type GetSimilarMoviesResponse = ISimilarMovies;
  type GetSimilarMoviesRequest = number;
}
namespace RECCOMENDATIONS{
  type GetRecommendationsResponse = IRecommendations;
  type GetRecommendationsRequest = number;
}

namespace VIDEOS{
  type GetVideosResponse=IVideos
  type GetVideosRequest=number
}

