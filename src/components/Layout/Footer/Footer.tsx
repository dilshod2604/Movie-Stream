import { footerLinks, socialLinks } from "@/constants/links";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-auto py-[50px]">
      <div className="container">
        <div className="flex flex-col gap-y-9 items-center  ">
          <nav>
            <ul className="flex items-center gap-x-6">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white font-semibold hover:text-[#da2f68] transition "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-neutral-300 text-sm max-w-[830px] text-center">
            EcoMovie - a unique website providing fascinating information about
            movies and TV shows. Here you can discover all the necessary details
            about your favorite films, actors, directors, ratings, and much
            more. EcoMovie boasts a stylish and intuitive interface that makes
            your search for cinematic masterpieces as convenient and enjoyable
            as possible.
          </p>
          <ul className="flex items-center gap-x-3">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className=" flex items-center justify-center w-[50px] h-[50px] rounded-full bg-neutral-900 border border-transparent hover:border-[#da2f68] hover:shadow-[0px_4px_10px_0px_#da2f68]"
                >
                  <link.icon size={20} className="text-white" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
