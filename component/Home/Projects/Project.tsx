import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl text-white md:text-4xl lg:text-5xl font-bold">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 gap-10 mt-16 md:grid-cols-2">
      {/* First Project */}
      <Link
        href="https://netflix-gpt-one-mu.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="cursor-pointer"
        >
          <Image
            src="/Images/NetflixProjectImage.png"
            alt="Netflix GPT"
            className="rounded-lg"
            width={800}
            height={770}
          />
          <h1 className="mt-4 text-xl sm:text-2xl text-white font-semibold">
            Netflix GPT
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            ReactJS • Firebase • Redux • OpenAI • Tailwind CSS
          </h1>
        </div>
      </Link>

      {/* Second Project */}
      <Link
        href="https://urban-bites-iota.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="cursor-pointer"
        >
          <Image
            src="/Images/FoodApp.png"
            alt="Food App"
            className="rounded-lg"
            width={800}
            height={800}
          />
          <h1 className="mt-4 text-xl sm:text-2xl text-white font-semibold">
            Food App
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            React • Redux • Tailwind
          </h1>
        </div>
      </Link>

      {/* Third Project */}
      <Link
        href="https://your-interest-calculator.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
          className="cursor-pointer"
        >
          <Image
            src="/Images/InterestProject.png"
            alt="Interest Calculator"
            className="rounded-lg"
            width={800}
            height={800}
          />
          <h1 className="mt-4 text-xl sm:text-2xl text-white font-semibold">
            Interest Calculator
          </h1>
          <h1 className="pt-2 font-medium text-white/80">HTML • CSS • JavaScript</h1>
        </div>
      </Link>

      {/* Fourth Project */}
      <Link
        href="https://your-password-generator.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
          className="cursor-pointer"
        >
          <Image
            src="/Images/GeneratorProject.png"
            alt="Password Generator"
            className="rounded-lg"
            width={800}
            height={800}
          />
          <h1 className="mt-4 text-xl sm:text-2xl text-white font-semibold">
            Password Generator
          </h1>
          <h1 className="pt-2 font-medium text-white/80">HTML • CSS • JavaScript</h1>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default Project;
