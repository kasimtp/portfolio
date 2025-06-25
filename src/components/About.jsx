import React from 'react';
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
  { img: Html, label: "HTML" },
  { img: Css, label: "CSS" },
  { img: Javascript, label: "JavaScript" },
  { img: ReactLogo, label: "React" },
  { img: ReduxLogo, label: "Redux" },
  { img: Tailwind, label: "Tailwind CSS" },
  { img: Bootstrap, label: "Bootstrap" },
  { img: NodeLogo, label: "Node.js" },
  { img: Mongodb, label: "MongoDB" },
  { img: Express, label: "Express.js" },
  { img: NextJs, label: "Next.js" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="text-white font-sans py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(to right, #0e1628, #1a2233, #0e1628)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-sm text-cyan-400 font-semibold uppercase tracking-widest">
            About Me
          </h2>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-white">
            Hi, I’m Kasim
          </h1>
          <p className="mt-4 text-sm sm:text-xl text-gray-300 max-w-2xl mx-auto">
            A Full-Stack Developer skilled in MERN Stack, Firebase, and REST
            APIs — passionate about clean code, real-world projects, and
            responsive, user-friendly design.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* My Journey */}
          <motion.div
            className="bg-[#1f2a3a] p-6 sm:p-8 rounded-2xl shadow-lg"
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
              I began my development journey with a strong curiosity to
              understand how web applications work behind the scenes. Over time,
              I built a solid foundation in the MERN stack, focusing on
              full-stack development with technologies like MongoDB, Express.js,
              React.js, and Node.js. Throughout my learning and internship
              experience, I created real-world projects such as e-commerce
              platforms, portfolio builders, hospital online booking systems,
              and To-do list applications, integrating authentication, RESTful
              APIs, and modern UI design using Tailwind CSS and responsive
              frameworks. My passion lies in writing clean, scalable code and
              turning ideas into functional, user-friendly applications.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="bg-[#1f2a3a] p-6 sm:p-8 rounded-2xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold  text-cyan-400 text-center mb-6">
              Skills & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-[27px]">
              {skills.map(({ img, label }, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 border border-gray-600 rounded-lg bg-[#2a3548] w-full sm:w-auto hover:shadow-cyan-500/20 hover:shadow transition duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <img
                    src={img}
                    alt={label}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-sm font-medium text-gray-200">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* More About Me */}
        <motion.div
          className="mt-16 bg-[#1f2a3a] p-6 sm:p-8 rounded-2xl shadow-lg"
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
            Outside of coding, I love exploring new tools and learning about
            UI/UX trends. I'm passionate about sharing knowledge, building
            real-world projects, and continuously improving my skills through
            open-source and tutorials.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
