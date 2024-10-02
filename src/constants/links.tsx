import { IconType } from "react-icons";
import { FaDiscord, FaInstagram, FaVk, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

export const links = [
  {
    name: "Movie",
    href: "/explore/movie",
  },
  {
    name: "TV Show",
    href: "/explore/tv",
  },
];

export const footerLinks = [
  {
    name: "Terms Of Use",
    href: "#",
  },
  {
    name: "Privacy-Policy",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "FAQ",
    href: "#",
  },
];

interface SocialLink {
  icon: IconType;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: FaDiscord,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaVk,
    href: "#",
  },
  {
    icon: IoLogoLinkedin,
    href: "#",
  },
  {
    icon: FaGithub,
    href: "#",
  },
];


