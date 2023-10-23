import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IoClose,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMenuOutline,
} from "react-icons/io5";
import { BiSolidFilePdf } from "react-icons/bi";

export function Navbar(): JSX.Element {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavButton = ({ id, label }: { id: string; label: string }) => {
    const scrollTo = () => {
      // if (document.getElementById(id) == null) {
      //   return;
      // }
      // document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setShowMobileMenu(false);
    };

    return (
      <button
        type="button"
        className="text-md p-1.5 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
        onClick={scrollTo}
      >
        {/* {id === "home" ? (
          <Link href="/">{label}</Link>
        ) : ( */}
        <Link href={id === "home" ? "/" : `#${id}`}>{label}</Link>
        {/* )} */}
        {/* {label} */}
      </button>
    );
  };

  return (
    <>
      {showMobileMenu && (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center flex-col bg-white dark:bg-[#27374D] gap-4 z-40">
          <NavButton id="home" label="Home" />
          <NavButton id="about" label="About" />
          <NavButton id="experience" label="Experience" />
          <NavButton id="projects" label="Projects" />
        </div>
      )}
      <nav
        className={`invisible lg:visible fixed top-0 left-0 w-full flex justify-center bg-slate-50 px-5 z-40 ${
          scrolled && "shadow-lg opacity-90"
        }`}
      >
        <div className="relative w-[1024px] mx-auto py-4 flex items-center justify-between">
          <div className="invisible lg:visible group group/list flex dark:text-white">
            <NavButton id="home" label="Home" />
            <NavButton id="about" label="About" />
            <NavButton id="experience" label="Experience" />
            <NavButton id="projects" label="Projects" />
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
              href="https://www.linkedin.com/in/timothyurl/"
              className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
            >
              <IoLogoLinkedin size={28} className="dark:text-gray-50" />
            </Link>
            <Link
              target="_blank"
              href="/timothy_resume.pdf"
              className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
            >
              <BiSolidFilePdf size={28} className="dark:text-gray-50" />
            </Link>
          </div>
        </div>
      </nav>
      <nav
        className={`visible lg:invisible fixed top-0 left-0 w-full flex justify-center ${
          showMobileMenu
            ? "bg-white"
            : `bg-slate-50 ${scrolled && "shadow-lg opacity-90"}`
        } px-5 z-40`}
      >
        <div className="relative w-[90vw] mx-auto py-4 flex items-center justify-between">
          <div className="dark:text-white">
            <NavButton id="home" label="Timothy Li" />
          </div>
          <button
            className="relative p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md inline-flex items-center cursor-pointer"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {!showMobileMenu && <IoMenuOutline size={20} />}
            {showMobileMenu && <IoClose size={20} />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
