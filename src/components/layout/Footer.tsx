import Link from "next/link";
import { BiSolidFilePdf } from "react-icons/bi";
import {
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";
import { cn } from "@/utils/classNames";

const Footer: React.FC = () => {
  return (
    <footer className={cn("border-t bg-light-bg dark:bg-dark-bg bg-color-transition")}>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center h-24 lg:w-[768px] lg:mx-auto">
        <div className="flex items-center gap-2">
          <Link
            target="_blank"
            href="https://github.com/ttiimmothy"
            className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
          >
            <IoLogoGithub size={28} className="dark:text-gray-50" />
          </Link>
          <Link
            target="_blank"
            href="https://gitlab.com/ttiimmothy"
            className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
          >
            <IoLogoGitlab size={28} className="dark:text-gray-50" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/timothyurl/"
            className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
          >
            <IoLogoLinkedin size={28} className="dark:text-gray-50" />
          </Link>
          <Link
            target="_blank"
            href="mailto:timothyemail805@gmail.com"
            className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
          >
            <IoMail size={28} className="dark:text-gray-50" />
          </Link>
          <Link
            target="_blank"
            href="/Timothy Resume.pdf"
            className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
          >
            <BiSolidFilePdf size={28} className="dark:text-gray-50" />
          </Link>
        </div>
        <p className="dark:text-slate-50">
          Copyright ©{" "}
          <Link
            target="_blank"
            href="https://github.com/ttiimmothy"
            className="hover:text-gray-200 dark:hover:text-gray-600"
          >
            Timothy
          </Link>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
