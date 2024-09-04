import Link from "next/link";
import Image from "next/image";
import {
  fluentui,
  java,
  next,
  react,
  reactbootstrap,
  reactrouter,
  redux,
  spring,
  tailwind,
  vite,
  nodejs,
  nestjs,
} from "@/assets";

export const ProjectStack: React.FC<{
  stack: string;
  link: string | undefined;
}> = ({ stack, link }) => {
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
