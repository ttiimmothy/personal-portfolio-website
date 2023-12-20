import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";
import { BiSolidFilePdf } from "react-icons/bi";
import { Helmet } from "react-helmet";
import { darkBackground, lightBackground } from "../color/default";
import { NavMobileMenuIcon } from "@/components/layout/navMobileMenu/NavMobileMenuIcon";
import useOnClickOutside from "@/components/hooks/useOnClickOutside";
import ThemeToggler from "../ThemeToggler";

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
        className={`invisible lg:visible fixed top-0 left-0 w-full flex justify-center ${lightBackground} px-5 z-40 ${
          scrolled && "shadow-lg opacity-90"
        } dark:${darkBackground}`}
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
            <Link
              target="_blank"
              href="https://github.com/ttiimmothy"
              className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
            >
              <IoLogoGithub size={28} className="dark:text-gray-50" />
            </Link>
            <Link
              target="_blank"
              href="https://gitlab.com/ttiimmothy"
              className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
            >
              <IoLogoGitlab size={28} className="dark:text-gray-50" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/timothyurl/"
              className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
            >
              <IoLogoLinkedin size={28} className="dark:text-gray-50" />
            </Link>
            <Link
              target="_blank"
              href="mailto:timothyemail805@gmail.com"
              className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
            >
              <IoMail size={28} className="dark:text-gray-50" />
            </Link>
            <Link
              target="_blank"
              href="/timothy_resume.pdf"
              className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
            >
              <BiSolidFilePdf size={28} className="dark:text-gray-50" />
            </Link>
            <ThemeToggler />
          </div>
        </div>
      </nav>
      <nav
        className={`visible lg:invisible fixed top-0 left-0 w-full flex justify-center ${lightBackground} ${
          scrolled && `${!showMobileMenu && "shadow-lg"} opacity-90`
        } px-5 z-40 dark:${darkBackground}`}
      >
        <div className="relative w-[90vw] mx-auto py-4 flex items-center justify-between">
          <div className="dark:text-white">
            <NavButton id="home" label="Timothy" />
          </div>
          <div ref={wrapperRef}>
            <NavMobileMenuIcon
              toggleMenu={setShowMobileMenu}
              menuOpen={showMobileMenu}
            />
            <div
              className={`fixed top-0 right-0 h-screen w-aside flex justify-center items-center flex-col ${lightBackground} dark:${darkBackground} gap-4 z-50 shadow-aside-width ${
                showMobileMenu
                  ? "visible translate-x-0"
                  : "invisible translate-x-[100vw]"
              } navbar-menu-animation`}
            >
              <div className="absolute top-5 left-10">
                <ThemeToggler />
              </div>
              <NavButton id="home" label="Home" />
              <NavButton id="about" label="About" />
              <NavButton id="experience" label="Experience" />
              <NavButton id="projects" label="Projects" />
              <NavButton id="contact" label="Contact" />
              <Link
                target="_blank"
                href="/timothy_resume.pdf"
                className="flex relative items-center p-1.5 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
