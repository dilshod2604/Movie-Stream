"use client"; 
import LoginForm from '@/components/ui/LoginForm';
import StartFree from '@/components/ui/StartFree';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";

const Authentication = () => {
  const router = useRouter();
  return (
    <section className="bg-white h-screen">
      <button
        className="text-neutral-500 flex items-center pt-5 pl-5 font-bold hover:opacity-75 hover:scale-110 transition"
        onClick={() => router.back()}
      >
        <MdKeyboardArrowLeft className="text-neutral-500" size={20} />
        Back
      </button>
      <div className="container">
        <div className="flex w-full justify-center gap-x-4">
          <StartFree />
          <LoginForm  />
        </div>
      </div>
    </section>
  );
};

export default Authentication;
