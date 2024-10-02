import {api as index} from ".." 
import { AUTH } from "./types"

const apiKey=process.env.NEXT_PUBLIC_TMDB_API_KEY

const api =index.injectEndpoints({
    endpoints:(build)=>({
        getRequestToken:build.query<AUTH.GetRequestTokenResponse,AUTH.GetequestTokenRequest>({
            query:()=>({
                url: `/authentication/token/new?api_key=${apiKey}`,
                method:"GET"
            }),
            providesTags:["authentication"]
        }),
        createSession:build.mutation({
            query:(requestToken)=>({
                url:`/authentication/session/new?api_key=${apiKey}`,
                method:"POST",
                body:{
                    request_token: requestToken 
                }
            })
        })
    })
})

export const {useGetRequestTokenQuery,useCreateSessionMutation}=api