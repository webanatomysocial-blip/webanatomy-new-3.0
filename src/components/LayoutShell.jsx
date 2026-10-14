"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomBlur from "@/components/BottomBlur";
import CursorFollower from "@/components/CursorFollower";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
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
    </>
  );
}
