"use client";
import { signOut, useSession } from "next-auth/react";
import React, { ReactNode } from "react";
import Button from "../shared/Button";
import { twMerge } from "tailwind-merge";
interface ProfileButtonProps {
  className?: string;
}
const ProfileButton: React.FC<ProfileButtonProps> = ({ className }) => {
  const { data: session } = useSession();
 
  return (
    <div className={twMerge(`flex items-center gap-x-4`, className)}>
      <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full overflow-hidden">
        <img
          src={session?.user?.image!}
          alt="my avatar"
          className="w-full h-full"
        />
      </div>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default ProfileButton;
