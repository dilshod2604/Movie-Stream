"use client";
import React, { useState } from 'react';
import Modal from '../shared/Modal';
import { useRatingStore } from '@/store/useRatingStore';
import RatingSlider from './RatingSlider';
import { IoMdClose } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { useParams } from 'next/navigation';
import { useAddRatingMutation } from '@/redux/api/rating';


const RatingModal = () => {
  const { isOpen, close } = useRatingStore();
  const [value, setValue] = useState<number>(0);
  const { movieId } = useParams();
  const [addRating] = useAddRatingMutation();

  const postRating = async () => {
    try {
      const res = await addRating({
        movie_id: Number(movieId),
        rating: value,
      }).unwrap();
    res.success?close():open
    } catch (error) {
      console.error("Failed to post rating:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} className="w-[800px] bg-white rounded-xl top-[15%]">
      <div className="relative overflow-hidden">
        <div className="flex items-center text-black justify-between px-2 py-[20px]">
          <h1 className="text-black font-bold text-2xl">Rating</h1>
          <IoMdClose
            className="text-black hover:opacity-55 transition"
            onClick={close}
            size={30}
          />
        </div>
        <div className="bg-transparent">
          <RatingSlider value={value} setValue={setValue} />
        </div>
        <div className="flex items-center w-full justify-end">
          <button
            className="flex items-center px-4 py-2 gap-x-4 text-white font-bold rounded-full bg-[#da2f68] hover:text-[#da2f68] hover:bg-neutral-300 transition duration-200"
            onClick={postRating}
          >
            <GiCheckMark />
            I&apos;m Done
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RatingModal;
