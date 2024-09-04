import SectionWrapper from "@/components/layout/SectionWrapper";
import projects from "@/constants/projects.json";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "@/components/utils/motions";
import { styles as utilStyles } from "@/components/utils/styles";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import ProjectCard from "../ProjectCard";

const ProjectsSection: React.FC = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${utilStyles.sectionSubText} text-center`}>
          Some Projects that I&apos;ve Built
        </p>
      </motion.div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20"
      >
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            index={index}
          />
        ))}
        {showMoreProjects &&
          projects.slice(3).map((project, index) => (
            <ProjectCard
              key={`project-${index + 3}`}
              project={project}
              index={index}
            />
          ))}
      </motion.div>
      {!showMoreProjects && (
        <motion.div
          className="w-full flex flex-col items-center pt-10 cursor-pointer"
          onClick={() => {
            setShowMoreProjects(true);
          }}
          variants={fadeIn("", "", 1.1, 1)}
        >
          <div>more</div>
          <motion.div
            animate={{ y: [0, 20], opacity: [1, 0] }}
            transition={{
              ease: "easeIn",
              repeat: Infinity,
              duration: 1,
              repeatDelay: 0.5,
            }}
          >
            <IoIosArrowDown size={30} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(ProjectsSection, "projects");
