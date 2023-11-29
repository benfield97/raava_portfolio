import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  name,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='xs:w-[240px] xs:h-[240px] flex items-center justify-center'
  >
    <div className='mt-1'>
      <div className=''>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='h-full w-full '
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} `}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Who we've worked with.</h2>
        </motion.div>
      </div>
      <div className={` pb-14 ${styles.paddingX} grid grid-cols-4 gap-16 `}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
