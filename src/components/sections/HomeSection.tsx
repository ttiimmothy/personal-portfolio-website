import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import roles from "@/constants/roles.json";
import Link from "next/link";
import {BsLinkedin} from "react-icons/bs";
import {IoLogoGithub} from "react-icons/io5";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-balance text-5xl home-section-sm:text-6xl dark:text-white tracking-tight whitespace-nowrap">
          Software Engineer building <br/> production-ready products <br/> with AI
          </p>
          <div className="dark:text-gray-600 tracking-wider flex flex-col gap-3">
            <div className="flex gap-2 sm:text-lg">
              I&apos;m Timothy, a
              <div className="text-[#bbccdd]">
                <Typewriter
                  options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
          <a
            className="bg-white hover:bg-white/[0.06] p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full transition cursor-pointer border border-gray-200 dark:border-gray-800 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
            href="https://www.linkedin.com/in/timothyurl/"
            target="_blank"
          >
            <BsLinkedin className="text-blue-500" />
          </a>
          <a
            className="bg-white hover:bg-white/[0.06] p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full hover:text-gray-950 transition cursor-pointer border border-gray-200 dark:border-gray-800 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
            href="https://github.com/ttiimmothy"
            target="_blank"
          >
            <IoLogoGithub className="text-gray-900 dark:text-gray-50" />
          </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-20 lg:bottom-28 mt-40 w-full flex justify-center">
        <Link href="/#about">
          <button
            type="button"
            className="flex justify-center w-8 h-16 border-2 border-[#808080] dark:border-white rounded-full p-1"
          >
            <motion.div
              animate={{ y: [0, 40], opacity: [1, 0] }}
              transition={{
                ease: "easeIn",
                repeat: Infinity,
                duration: 1,
                repeatDelay: 0.5,
              }}
              className="w-4 h-4 bg-secondary dark:bg-white rounded-full"
            />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
