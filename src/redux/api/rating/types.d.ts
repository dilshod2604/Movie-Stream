import { IAddRating, IAddRatingRequest, MovieAccountState } from "@/types/scheme"

namespace ADDRATING{
    type GetRatingResponse=IAddRating
    type getReatingRequest=IAddRatingRequest
    }

    namespace USERRATING{
        type GetUserRatingResonse=MovieAccountState
        type GetUserRatingRequest=number
        }