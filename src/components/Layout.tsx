import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "./layout/pageLoader/PageLoader";

const Layout: React.FC<{
  children: React.ReactNode;
  location: any;
}> = ({ children, location }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location[1] === "#") {
      const id = location.substring(2); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
        }
      }, 0);
    }
  }, [isLoading, location]);

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
