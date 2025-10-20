"use client";
import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
import { FaBriefcase, FaReact, FaGraduationCap } from "react-icons/fa";
import { BiCertification } from "react-icons/bi";

const Resume = () => {
  return (
    <section className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            My Work <span className="text-cyan-300">Experience</span>
          </h1>

          <ResumeCard
            Icon={FaReact}
            role="Frontend Developer"
            company="Self-taught"
            date="Jan 2024 - Present"
            description="Building web apps using React, Next.js, TypeScript, and Tailwind CSS. Seeking full-time opportunities to apply my skills."
            index={0}
          />
          <ResumeCard
            Icon={FaBriefcase}
            role="Business Development Associate"
            company="Intellipaat Software Solutions"
            date="Jun 2023 - Dec 2023"
            description="Gained experience in client relations, technical solution presentations, and business development in the EdTech sector."
            index={1}
          />
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10 inline-block whitespace-nowrap">
            My Education
            <span className="text-cyan-300"> & Certificates</span>
          </h1>

          <ResumeCard
            Icon={FaReact}
            role="Namaste React"
            company="by Akshay Saini"
            date="Nov 2024 - Apr 2025"
            description="Learned advanced React concepts: hooks, context, performance optimization, testing, and best practices."
            index={0}
          />
          <ResumeCard
            Icon={BiCertification}
            role="JavaScript Projects"
            company="by Great Learning"
            date="Mar 2024 - Aug 2024"
            description="Applied advanced JavaScript concepts to build interactive, state-driven projects showcasing strong command of DOM manipulation."
            index={1}
          />
          <ResumeCard
            Icon={FaGraduationCap}
            role="B.Tech in Computer Science & Engineering"
            company="Meerut Institute of Engineering & Technology"
            date="Aug 2019 - Jun 2023"
            description="Built a strong foundation in programming, data structures, algorithms, and software engineering principles."
            index={2}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
