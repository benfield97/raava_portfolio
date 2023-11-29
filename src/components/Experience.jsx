import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      className='w-full sm:w-full green-pink-gradient p-[4px] rounded-[20px] shadow-card'
    >
      <div className='h-full rounded-xl overflow-hidden shadow-lg bg-tertiary p-6 space-y-4'>
        <div className='flex flex-col items-center'>
          <img src={experience.icon} alt='Profile Icon' className='w-36 h-36 rounded-full border-4 border-white' />
          <div className='self-start mt-4'>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          </div>
        </div>

        <ul className='mt-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-secondary text-[14px]'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-start`}>
          About Us.
        </h2>
      </motion.div>

      <div className='mt-24 flex flex-col justify-center sm:justify-center md:justify-start md:flex-row sm:w-full gap-10'>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience);
