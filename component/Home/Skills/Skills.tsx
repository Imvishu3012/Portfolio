"use client";
import React from "react";
import {
  SiAmazonwebservices,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = [
  { name: "JavaScript", icon: <SiJavascript />, percentage: "90%" },
  { name: "React.js", icon: <SiReact />, percentage: "88%" },
  { name: "Next.js", icon: <SiNextdotjs />, percentage: "89%" },
  { name: "TypeScript", icon: <SiTypescript />, percentage: "87%" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, percentage: "90%" },
  { name: "Redux", icon: <SiRedux />, percentage: "89%" },
  { name: "AWS", icon: <SiAmazonwebservices />, percentage: "90%" },
];

const Skill = () => {
  return (
    <div className="text-white pb-16 pt-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {Skills.map((skill, i) => (
          <Tilt
            key={skill.name}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.20}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center
              shadow-lg transition hover:scale-105 hover:shadow-cyan-500/40"
            >
              <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
              <p className="text-2xl font-semibold">{skill.percentage}</p>
              <p>{skill.name}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Skill;
