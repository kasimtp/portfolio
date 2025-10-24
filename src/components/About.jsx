import React from "react";
import { motion } from "framer-motion";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import NextJs from "../assets/NextJs.png";

const skills = [
  { img: Html, label: "HTML", level: 95 },
  { img: Css, label: "CSS", level: 90 },
  { img: Javascript, label: "JavaScript", level: 88 },
  { img: ReactLogo, label: "React", level: 92 },
  { img: ReduxLogo, label: "Redux", level: 80 },
  { img: Tailwind, label: "Tailwind CSS", level: 93 },
  { img: Bootstrap, label: "Bootstrap", level: 85 },
  { img: NodeLogo, label: "Node.js", level: 87 },
  { img: Express, label: "Express.js", level: 84 },
  { img: Mongodb, label: "MongoDB", level: 86 },
  { img: NextJs, label: "Next.js", level: 83 },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="text-white font-sans py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #0e1628, #101a30, #0e1628)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-sm text-cyan-400 font-semibold uppercase tracking-widest">
            About Me
          </h2>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
            Hi, I’m Kasim
          </h1>
          <p className="mt-4 text-sm sm:text-xl text-gray-300 max-w-2xl mx-auto">
            A Full-Stack Developer specializing in the MERN Stack, REST APIs,
            and responsive design — focused on clean, performant code and modern UI.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Journey Section */}
          <motion.div
            className="bg-[#1f2a3a]/70 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">
              I started as a curious learner exploring how websites and
              backends work. Today, I design and build full-stack applications
              with React, Node.js, and MongoDB. I’ve built real-world projects
              such as e-commerce apps, dashboards, and booking systems, focusing
              on scalable architecture and intuitive design.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="bg-[#1f2a3a]/70 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-cyan-400 text-center mb-8">
              Skills & Tools
            </h3>
            <div className="space-y-6">
              {skills.map(({ img, label, level }, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={img}
                        alt={label}
                        className="w-8 h-8 rounded-full border border-cyan-500 bg-[#24314a] p-1"
                      />
                      <span className="font-medium text-gray-200 text-sm sm:text-base">
                        {label}
                      </span>
                    </div>
                    <span className="text-cyan-400 text-sm font-semibold">
                      {level}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      transition={{ duration: 1.2, delay: i * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* More About Me */}
        <motion.div
          className="mt-16 bg-[#1f2a3a]/70 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
            More About Me
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">
            Beyond coding, I enjoy experimenting with UI/UX design, improving
            workflows, and staying updated with the latest web technologies. My
            goal is to deliver seamless, visually engaging digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
