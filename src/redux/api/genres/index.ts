import {api as index} from ".."
import { GENRES } from "./types"
const api =index.injectEndpoints({
    endpoints:(build)=>({
        getGenres:build.query<GENRES.getGenresResponse,GENRES.getGenresRequest>({
            query:()=>({
                url:'/genre/movie/list',
                method:"GET"
            }),
            providesTags:["genres"]
        }),
        getTVShowsGenres:build.query<GENRES.getTVGenresResponse,GENRES.getTVGenresRequest>({
            query:()=>({
                url:"/genre/tv/list",
                method:"GET" 
            }),
            providesTags:["genres"]
        })

    })
})
export const {useGetGenresQuery, useGetTVShowsGenresQuery}=api