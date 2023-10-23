import Link from "next/link";
import { BiSolidFilePdf } from "react-icons/bi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export function Footer(): JSX.Element {
  return (
    <footer className="border-t">
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
            href="https://www.linkedin.com/in/timothyurl/"
            className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
          >
            <IoLogoLinkedin size={28} className="dark:text-gray-50" />
          </Link>
          {/* <Link
          target="_blank"
          href="mailto:tsangmartin1225@gmail.com"
          className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
        >
          <IoMail size={28} className="dark:text-gray-50" />
        </Link> */}
          <Link
            target="_blank"
            href="/timothy_resume.pdf"
            className="relative flex items-center p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
          >
            <BiSolidFilePdf size={28} className="dark:text-gray-50" />
          </Link>
        </div>
        <p>
          Copyright ©{" "}
          <Link
            target="_blank"
            href="https://github.com/ttiimmothy"
            className="hover:text-gray-200 dark:hover:text-gray-600"
          >
            Timothy Li
          </Link>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
