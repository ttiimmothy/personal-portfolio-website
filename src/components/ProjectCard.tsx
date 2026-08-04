import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { Project } from "@/interfaces/Project";
import {
  openrice_canada,
  personal_portfolio_website,
  task_management_application,
  ttc_refactor,
  expense_splitter,
  fitness_habit_tracker
} from "@/assets";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/utils/motions";
import { cn } from '@/utils/classNames';

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
    case "expense_splitter":
      projectImage = expense_splitter;
      break;
    case "fitness_habit_tracker":
      projectImage = fitness_habit_tracker;
      break;
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      key={project.name}
      className={cn(
        "relative border-2 border-gray-100 rounded-lg shadow-xl min-h-[390px] lg:min-h-[430px] max-w-[400px] mx-3 md:mx-0",
        "bg-light-bg dark:bg-dark-bg",
        "dark:shadow-dark-project-card",
        "bg-color-transition"
      )}
    >
      {projectImage && (
        <div
          className={`h-[160px] w-full rounded-tl-lg rounded-tr-lg project-image-container flex overflow-hidden`}
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
                className={`h-[100%] w-[100%] object-cover cursor-pointer project-image-hover`}
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
        <div className="absolute pr-4 bottom-14 flex flex-wrap gap-1.5">
          {project.stacks && project.stacks.map((stack, index) => (
            <span
              key={index}
              className="rounded-full border dark:border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs dark:text-neutral-300"
            >
              {stack}
            </span>
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

export default ProjectCard;
