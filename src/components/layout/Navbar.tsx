import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import useOnClickOutside from "@/components/hooks/useOnClickOutside";
import ThemeToggler from "../ThemeToggler";
import { cn } from "@/utils/classNames";

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const onResize = (e: any) => {
      if (e.currentTarget.innerWidth > 1024) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useOnClickOutside(wrapperRef, () => setShowMobileMenu(false));

  const NavButton = ({ id, label }: { id: string; label: string }) => {
    const scrollTo = () => {
      setShowMobileMenu(false);
    };

    return (
      <Link href={id === "home" ? "/" : `/#${id}`}>
        <button
          type="button"
          className="text-md p-1.5 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
          onClick={scrollTo}
        >
          {label}
        </button>
      </Link>
    );
  };

  return (
    <>
      <Helmet>
        <body className={showMobileMenu ? "blurring" : ""} />
      </Helmet>
      <nav
        className={cn(
          "invisible lg:visible fixed top-0 left-0 w-full flex justify-center",
          "bg-light-bg dark:bg-dark-bg",
          "px-5 z-40",
          `${scrolled && "shadow-lg opacity-90"}`,
          "bg-color-transition"
        )}
      >
        <div className="relative w-[1024px] mx-auto py-4 flex items-center justify-between">
          <div className="invisible lg:visible group group/list flex dark:text-white">
            <NavButton id="home" label="Home" />
            <NavButton id="about" label="About" />
            <NavButton id="experience" label="Experience" />
            <NavButton id="projects" label="Projects" />
            <NavButton id="contact" label="Contact" />
          </div>
          <div className="invisible lg:visible absolute right-0 flex items-center gap-2">
            <ThemeToggler />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
