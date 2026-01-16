import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const roles = [
  {
    title: "Member, Organizing Committee",
    org: "Confluence ’25, NIT Kurukshetra",
  },
  {
    title: "Event Coordinator",
    org: "Productathon, Techspardha ’25, NIT Kurukshetra",
  },
];

const Leadership = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Community</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Leadership.</h2>
      </motion.div>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {roles.map((r, index) => (
          <motion.div
            key={`${r.title}-${index}`}
            variants={fadeIn("up", "spring", index * 0.15, 0.6)}
            className='bg-tertiary rounded-2xl p-6 shadow-card'
          >
            <p className='text-white font-semibold text-[18px]'>{r.title}</p>
            <p className='text-secondary text-[14px] mt-2'>{r.org}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Leadership, "leadership");
