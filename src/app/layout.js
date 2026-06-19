"use client";

import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import LenisProvider from "@/components/LenisProvider";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomBlur from "@/components/BottomBlur";
import CursorFollower from "@/components/CursorFollower";


const inter = localFont({
  src: "../assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/fav.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {isAdmin ? (
          children
        ) : (
          <LenisProvider>
            <Header />
            {children}
            <Footer />
            <CursorFollower />
          </LenisProvider>
        )}
        {!isAdmin && <BottomBlur />}
      </body>
    </html>
  );
}
