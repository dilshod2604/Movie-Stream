"use client";
import React, { FC, useEffect } from "react";
import LoginButton from "../shared/LoginButton";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { PiFilmReelBold } from "react-icons/pi";
import { signIn } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/logo.png";
const LoginForm: FC = () => {

  return (
    <div className="flex flex-col items-center justify-center max-w-[600px] p-5 rounded-xl  bg-slate-100 ">
      <div className="flex items-center w-full justify-center mb-[40px]">
        <h1 className="text-[#da2f68] font-bold text-3xl">𝓜𝓸𝓿𝓲𝓮 </h1>
        <div className="flex items-center justify-center overflow-hidden w-[50px] h-[50px]">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        <h1 className="text-orange-400 font-bold text-3xl">𝓢𝓽𝓻𝓮𝓪𝓶</h1>
      </div>

      <div className="flex flex-col gap-y-4 w-full">
        <h1 className="text-neutral-700 font-bold text-2xl  w-full flex items-center justify-center">
          {" "}
          Welcome back 👋
        </h1>
        <LoginButton
          icon={PiFilmReelBold}
          className="bg-slate-600 font-bold gap-x-4 hover:opacity-75 transition"
          iconSize={25}
        >
          Log in with TMDb
        </LoginButton>
        <LoginButton
          icon={FcGoogle}
          className="bg-blue-500 font-bold gap-x-4 hover:opacity-75 transition"
          iconSize={25}
          onClick={() => signIn("google")}
        >
          Log in with Google
        </LoginButton>
        <LoginButton
          icon={ImGithub}
          className="bg-neutral-800 font-bold gap-x-4 hover:opacity-75 transition"
          iconSize={25}
        >
          {" "}
          Log in with GitHub
        </LoginButton>
      </div>
    </div>
  );
};

export default LoginForm;
