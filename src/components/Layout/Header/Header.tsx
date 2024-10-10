"use client";
import { links } from "@/constants/links";
import Link from "next/link";
import React, { useEffect } from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import BurgerButton from "@/components/ui/BurgerButton";
import { useSession } from "next-auth/react";
import Button from "@/components/shared/Button";
import ProfileButton from "@/components/ui/ProfileButton";
import Modal from "@/components/shared/Modal";
import BurgerMenu from "@/components/ui/BurgerMenu";
import { useBurgerStore } from "@/store/useBurgerStore";
import axios from "axios";
import { PiFirstAidFill } from "react-icons/pi";

const Header = () => {
  const { data: session } = useSession();
  const { isOpen } = useBurgerStore();
  const router = useRouter();
  const pathname = usePathname();
  const active = (href: string) => {
    return pathname === href
      ? `text-[#da2f68] font-bold cursor-pointer hover:text-[#da2f68] transition`
      : `text-white font-bold cursor-pointer hover:text-[#da2f68] transition`;
  };

  //request
  const handleLogin = async () => {
    try {
      const data = await axios.post("/api/login");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleLogin();
  }, [session]);

  return (
    <header className="w-full fixed top-0 left-0 py-4 z-10 bg-neutral-900/30">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex items-center " onClick={() => router.push("/")}>
            <h1 className="text-white font-bold text-3xl max-sm:hidden">
              𝓜𝓸𝓿𝓲𝓮{" "}
            </h1>
            <div className=" flex items-center justify-center overflow-hidden w-[50px] h-[50px] ">
              <Image src={logo} alt="logo" />
            </div>
            <h1 className="text-white font-bold text-3xl max-sm:hidden">
              𝓢𝓽𝓻𝓮𝓪𝓶
            </h1>
          </div>
          <div className="flex items-center gap-x-5">
            <nav className="flex items-center gap-x-6">
              <ul className="flex  items-center gap-x-6  max-md:hidden">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={active(link.href)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <IoSearch
                className="text-white font-bold cursor-pointer hover:text-[#da2f68] transition"
                size={20}
              />
              <BurgerButton />
            </nav>
            <div className="flex items-center">
              {session ? (
                <div className="max-md:hidden">
                  <ProfileButton />
                </div>
              ) : (
                <Button
                  onClick={() => router.push("/auth")}
                  className="max-md:hidden"
                >
                  Login
                </Button>
              )}
            </div>
          </div>
          {isOpen && (
            <Modal isOpen={isOpen} className="top-[80px] right-0">
              <BurgerMenu />
            </Modal>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
