import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "./pageLoader/PageLoader";
import { useRouter } from "next/router";

const Layout: React.FC<{
  children: React.ReactNode;
  location: any;
}> = ({ children, location }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location[1] === "#") {
      const id = location.substring(2); // location.hash without the '#'
      setTimeout(() => {
        const e = document.getElementById(id);
        if (e) {
          e.scrollIntoView();
        } else {
          router.push("/404");
        }
      }, 0);
    }
  }, [isLoading, location, router]);

  return (
    <div>
      {isLoading ? (
        <PageLoader finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
