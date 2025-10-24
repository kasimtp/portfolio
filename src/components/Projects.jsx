import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectJson = [
    {
      title: 'E-Commerce Watch Store',
      desc: 'A modern online watch store featuring stylish product displays, cart, login/signup authentication, and payment gateway integration using React, Tailwind, and Vite.',
      github: '#',
      tech: ['React', 'Tailwind', 'Vite', 'Stripe'],
    },
    {
      title: 'Watch Store',
      desc: 'A full-featured e-commerce platform for premium furniture shopping with dynamic product listings, category filtering, cart management, and secure payment.',
      github: '#',
      tech: ['React', 'Tailwind', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Hospital Management',
      desc: 'Responsive hospital website with online doctor booking, secure doctor accounts, and admin functionality.',
      github: '#',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    },
    {
      title: 'To-Do List App',
      desc: 'Interactive to-do list application with local storage support for persistence.',
      github: '#',
      tech: ['React', 'Tailwind', 'LocalStorage'],
    },
    {
      title: 'Webelite Builder',
      desc: 'Responsive business website for a web development agency using Next.js and Tailwind.',
      github: '#',
      tech: ['Next.js', 'Tailwind', 'SEO'],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-20 px-4 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-2">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some recent work showcasing my full-stack development skills.
          </p>
        </motion.div>

        <div className="relative flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory">
          {projectJson.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[400px] snap-start bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg relative group transition-all duration-300"
            >
              {/* Overlay Animation */}
              <motion.div
                className="absolute inset-0 bg-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
              ></motion.div>

              <h3 className="text-xl font-semibold text-cyan-300 mb-2 z-10 relative">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 z-10 relative">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 z-10 relative">
                {item.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="bg-cyan-700/40 text-xs sm:text-sm text-white px-3 py-1 rounded-full hover:bg-cyan-500/60 transition"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <a
                href={item.github !== '#' ? item.github : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-md transition ${
                  item.github !== '#'
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white z-10 relative'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed z-10 relative'
                }`}
              >
                <FaGithub /> GitHub
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-4 text-gray-500 text-sm text-center">
          Scroll horizontally to view more projects
        </p>
      </div>
    </section>
  );
};

export default Projects;
