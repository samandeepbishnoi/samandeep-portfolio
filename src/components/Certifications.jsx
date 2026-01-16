import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { amazon, micro } from "../assets";

const certifications = [
  {
    title: "Amazon ML Summer School",
    org: "Amazon",
    date: "August 2025",
    link: "https://drive.google.com/file/d/12pSdbWb1Md5Me6sCZ6Dm11QZtY1UhRsC/view?usp=sharing",
    logo: amazon,
  },
  {
    title: "Career Essentials in Generative AI",
    org: "LinkedIn & Microsoft",
    date: "July 2024",
    link: "https://www.linkedin.com/learning/certificates/457faeef4fc48b17855b22afc704a28bb52fa7f0c3b391b6b53773cb5c032bb1",
    logo: micro,
  },
  {
    title: "Career Essentials in Software Development",
    org: "LinkedIn & Microsoft",
    date: "July 2024",
    link: "https://www.linkedin.com/learning/certificates/e666f9b161830c0f73765208a6716fcce8dc1625a79f2698646597050fa8a17f",
    logo: micro,
  },
];

const LogoBadge = ({ src, alt }) => (
  <div className='w-12 h-12 rounded-full bg-black-100 border border-white/10 overflow-hidden flex items-center justify-center'>
    <img src={src} alt={alt} className='w-full h-full object-cover' />
  </div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Credentials</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications.</h2>
      </motion.div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {certifications.map((c, index) => (
          <motion.div
            key={`${c.title}-${index}`}
            variants={fadeIn("up", "spring", index * 0.15, 0.6)}
            className='rounded-2xl'
          >
            <a
              href={c.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group block h-full rounded-2xl bg-tertiary border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]'
            >
              <div className='p-6 text-center'>
                <div className='flex flex-col items-center gap-3'>
                  <LogoBadge src={c.logo} alt={c.org} />
                  <span className='text-[12px] px-3 py-1 rounded-full bg-black-100 text-secondary border border-white/10 whitespace-nowrap'>
                    {c.date}
                  </span>
                </div>

                <div className='mt-5'>
                  <p className='text-white font-bold text-[18px] leading-snug'>
                    {c.title}
                  </p>
                  <p className='text-secondary text-[14px] mt-1'>{c.org}</p>

                  <div className='mt-5 inline-flex items-center justify-center gap-2 text-white text-[14px] font-semibold group-hover:text-[#915EFF] transition-colors'>
                    View credential
                    <span aria-hidden className='text-[16px] leading-none'>
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
