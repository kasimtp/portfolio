import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectJson = [
  {
  title: 'E-Commerce Watch Store',
  desc: 'A modern online watch store featuring stylish product displays, user-friendly cart functionality, login/signup authentication, and payment gateway integration. Designed with performance in mind using React, Tailwind, and Vite.',
  github: '',
  tech: ['React', 'Tailwind', 'Vite', 'Stripe'],
}
,
  {
  title: 'E-Commerce Furniture Store',
  desc: 'A full-featured e-commerce platform for premium furniture shopping. Includes user login/signup, secure payment gateway integration, dynamic product listings with images, category filtering, cart management, and product rating system. Built with a decoupled frontend and backend architecture for scalability.',
  github: '', 
  tech: ['React', 'Tailwind', 'Node.js', 'MongoDB', 'Stripe'],
},

  {
  title: 'Hospital Management',
  desc: 'A fully functional hospital website with dynamic pages and responsive layout. Features include online doctor booking, secure doctor accounts, and admin functionality to add or manage doctors.',
  github: '',
  tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
},

  {
  title: 'To-Do List App',
  desc: 'A responsive and interactive to-do list application where users can add, delete, and mark tasks as completed. Supports local storage for data persistence.',
  github: '',
  tech: ['React', 'Tailwind', 'LocalStorage'],
},

    {
      title: 'Webelite Builder',
      desc: 'A responsive business website for a web development agency.',
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
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Projects</h2>
        <p className="text-gray-400 text-base mb-10">
          Some recent work showcasing my full-stack development skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectJson.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] rounded-xl p-6 shadow-md hover:shadow-cyan-500/30 transition duration-300 hover:-translate-y-1 h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-700/40 text-xs text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {item.github !== '#' && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-white transition"
                >
                  <FaGithub /> GitHub Repo
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
