import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SessionProvider from "@/providers/SessionProvider";
import { getServerSession } from "next-auth";
import LayoutClient from "./layout.client";

const interSanse = localFont({
  src: "/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter-sanse",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Movie Stream ",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`${interSanse.variable} antialiased`}>
        <LayoutClient>
          <SessionProvider session={session!}> {children}</SessionProvider>
        </LayoutClient>
      </body>
    </html>
  );
}
