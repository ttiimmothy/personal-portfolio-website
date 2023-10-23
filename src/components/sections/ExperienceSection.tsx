import { Experience } from "@/interface/Experience";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { meta, shopify, starbucks, tesla } from "@/assets";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motions";
import { styles } from "../utils/styles";
import experiences from "@/constants/experiences.json";
import SectionWrapper from "@/components/layout/SectionWrapper";

import "react-vertical-timeline-component/style.min.css";

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  let companyIcon;
  switch (experience.icon) {
    case "meta":
      companyIcon = meta;
      break;
    case "shopify":
      companyIcon = shopify;
      break;
    case "starbucks":
      companyIcon = starbucks;
      break;
    case "tesla":
      companyIcon = tesla;
      break;
  }

  return (
    <VerticalTimelineElement
      contentStyle={{
        // background: "#1d1836",
        // color: "#fff",
        background: experience.company_name ? "#fff" : "transparent",
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
          <p className="text-secondary text-[16px] font-semibold m-0">
            {experience.company_name}
          </p>
        )}
      </div>
      {experience.points.length > 0 && (
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-gray-800 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      )}
    </VerticalTimelineElement>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Experience</p>
        <p className={`${styles.sectionText} text-center`}>Journey Begins</p>
        {/* <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2> */}
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
