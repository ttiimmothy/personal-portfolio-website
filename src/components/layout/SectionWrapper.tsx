import React from "react";
import { motion } from "framer-motion";

import { styles } from "@/components/utils/styles";
import { staggerContainer } from "@/components/utils/motions";

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HighOrderComponent() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} md:max-w-7xl md:mx-auto relative z-0 dark:text-slate-200 min-h-screen flex flex-col items-center justify-center`}
        id={idName}
      >
        {/* <span className="hash-span">&nbsp;</span> */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
