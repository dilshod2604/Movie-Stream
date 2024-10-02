"use client";
import Modal from "@/components/shared/Modal";
import VideoItem from "@/components/ui/VideoItem";
import { useGetMovieVideosQuery } from "@/redux/api/movie";
import { useVideoStore } from "@/store/useVideoStore";
import { IoMdClose } from "react-icons/io";
import { useParams } from "next/navigation";
import React from "react";

const MovieVideos = () => {
  const { show, movie_key, close } = useVideoStore();
  const { movieId } = useParams();
  const { data } = useGetMovieVideosQuery(Number(movieId));
  console.log("🚀 ~ MovieVideos ~ data:", data);
  return (
    <section>
      <div className="container relative">
        <h1 className="text-white text-3xl py-5">Official videos</h1>
        <div className="flex gap-x-4 overflow-auto scroll-hidden ">
          {data?.results.map((video, index) => (
            <div key={index}>
              <VideoItem data={video} />
            </div>
          ))} 
        </div>
        {show && (
          <div className="fixed w-full h-full  top-0">
            <Modal
              isOpen={show}
              className="w-[700px] h-[400px] top-[30%] left-[250px] bg-neutral-900 flex justify-center items-center rounded-xl transition duration-1000 "
            >
              <iframe
                width="600"
                height="300"
                src={`https://www.youtube.com/embed/${movie_key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <IoMdClose
                size={30}
                className="absolute top-2 right-2 text-white  hover:opacity-75"
                onClick={close}
              />
            </Modal>
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieVideos;
