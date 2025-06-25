import React from 'react';
import githubqr from "../assets/githubqr.png";

const Hero = () => {
  return (
    <section
      className="text-white border-b border-gray-900 lg:h-[900px] font-sans"
      style={{
        background: "linear-gradient(to right, #0e1628, #1a2233, #0e1628)",
      }}
    >
      <div className="max-w-screen-xl  mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col-reverse   lg:mt-28 lg:flex-row items-center justify-between gap-10">
          {/* Left Side */}
          <div className="w-full   lg:w-1/2 lg:space-y-10 space-y-6 lg:pb-18 text-center lg:text-left px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hi, I&apos;m <span className="text-cyan-400">Kasim</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium">
              Mern Stack Developer & Designer
            </p>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              I’m a passionate web developer with expertise in React, Next.js,
              and modern web technologies. I love building beautiful, performant
              websites that solve real-world problems.
            </p>

            <a
              href="https://drive.google.com/file/d/1_eHK8PQ0rWRtJXlzG2-HZA6n1ysgaW-w/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-cyan-600 transition duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            <img
              src={githubqr}
              alt="QR Code"
              className="h-64 sm:h-72 md:h-80 lg:h-[45vh] rounded-2xl shadow-[0_0_60px_10px_rgba(6,182,212,0.4)]"
            />
            {/* <img
              src={reactLogo}
              alt="React"
              className="absolute w-10  lg:block hidden sm:w-12 md:w-14 top-4 left-4 rounded-full"
            />
            <img
              src={reduxLogo}
              alt="Redux"
              className="absolute w-10 lg:block hidden sm:w-12 md:w-14 top-0 right-5"
            />
            <img
              src={tailwind}
              alt="Tailwind"
              className="absolute w-10 sm:w-12 lg:block hidden md:w-14 bottom-6 right-4 rounded-full"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
