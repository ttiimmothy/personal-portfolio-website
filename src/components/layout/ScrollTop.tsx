import Link from "next/link";
import { useEffect, useState } from "react";
import { IoChevronUpOutline } from "react-icons/io5";

const ScrollTop: React.FC = () => {
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

  return (
    <div className={`${scrolled ? "visible" : "invisible"}`}>
      <Link href="/">
        <div className="fixed bottom-10 right-10 cursor-pointer">
          <button
            aria-label="scroll back to top"
            className="outline-none bg-contact-button hover:bg-gray-200 dark:bg-primary dark:hover:bg-gray-400 w-12 h-12 rounded-full flex justify-center items-center"
          >
            <IoChevronUpOutline size={20} className="dark:text-gray-50" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ScrollTop;
