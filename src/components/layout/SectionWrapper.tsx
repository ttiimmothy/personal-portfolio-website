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
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 dark:text-slate-200`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
