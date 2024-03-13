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
  fluentui,
  java,
  next,
  openrice_canada,
  openrice_canada_more_features,
  personal_portfolio_website,
  react,
  reactbootstrap,
  reactrouter,
  redux,
  spring,
  tailwind,
  task_management_application,
  ttc_refactor,
  vite,
  nodejs,
  nestjs,
} from "@/assets";
import styles from "./projectsSection.module.css";

const ProjectStack: React.FC<{ stack: string; link: string | undefined }> = ({
  stack,
  link,
}) => {
  let stackImage;
  switch (stack) {
    case "react":
      stackImage = react;
      break;
    case "tailwind":
      stackImage = tailwind;
      break;
    case "vite":
      stackImage = vite;
      break;
    case "fluentui":
      stackImage = fluentui;
      break;
    case "redux":
      stackImage = redux;
      break;
    case "reactrouter":
      stackImage = reactrouter;
      break;
    case "next":
      stackImage = next;
      break;
    case "java":
      stackImage = java;
      break;
    case "spring":
      stackImage = spring;
      break;
    case "reactbootstrap":
      stackImage = reactbootstrap;
      break;
    case "nodejs":
      stackImage = nodejs;
      break;
    case "nestjs":
      stackImage = nestjs;
      break;
  }

  return link ? (
    <Link href={link} target="_blank">
      <Image
        src={stackImage}
        alt="stack"
        width={20}
        height={20}
        className={`h-[28px] w-auto object-cover ${
          (stackImage === fluentui || stackImage === reactrouter) &&
          "p-0.5 rounded-sm dark:bg-zinc-800"
        }`}
      />
    </Link>
  ) : (
    <Image
      src={stackImage}
      alt="stack"
      width={20}
      height={20}
      className="h-[28px] w-auto object-cover"
    />
  );
};

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
    case "openrice_canada_more_features":
      projectImage = openrice_canada_more_features;
      break;
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      key={project.name}
      className={`relative border-2 border-gray-100 rounded-lg shadow-xl ${
        project.name === "Openrice Canada (more features)"
          ? "min-h-[470px] sm:min-h-[430px] lg:min-h-[470px]"
          : project.name === "Openrice Canada"
          ? "min-h-[430px] lg:min-h-[470px]"
          : "min-h-[390px] lg:min-h-[430px]"
      } mx-3 md:mx-0 dark:shadow-dark-project-card`}
    >
      {projectImage && (
        <div
          className={`h-[160px] w-full rounded-tl-lg rounded-tr-lg ${styles["project-image-container"]} flex overflow-hidden`}
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
                className={`h-[100%] w-[100%] object-cover cursor-pointer ${styles["project-image-hover"]}`}
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
          className={`absolute pr-4 ${
            project.name === "Openrice Canada (more features)"
              ? "project-section-more-features-openrice-sm:bottom-14 md:bottom-[5.4rem] project-section-more-features-openrice-md:bottom-14 lg:bottom-[5.4rem] bottom-[5.4rem]"
              : project.name === "Openrice Canada"
              ? "project-section-openrice-sm:bottom-14 md:bottom-[5.4rem] project-section-openrice-md:bottom-14 lg:bottom-[5.4rem] bottom-[5.4rem]"
              : project.backendGithubLink
              ? "md:bottom-[5.4rem] bottom-14"
              : "bottom-14"
          } flex flex-wrap gap-4`}
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
          {project.githubLink && project.backendGithubLink ? (
            <Link
              href={project.githubLink}
              className="self-start text-sm bg-slate-500 hover:bg-slate-600 text-white px-3 py-1 rounded-lg flex items-center gap-1"
              target="_blank"
            >
              <IoLogoGithub size={20} />
              Source Code 1
            </Link>
          ) : (
            project.githubLink &&
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
          )}
          {project.backendGithubLink && (
            <Link
              href={project.backendGithubLink}
              className="self-start text-sm bg-slate-500 hover:bg-slate-600 text-white px-3 py-1 rounded-lg flex items-center gap-1"
              target="_blank"
            >
              <IoLogoGithub size={20} />
              Source Code 2
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${utilStyles.sectionSubText} text-center`}>
          Some Projects that I&apos;ve Built
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectsSection, "projects");
