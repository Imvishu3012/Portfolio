"use client";
import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative h-screen flex justify-center items-center
     text-white overflow-hidden flex-col"
    >
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/Images/Main.jpeg"
          alt="HeroImage"
          width={150}
          height={150}
          priority
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos ="fade-up"
        />
        <h1  data-aos ="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide ">
          Creating web products, <br />
          brands,<span className="text-cyan-200"> and experiences.</span>{" "}
        </h1>
        <h2 data-aos ="fade-up" data-aos-delay="400" className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          Hi! I&apos;m Vishal - A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "Web Developer"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
                  <Link href="#work">
  <button
    data-aos="fade-up"
    data-aos-delay="600"
    className="mt-6 px-10 py-4 font-medium text-lg transition-all duration-300 rounded-full cursor-pointer
      text-white bg-blue-800 hover:bg-blue-900"
  >
    See My Work{" "}
    <span>
      <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
    </span>
  </button>
</Link>

      </div>
    </div>
  );
};

export default Hero;
