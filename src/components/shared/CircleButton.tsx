"use client";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import React from "react";
import { useAddFavoritesMutation, useGetFavoritesByIdQuery } from "@/redux/api/favorites";
interface CircleButtonProps {
  movie_id: number;
}
const CircleButton: React.FC<CircleButtonProps> = ({ movie_id }) => {
  const [addFavorite] = useAddFavoritesMutation();
  const { data:favorite} =useGetFavoritesByIdQuery(movie_id)
  
  const addMovieFavorite = async () => {
    try {
      await addFavorite(movie_id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center gap-x-4">
      <FaListAlt size={25} className="text-blue-600 hover:opacity-75" />
      {
       favorite?.isFavorite? <FaHeart
       size={25}
       className="text-pink-600 hover:opacity-75"
       onClick={addMovieFavorite}
     />:
     <FaHeart
     size={25}
     className="text-blue-600 hover:opacity-75"
     onClick={addMovieFavorite}
   />
      }
      <FaBookmark size={25} className="text-blue-600 hover:opacity-75" />
    </div>
  );
};

export default CircleButton;
