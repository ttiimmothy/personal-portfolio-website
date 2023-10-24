import { useEffect, useState } from "react";
import { IoChevronUpOutline } from "react-icons/io5";

const ScrollTop: React.FC = () => {
  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 300,
  // });
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

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#home");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        // block: "center",
      });
    }
  };

  return (
    <div className={`${scrolled ? "visible" : "invisible"}`}>
      <div
        className="fixed bottom-10 right-10 cursor-pointer"
        onClick={handleClick}
      >
        <button
          aria-label="scroll back to top"
          className="outline-none bg-contact-button hover:bg-gray-200 w-12 h-12 rounded-full flex justify-center items-center"
        >
          <IoChevronUpOutline size={20} className="dark:text-gray-50" />
        </button>
      </div>
    </div>
  );
};

export default ScrollTop;
