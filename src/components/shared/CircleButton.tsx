"use client";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import React from "react";
import {
  useAddFavoritesMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesByIdQuery,
} from "@/redux/api/favorites";

interface CircleButtonProps {
  movie_id: number;
}

const CircleButton: React.FC<CircleButtonProps> = ({ movie_id }) => {
  const [addFavorite] = useAddFavoritesMutation();
  const { data: favorite, refetch } = useGetFavoritesByIdQuery(movie_id);
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const addMovieFavorite = async () => {
    try {
      if (favorite?.isFavorite) {
        await deleteFavorite(favorite.id);
        await refetch();
      } else {
        await addFavorite(movie_id);
        await refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-start gap-x-4">
      <FaListAlt size={25} className="text-blue-600 hover:opacity-75" />
      {favorite?.isFavorite ? (
        <FaHeart
          size={25}
          className="text-pink-600 hover:opacity-75"
          onClick={addMovieFavorite}
        />
      ) : (
        <FaHeart
          size={25}
          className="text-blue-600 hover:opacity-75"
          onClick={addMovieFavorite}
        />
      )}
      <FaBookmark size={25} className="text-blue-600 hover:opacity-75" />
    </div>
  );
};

export default CircleButton;
