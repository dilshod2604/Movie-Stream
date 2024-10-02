import {api as index} from ".."

const api=index.injectEndpoints({
    endpoints:(build)=>({
        addRating:build.mutation<ADDRATING.GetRatingResponse,ADDRATING.getReatingRequest>({
            query:({movie_id,rating})=>({
              url:`movie/${movie_id}/rating`,
              method:"POST",
              headers:{
                'Content-type':'application/json;charset=utf-8'
              },
              body:JSON.stringify({
                value:rating
              })
            }),
            invalidatesTags:["rating"]
          }),
          getUserMovieRating:build.query<USERRATING.GetUserRatingResonse,USERRATING.GetUserRatingRequest>({
            query:(movieId)=>({
                url:`movie/${movieId}/account_states`,
                methos:"GET"
            }),
            providesTags:["rating"]
        })
    
    })
})
export const {useAddRatingMutation,useGetUserMovieRatingQuery}=api