import { Experience } from "@/interfaces/Experience";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  hkust,
  atkins,
  meinhardt,
  ecosa,
  tecky,
  cable,
  storeforce,
} from "@/assets";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motions";
import { styles } from "../utils/styles";
import experiences from "@/constants/experiences.json";

import Link from "next/link";
import SectionWrapper from "../layout/SectionWrapper";

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  let companyIcon;
  switch (experience.icon) {
    case "hkust":
      companyIcon = hkust;
      break;
    case "atkins":
      companyIcon = atkins;
      break;
    case "meinhardt":
      companyIcon = meinhardt;
      break;
    case "ecosa":
      companyIcon = ecosa;
      break;
    case "tecky":
      companyIcon = tecky;
      break;
    case "cable":
      companyIcon = cable;
      break;
    case "storeforce":
      companyIcon = storeforce;
      break;
  }

  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundColor: experience.company_name ? "#fff" : "transparent",
        color: "#1d1836",
      }}
      contentArrowStyle={{ borderRight: "7px solid #3c3e46" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg ? experience.iconBg : "#fff",
      }}
      icon={
        companyIcon && (
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src={companyIcon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        )
      }
    >
      <div>
        <h3 className="text-[#808080] text-[24px] font-bold">
          {experience.title}
        </h3>
        {experience.company_name && (
          <Link href={experience.company_url} target="_blank">
            <p className="text-secondary text-[16px] font-semibold tw-m-0 hover:text-secondary-hover">
              {experience.company_name}
            </p>
          </Link>
        )}
      </div>
      {experience.points.length > 0 && (
        <ul
          className={`mt-5 list-disc ${
            experience.points.length > 1 && "ml-5"
          } space-y-2`}
        >
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className={`text-gray-800 text-[14px] ${
                experience.points.length > 1 && "pl-1"
              } ${experience.points.length === 1 && "list-none"}`}
            >
              {point}
            </li>
          ))}
        </ul>
      )}
      {experience.highlights && (
        <div className="text-secondary text-[14px] font-semibold mt-4">
          {experience.highlights}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Experience</p>
        <p className={`${styles.sectionText} dark:text-slate-50 text-center`}>
          Journey Begins
        </p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#dadada">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(ExperienceSection, "experience");
