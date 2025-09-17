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
import Tilt from "react-parallax-tilt";    //Installed React Tilt Component from Web

const Skills = [
  {
    name: "Javscript",
    icon: <SiJavascript />,
    percentage: "90%",
  },
  {
    name: "React.Js",
    icon: <SiReact />,
    percentage: "88%",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    percentage: "89%",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    percentage: "87%",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    percentage: "90%",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    percentage: "89%",
  },{
    name: "AWS",
    icon: <SiAmazonwebservices/>,
    percentage: "90%",
  },

];

const Skill = () => {
  return (
    <div className="text-white pb-16 pt-16">
      <h1 className="text-center text-2xl md:text-4xl xl:5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {Skills.map((skill, i) => {
          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i* 20}
                className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center
              shadow-lg transition hover:scale-105"
              >
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-2xl font-semibold">{skill.percentage}</p>
                <p className="">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
