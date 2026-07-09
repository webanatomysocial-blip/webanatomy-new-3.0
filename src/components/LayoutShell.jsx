"use client";

import { usePathname } from "next/navigation";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomBlur from "@/components/BottomBlur";
import CursorFollower from "@/components/CursorFollower";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

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
