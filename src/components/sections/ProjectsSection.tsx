import Link from "next/link";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Image from "next/image";
import projects from "@/constants/projects.json";
import { IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/components/utils/motions";
import { styles as utilStyles } from "@/components/utils/styles";
import { Project } from "@/interfaces/Project";
import {
  openrice_canada,
  personal_portfolio_website,
  task_management_application,
  ttc_refactor,
} from "@/assets";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { ProjectStack } from "@/components/ProjectStack";
import MoreProjectCard from "../ProjectCard";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  let projectImage;
  switch (project.backdropImage) {
    case "task_management_application":
      projectImage = task_management_application;
      break;
    case "ttc_refactor":
      projectImage = ttc_refactor;
      break;
    case "personal_portfolio_website":
      projectImage = personal_portfolio_website;
      break;
    case "openrice_canada":
      projectImage = openrice_canada;
      break;
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      key={project.name}
      className="relative border-2 border-gray-100 rounded-lg shadow-xl min-h-[390px] lg:min-h-[430px] max-w-[400px] mx-3 md:mx-0 dark:shadow-dark-project-card"
      //   ${project.name === "Openrice Canada (more features)"
      //     ? "min-h-[470px] sm:min-h-[430px] lg:min-h-[470px]"
      //     : project.name === "Openrice Canada"
      //     ? "min-h-[430px] lg:min-h-[470px]"
      //     : "min-h-[390px] lg:min-h-[430px]"
      // }`
    >
      {projectImage && (
        <div
          className={
            "h-[160px] w-full rounded-tl-lg rounded-tr-lg project-image-container flex overflow-hidden"
          }
        >
          {project.originLink ? (
            <Link
              href={project.originLink}
              className="w-[100%] h-[100%]"
              target="_blank"
            >
              <Image
                src={projectImage}
                alt="project"
                width={300}
                height={200}
                className={
                  "h-[100%] w-[100%] object-cover cursor-pointer project-image-hover"
                }
                priority
              />
            </Link>
          ) : (
            <Image
              src={projectImage}
              alt="project"
              width={300}
              height={200}
              className={`h-[100%] w-[100%] object-cover`}
              priority
            />
          )}
        </div>
      )}
      <div className="flex flex-col gap-2 p-4">
        <div className="text-xl font-semibold">{project.name}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {project.description}
        </div>
        <div
          className="absolute pr-4 bottom-14 flex flex-wrap gap-4"
          //  ${project.name === "Openrice Canada (more features)"
          //   ? "project-section-more-features-openrice-sm:bottom-14 md:bottom-[5.4rem] project-section-more-features-openrice-md:bottom-14 lg:bottom-[5.4rem] bottom-[5.4rem]"
          //   : project.name === "Openrice Canada"
          //   ? "project-section-openrice-sm:bottom-14 md:bottom-[5.4rem] project-section-openrice-md:bottom-14 lg:bottom-[5.4rem] bottom-[5.4rem]"
          //   : project.backendGithubLink
          //   ? "md:bottom-[5.4rem] bottom-14"
          //   : "bottom-14"
          // }
        >
          {project.stacks.map((stack, index) => (
            <ProjectStack
              stack={stack}
              key={index}
              link={project.stackLinks[stack]}
            />
          ))}
        </div>
        <div className="absolute bottom-4 flex items-center gap-2 flex-wrap pr-4">
          {project.originLink && (
            <Link
              href={project.originLink}
              className="self-start text-sm bg-slate-500 hover:bg-slate-600 text-white px-3 py-1 rounded-lg"
              target="_blank"
            >
              Try it
            </Link>
          )}
          {project.githubLink &&
            (project.backendGithubLink ? (
              <>
                <Link
                  href={project.githubLink}
                  className="self-start text-sm bg-slate-500 hover:bg-slate-600 text-white px-3 py-1 rounded-lg flex items-center gap-1"
                  target="_blank"
                >
                  <IoLogoGithub size={20} />
                  Source Code 1
                </Link>
                <Link
                  href={project.backendGithubLink}
                  className="self-start text-sm bg-slate-500 hover:bg-slate-600 text-white px-3 py-1 rounded-lg flex items-center gap-1"
                  target="_blank"
                >
                  <IoLogoGithub size={20} />
                  Source Code 2
                </Link>
              </>
            ) : (
              !project.backendGithubLink && (
                <Link
                  href={project.githubLink}
                  className="self-start text-sm bg-slate-500 hover:bg-slate-600 text-white px-3 py-1 rounded-lg flex items-center gap-1"
                  target="_blank"
                >
                  <IoLogoGithub size={20} />
                  Source Code
                </Link>
              )
            ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${utilStyles.sectionSubText} text-center`}>
          Some Projects that I&apos;ve Built
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20">
        {projects
          .filter((_, index) => index < 3)
          .map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
              index={index}
            />
          ))}
        {showMoreProjects &&
          projects
            .filter((_, index) => index >= 3)
            .map((project, index) => (
              <MoreProjectCard
                key={`project-${index}`}
                project={project}
                index={index}
              />
            ))}
      </div>
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
