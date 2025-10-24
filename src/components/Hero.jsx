import React from "react";
import { motion } from "framer-motion";
import githubqr from "../assets/githubqr.png";

const Hero = () => {
  return (
    <section
      className="text-white border-b border-gray-900 lg:h-[900px] font-sans overflow-hidden"
      style={{
        background: "linear-gradient(to right, #0e1628, #1a2233, #0e1628)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col-reverse lg:mt-28 lg:flex-row items-center justify-between gap-10">
          
          {/* Left Side */}
          <motion.div
            className="w-full lg:w-1/2 lg:space-y-10 space-y-6 text-center lg:text-left px-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-cyan-400 animate-pulse">Kasim</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Mern Stack Developer & Designer
            </motion.p>

            <motion.p
              className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              I’m a passionate web developer with expertise in React, Next.js,
              and modern web technologies. I love building beautiful, performant
              websites that solve real-world problems.
            </motion.p>

            <motion.a
              href="https://drive.google.com/file/d/1w3vNUUtrf62WYobKhZKHPJW5xBOsu5LG/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-cyan-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="cursor-pointer">Download CV</p>
            </motion.a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={githubqr}
              alt="QR Code"
              className="h-64 sm:h-72 md:h-80 lg:h-[45vh] rounded-2xl shadow-[0_0_60px_10px_rgba(6,182,212,0.4)]"
              whileHover={{
                scale: 1.05,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.5 },
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
