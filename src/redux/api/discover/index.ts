import {api as index } from ".."
import { DISCOVERMOVIES } from "./types"
 const TMDB_API_KEY=process.env.NEXT_PUBLIC_TMDB_API_KEY
const api=index.injectEndpoints({
    endpoints:(build)=>({
        discoverMovies:build.query<DISCOVERMOVIES.DiscoverMoviesResponse,DISCOVERMOVIES.DiscoverMoviesRequest>({
            query:(geners)=>({
                url:"/discover/movie",
                method:"GET",
                params:{
                    api_key: TMDB_API_KEY, 
                    with_genres:geners
                }
            }),
            providesTags:["discover"]
        }),
        discoverTVShows:build.query<DISCOVERMOVIES.DiscoverTVResponse,DISCOVERMOVIES.DiscoverTVRequest>({
            query:(geners)=>({
                url:"/discover/tv",
                method:"GET",
                params:{
                    api_key: TMDB_API_KEY, 
                    with_genres:geners
                }

            })

        })

    })
})
export const {useDiscoverMoviesQuery,useDiscoverTVShowsQuery}=api