"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";

// Projects array
const projects = [
  {
    title: "Netflix GPT",
    image: "/Images/NetflixgptPic.png",
    url: "https://netflix-gpt-one-mu.vercel.app/",
    tech: "ReactJS • Firebase • Redux • OpenAI • Tailwind CSS",
  },
  {
    title: "Admin Dashboard",
    image: "/Images/DashboardPic.png",
    url: "https://dashboard-pi-puce.vercel.app/",
    tech: "NextJs • TypeScript • ShadCN UI",
  },
  {
    title: "Food Ordering App",
    image: "/Images/FoodAppPic.png",
    url: "https://urban-bites-iota.vercel.app/",
    tech: "ReactJs • Redux Toolkit • Rest APIs",
  },
  {
    title: "Portfolio",
    image: "/Images/PortfolioPic.png",
    url: "https://portfolio-uwn1.vercel.app/",
    tech: "Next.JS • TypeScript • Framer Motion • Tailwind CSS"
  },
];

// Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.4 } },
};

const Projects: React.FC = () => {
  return (
    <div className="pt-16 pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white"
      >
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </motion.h1>

      <motion.div
        className="w-[70%] mx-auto grid grid-cols-1 gap-10 mt-16 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group"
          >
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="cursor-pointer overflow-hidden rounded-lg shadow-md shadow-cyan-500/10 transition-shadow group-hover:shadow-cyan-500/30"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  className="overflow-hidden rounded-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg"
                    width={800}
                    height={800}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h1 className="mt-4 text-xl sm:text-2xl text-white font-semibold group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h1>
                <h1 className="pt-2 font-medium text-white/80">
                  {project.tech}
                </h1>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
