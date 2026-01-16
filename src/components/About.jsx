import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    scale={1.05}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="service-icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intro</p>
        <h2 className={styles.sectionHeadText}>Who I Am.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[17px] leading-[30px] flex-1 min-w-[280px]"
      >
        I'm a Computer Engineering undergrad at NIT Kurukshetra (CGPA: 8.70)
        who builds full-stack, product-focused web apps and AI-powered
        features. I've shipped production-grade backend validation and
        compliance workflows during my internship at a GRC startup
        (Solsphere.AI), and I also contribute to open source (Vercel/commerce).
        I enjoy combining strong CS fundamentals (DSA, OOP, OS, DBMS) with
        modern stacks like Next.js/React, Node.js, Tailwind, and practical ML
        tooling (TensorFlow, Keras, OpenCV) to deliver clean, reliable, and
        scalable solutions.
      </motion.p>


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");
