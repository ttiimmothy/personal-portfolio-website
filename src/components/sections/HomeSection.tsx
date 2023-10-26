import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import roles from "@/constants/roles.json";
import Link from "next/link";

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-4xl dark:text-white font-bold tracking-wider whitespace-nowrap">
            Hi There I am Timothy
          </p>
          <div className="dark:text-white font-bold tracking-wider flex flex-col gap-3">
            <div className="flex gap-2 text-2xl">
              I&apos;m a
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
