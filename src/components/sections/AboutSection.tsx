// import Image from "next/image";
import skills from "@/constants/skills.json";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/components/utils/motions";
import { styles } from "@/components/utils/styles";
import TechnologyBalls from "@/components/bin/TechnologyBalls";

interface SkillTagProps {
  label: string;
}

const SkillTag = ({ label }: SkillTagProps) => {
  return (
    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-md text-xs whitespace-nowrap">
      {label}
    </span>
  );
};

interface SkillSectionProps {
  title: string;
  skills: string[];
}

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <h1 className="text-sm w-44 md:border-r-[1px] md:border-gray-400 whitespace-nowrap shrink-0">
        {title}
      </h1>
      <div className="flex gap-2">
        {skills.map((skill) => (
          <SkillTag label={skill} key={skill} />
        ))}
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    // <section id="about" className="pt-20 min-h-screen my-4 dark:text-slate-200">
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>About me</p>
        {/* <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2> */}
      </motion.div>
      {/* <motion.div variants={textVariant(0.2)}> */}
      <div className="relative grid grid-cols-1 mt-20 lg:grid-cols-2 lg:gap-4 gap-12 items-center">
        <div className="flex flex-wrap gap-7 justify-center">
          <TechnologyBalls />
        </div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="flex flex-col gap-3"
        >
          <h1 className="text-4xl font-bold">Timothy Li</h1>
          {/* <p className="text-xl font-semibold">A Software Engineer</p> */}
          <p className="my-2  opacity-75 leading-[1.5]">
            Hi, I&apos;m Timothy, a software engineer with a main focus on
            building and maintaining complex web applications. I am legally
            entitled to work in Canada, and currently seeking for any
            opportunities available in Canada.
          </p>
          {skills.map((skill, index) => (
            <SkillSection
              title={skill.title}
              skills={skill.stacks}
              key={index}
            />
          ))}
        </motion.div>
      </div>
      {/* </motion.div> */}
    </>
    // </section>
  );
};

export default SectionWrapper(AboutSection, "about");
