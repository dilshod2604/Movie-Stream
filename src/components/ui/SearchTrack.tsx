"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchTrack = () => {
  const [value, setValue] = useState<string>("");
  const router = useRouter();
  const handleSubmit = () => {
    if (value) {
      router.push(`/search/${value}`);
    }
    setValue(value);
  };
  return (
    <div className="flex items-center w-full mt-[50px]">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="px-5 py-4 rounded-l-full w-full bg-white placeholder:text-neutral-400 focus:outline-none text-black "
        placeholder="Search for a movie or tv show..."
      />
      <button
        className="flex items-center bg-[#da2f68] px-7 py-4 rounded-r-full text-white font-bold"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default SearchTrack;
