import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { PiEye } from "react-icons/pi";

const Projects = () => {
  const projectJson = [
    {
      title: "E-Commerce Store",
      desc: "Modern online furniture store with dynamic products, authentication, cart, and Razorpay payment integration using React, Tailwind, Vite.",
      github: "https://github.com/kasimtp/E-commerce-furniture",
      live: "https://e-commerce-furniture-hhmq.vercel.app/",
      tech: ["React", "Tailwind", "Vite", "Razorpay"],
    },
    {
      title: "Hospital Management",
      desc: "Responsive hospital website with doctor booking, secure authentication, and admin control panel.",
      github: "https://github.com/kasimtp/doctors-frontend",
      live: "https://doctors-two-nu.vercel.app/",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    },
    {
      title: "To-Do List App",
      desc: "Interactive to-do list app with local storage, responsive UI, and smooth animations for productivity.",
      github: "https://github.com/kasimtp/Todolist.git",
      live: "https://kasimtp.github.io/Todolist/",
      tech: ["React", "Tailwind", "LocalStorage"],
    },
    {
      title: "Weather App",
      desc: "Real-time weather forecast app using OpenWeather API, clean UI, responsive design.",
      github: "https://github.com/kasimtp/weather-app",
      live: "https://kasimtp.github.io/weather-app/",
      tech: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio showcasing projects, skills, built with Next.js, Tailwind, and Framer Motion animations.",
      github: "https://github.com/kasimtp/portfolio",
      live: "https://portfoliokasim.vercel.app/",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#0f172a] via-[#16213e] to-[#1e293b] text-white py-24 px-4 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-cyan-400 mb-3">
            My Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Showcasing modern web applications and interactive UI projects with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectJson.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -150 : 150,
                rotate: index % 2 === 0 ? -5 : 5,
                scale: 0.9,
              }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2,
                y: -10,
                boxShadow: "0 25px 50px rgba(6,182,212,0.3)",
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 relative"
            >
              {/* Floating subtle animation */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="flex flex-col h-full"
              >
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base mb-5">
                  {item.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="bg-cyan-700/30 text-xs sm:text-sm text-white px-3 py-1 rounded-full border border-cyan-500/30"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-auto gap-2">
                  <motion.a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-sm sm:text-base font-medium px-4 py-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white transition"
                  >
                    <FaGithub className="text-lg sm:text-xl" /> GitHub
                  </motion.a>

                  {item.live && (
                    <motion.a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-sm sm:text-base font-medium px-4 py-2 rounded-md bg-transparent border border-cyan-400 hover:bg-cyan-500 hover:text-white text-cyan-400 transition"
                    >
                      <PiEye className="text-lg sm:text-xl" /> Live
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
