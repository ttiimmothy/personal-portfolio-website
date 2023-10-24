import Link from "next/link";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Image from "next/image";
import projects from "@/constants/projects.json";
import { IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/components/utils/motions";
import { styles } from "@/components/utils/styles";
import { Project } from "@/interface/Project";
import {
  fluentui,
  next,
  personal_website,
  react,
  reactrouter,
  redux,
  tailwind,
  task_manager,
  ttc_refractor,
  vite,
} from "@/assets";

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
  }

  return link ? (
    <Link href={link} target="_blank">
      <Image
        src={stackImage}
        alt="stack"
        width={20}
        height={20}
        className="h-[28px] w-auto object-cover"
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
    case "task_manager":
      projectImage = task_manager;
      break;
    case "ttc_refractor":
      projectImage = ttc_refractor;
      break;
    case "personal_website":
      projectImage = personal_website;
      break;
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      key={project.name}
      className="relative border-2 border-gray-100 rounded-lg shadow-xl min-h-[380px]"
    >
      {projectImage && (
        <Image
          src={projectImage}
          alt="project"
          width={300}
          height={200}
          className="h-[160px] w-full object-cover rounded-tl-lg rounded-tr-lg"
        />
      )}
      <div className="flex flex-col gap-2 p-4">
        <p className="text-xl font-semibold">{project.name}</p>
        <p className="text-sm text-gray-600">{project.description}</p>
        <div className="absolute bottom-16 flex items-center gap-2">
          {project.originLink && (
            <Link
              href={project.originLink}
              className="self-start text-sm bg-slate-500 hover:bg-slate-600 text-white px-3 py-1 rounded-lg"
              target="_blank"
            >
              Try it
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              className="self-start text-sm bg-slate-500 hover:bg-slate-600 text-white px-3 py-1 rounded-lg flex items-center gap-1"
              target="_blank"
            >
              <IoLogoGithub size={20} />
              Source Code
            </Link>
          )}
        </div>
        <div className="absolute bottom-4 flex gap-4">
          {project.stacks.map((stack, index) => (
            <ProjectStack
              stack={stack}
              key={index}
              link={project.stackLinks[stack]}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
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
