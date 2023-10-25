import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "./layout/pageLoader/PageLoader";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

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
