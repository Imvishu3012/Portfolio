import React from "react";
import ResumeCard from "./ResumeCard";
import { FaBriefcase, FaReact, FaGraduationCap } from "react-icons/fa";
import { BiCertification } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* WORK EXPERIENCE */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-300">Experience</span>
          </h1>
          <div className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center">
            <ResumeCard 
              Icon={FaBriefcase} 
              role="Business Development Trainee" 
              company="Intellipaat Software Solutions"
              date="Jun 2023 - Dec 2023"
              description="Gained experience in client relations, technical solution presentations, and business development in EdTech sector with focus on achieving performance-based targets."
            />
            <ResumeCard 
              Icon={FaReact} 
              role="Frontend Developer" 
              company="Self-taught"
              date="Jan 2024 - Present"
              description="Building web applications with React, Next.js, TypeScript, and Tailwind CSS, and seeking full-time opportunities to apply and grow my skills in a collaborative environment."
            />
          </div>
        </div>

        {/* EDUCATION & CERTIFICATIONS */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-300">Education</span>
          </h1>
          <div className="mt-10" data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <ResumeCard 
              Icon={FaGraduationCap} 
              role="BTech Computer Science Engineering" 
              company="MIET College"
              date="Aug 2019 - Jun 2023"
              description="Comprehensive foundation in computer science fundamentals, data structures, algorithms, and software development practices with hands-on project experience."
            />
            <ResumeCard 
              Icon={BiCertification} 
              role="Great Learning Certificate" 
              date="Mar 2024 - Aug 2024"
              description="Specialized technical training program enhancing development skills, industry knowledge, and modern programming practices for professional growth."
            />
            <ResumeCard 
              Icon={FaReact} 
              role="Namaste React Course" 
              company="by Akshay Saini"
              date="Nov 2024 - Apr 2025"
              description="Advanced React.js course covering modern practices, hooks, context, performance optimization, testing, and real-world application development by industry expert."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;