"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import ProfileButton from "./ProfileButton";
import Button from "../shared/Button";
import { links } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
const BurgerMenu = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const active = (href: string) => {
    return pathname === href
      ? `text-[#da2f68] font-bold cursor-pointer hover:text-[#da2f68] transition`
      : `text-white font-bold cursor-pointer hover:text-[#da2f68] transition`;
  };
  return (
    <div className="flex flex-col w-full ">
      <div className="flex items-center justify-center ">
        {session ? (
          <ProfileButton className="flex-col gap-y-5 w-full " />
        ) : (
          <Button onClick={() => signIn("google")}>Login</Button>
        )}
      </div>
      <ul className="flex flex-col  items-center mt-5 border-t border-neutral-400 p-3 ">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className={active(link.href)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
