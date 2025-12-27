import React from "react";
import { motion } from "framer-motion";
import photonew from "../assets/photonew.png";

const Hero = () => {
  return (
    <section
      className="font-body text-white border-b border-gray-900 lg:h-[900px] overflow-hidden"
      style={{
        background: "linear-gradient(to right, #0e1628, #1a2233, #0e1628)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col-reverse lg:mt-28 lg:flex-row items-center justify-between gap-10">

          {/* LEFT SIDE */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 lg:space-y-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-cyan-400 tracking-wide animate-pulse">
                Kasim
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              MERN Stack Developer & Designer
            </motion.p>

            <motion.p
              className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              I’m a passionate web developer with expertise in React, Next.js,
              and modern web technologies. I love building beautiful,
              performant websites that solve real-world problems.
            </motion.p>

            {/* DOWNLOAD CV BUTTON */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              <a
                href="https://drive.google.com/file/d/1mDZ7HpzlTO4DWSrhIOcztu6kFkM-FiPF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading bg-cyan-500 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold tracking-wide hover:bg-cyan-400 transition duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={photonew}
              alt="Kasim"
              className="h-64 sm:h-72 md:h-80 lg:h-[45vh] rounded-2xl cursor-pointer hover:scale-105 transition duration-300"
              onClick={() =>
                window.open("https://github.com/kasimtp", "_blank")
              }
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
