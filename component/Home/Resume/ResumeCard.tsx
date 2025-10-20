"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  role: string;
  company?: string;
  date?: string;
  description?: string;
  index?: number;
};

const ResumeCard = ({
  Icon,
  role,
  company,
  date,
  description,
  index = 0,
}: Props) => {
  return (
    <motion.div
      className="relative pl-10 pb-10 border-l-2 border-cyan-500/40 last:border-none"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Circle Icon */}
      <div className="absolute -left-[1.1rem] top-1 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center">
        <Icon className="text-white w-4 h-4" />
      </div>

      {/* Content */}
      <div className="bg-[#0f142e]/70 backdrop-blur-md p-5 rounded-lg shadow-md hover:shadow-cyan-800/30 transition-all duration-300">
        <h1 className="text-white text-xl font-semibold">{role}</h1>
        {company && (
          <h2 className="text-cyan-300 font-medium text-sm mt-1">{company}</h2>
        )}
        {date && <p className="text-gray-400 text-sm mt-1">{date}</p>}
        <p className="text-gray-300 mt-3 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ResumeCard;
