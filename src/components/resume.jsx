import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Resume = () => {
  const viewLink =
  "https://drive.google.com/file/d/1BaTwxBmbvYJ1ayzWKuXiyn_RZaJzF-jz/view?usp=drive_link";
const downloadLink =
  "https://drive.google.com/uc?export=download&id=1BaTwxBmbvYJ1ayzWKuXiyn_RZaJzF-jz";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black-100 p-6 rounded-2xl shadow-lg text-center mt-10"
    >
      {/* Title */}
      <h3 className="text-white text-lg md:text-xl font-medium mb-4">
         Want a deeper look at my experience?
      </h3>

      {/* Resume Preview with Fade */}
      <div className="relative w-full max-w-xs mx-auto rounded-lg overflow-hidden mb-6 shadow-md">
        <img
          src="/resume-preview.png"
          alt="Resume Preview"
          className="w-full object-cover " // show only top
        />
        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black-100 to-transparent"
        />
      </div>

      {/* Button Row */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={viewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-indigo-500 to-blue-600 py-3 px-6 rounded-xl text-white font-bold shadow-md hover:scale-105 transition-transform inline-flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 15.707a1 1 0 01-1.414 0L6 12.414l1.414-1.414L9 12.586V3h2v9.586l1.586-1.586L14 12.414l-3.293 3.293z" />
          </svg>
          View Resume
        </a>

        <a
          href={downloadLink}
          className="bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-xl text-white font-bold shadow-md hover:scale-105 transition-transform inline-flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 3a1 1 0 011-1h3a1 1 0 011 1v2H4v10h12V5h-4V3a1 1 0 011-1h3a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3z" />
            <path d="M9 9V5h2v4h3l-4 4-4-4h3z" />
          </svg>
          Download Resume
        </a>
      </div>

      <p className="italic text-sm text-secondary mt-6 max-w-xl mx-auto">
        “This resume reflects my journey building scalable, full-stack and AI-powered solutions. Let's build something impactful together.”
      </p>
    </motion.div>
  );
};

export default SectionWrapper(Resume, "resume");
