"use client";
import { Progress, ProgressProps } from "antd";
import React, { useState } from "react";
import Button from "../shared/Button";
import { BsInfoCircleFill } from "react-icons/bs";
import { useRatingStore } from "@/store/useRatingStore";
import { IMovie } from "@/types/scheme";
import { useGetUserMovieRatingQuery } from "@/redux/api/rating";
import { useParams } from "next/navigation";


interface RatingProps {
  data: IMovie | undefined;
}
const Rating: React.FC<RatingProps> = ({ data }) => {
  const {movieId}=useParams()

  const {data:userRating}=useGetUserMovieRatingQuery(Number(movieId))
  const {open}=useRatingStore()
  const progressColors: ProgressProps["strokeColor"] = {
    "0%": "blue",
    "50%": "orange",
    "100%": "green",
  };
  return (
    <div className="flex items-center gap-x-5">
      <div className="flex items-center gap-x-1">
        <Progress
          type="circle"
          percent={
            data?.vote_average ? Number((data.vote_average * 10).toFixed(1)) : 0
          }
          strokeColor={progressColors}
          trailColor="white"
          size={70}
          strokeWidth={10}
          format={(percent) => (
            <span style={{ color: "white" }}>{percent}%</span>
          )}
        />
        <p className="text-white font-bold ">Rating</p>
      </div>

      <Button  className="bg-indigo-900 hover:scale-110 hover:bg-indigo-900"
      onClick={open}
      >
       {
        !userRating?.rated?<div className="flex items-center">
        <span className="text-white font-bold flex items-center gap-x-1 ">
          What&apos; your Vibe?
        </span>

        <BsInfoCircleFill className="text-white" />
      </div>  
      :
      <div className="flex items-center">
          <span className="text-white font-bold flex items-center gap-x-2 ">
            Your Vibe
            <p  className="text-[#da2f68] font-bold">{userRating?.rated.value*10}%</p>
          </span>
        </div>  
       }
        
       
      </Button>
    </div>
  );
};

export default Rating;
