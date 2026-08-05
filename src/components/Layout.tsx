"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import PageLoader from "./pageLoader/PageLoader";
import { useRouter } from "next/navigation";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const e = document.getElementById(id);
        if (e) {
          e.scrollIntoView();
        } else {
          router.push("/404");
        }
      }, 0);
    }
  }, [isLoading, router]);

  return (
    <div>
      {isLoading ? (
        <PageLoader finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          {children}
        </>
      )}
    </div>
  );
};

export default Layout;
