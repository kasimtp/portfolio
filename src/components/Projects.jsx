import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Globe, Layout, Code, Server, ArrowUpRight, Sparkles, FolderGit2 } from "lucide-react";

const Projects = () => {
  const projectJson = [
    {
      title: "Eco-Luxe Furniture",
      desc: "A premium full-stack e-commerce experience. Features dynamic inventory, Redux state management, secure authentication, and seamless Razorpay integration.",
      github: "https://github.com/kasimtp/E-commerce-furniture",
      live: "https://e-commerce-furniture-hhmq.vercel.app/",
      tech: ["React", "Express", "MongoDB", "Redux", "Razorpay"],
      category: "Full Stack",
      gradient: "from-blue-600 to-indigo-600",
      icon: Layout
    },
    {
      title: "TaskFlow Intelligence",
      desc: "Strategic productivity tool built for speed. Real-time data persistence, fluid drag-and-drop interfaces, and personalized user workflows.",
      github: "https://github.com/kasimtp/Todolist.git",
      live: "https://kasimtp.github.io/Todolist/",
      tech: ["React", "Framer Motion", "Vite", "LocalStorage"],
      category: "SAAS / Productivity",
      gradient: "from-purple-600 to-pink-600",
      icon: Sparkles
    },
    {
      title: "Nova Weather Hub",
      desc: "Next-generation meteorological forecasting. Integration with high-fidelity APIs, geo-detection, and adaptive UI components for all weather conditions.",
      github: "https://github.com/kasimtp/weather-app",
      live: "https://kasimtp.github.io/weather-app/",
      tech: ["JavaScript", "OpenWeather", "API Integration", "CSS3"],
      category: "Utility",
      gradient: "from-cyan-600 to-blue-600",
      icon: Globe
    },
    {
      title: "Personal Brand Hub",
      desc: "Modern digital signature and portfolio. Built with advanced animation principles, high-end aesthetics, and optimized for search engine visibility.",
      github: "https://github.com/kasimtp/portfolio",
      live: "https://portfoliokasim.vercel.app/",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
      category: "Personal Brand",
      gradient: "from-indigo-600 to-purple-600",
      icon: Code
    },
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-white dark:bg-[#020617] overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Content */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20 text-center md:text-left">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest rounded-lg mb-4"
            >
              <FolderGit2 size={14} />
              <span>Crafed with Passion</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-6xl font-black text-slate-900 dark:text-white"
            >
              Recent <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Digital Creations
              </span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-slate-500 dark:text-slate-400 max-w-lg text-lg leading-relaxed"
          >
            A collection of robust, scalable applications and sophisticated user interfaces built with specialized technology stacks.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projectJson.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[48px] p-8 lg:p-12 shadow-3xl shadow-slate-200/50 dark:shadow-none transition-all duration-500 hover:border-blue-500/30 overflow-hidden"
            >
              {/* Subtle mesh background for card */}
              <div className="absolute inset-0 bg-mesh opacity-0 group-hover:opacity-10 dark:opacity-0 pointer-events-none transition-opacity duration-700" />
              
              <div className="relative z-10">
                {/* Project Header Info */}
                <div className="flex justify-between items-start mb-10">
                  <div className={`p-4 rounded-2xl bg-gradient-to-tr ${project.gradient} text-white shadow-xl group-hover:rotate-12 transition-transform duration-500`}>
                    <project.icon size={28} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 px-4 py-2 border border-slate-100 dark:border-slate-800 rounded-xl group-hover:border-blue-500/30 transition-colors">
                    {project.category}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="font-heading text-3xl font-black text-slate-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-body text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 h-[72px] line-clamp-2">
                  {project.desc}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-[11px] font-black uppercase tracking-widest rounded-lg border border-slate-100 dark:border-slate-800 transition-all hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn relative flex items-center gap-2 text-slate-900 dark:text-white font-black text-sm uppercase tracking-widest no-underline"
                  >
                    <Github size={20} className="text-slate-400 group-hover/btn:text-blue-600 group-hover/btn:rotate-[360deg] transition-all duration-700" />
                    <span>Source Code</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover/btn:w-full" />
                  </motion.a>

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-7 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.15em] hover:shadow-2xl hover:shadow-blue-500/20 transition-all no-underline"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute -bottom-10 -right-10 opacity-5 dark:opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
                <project.icon size={200} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Trigger (Optional) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a 
            href="https://github.com/kasimtp" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-slate-500 hover:text-blue-600 font-bold transition-all no-underline group"
          >
            <div className="w-12 h-px bg-slate-200 dark:bg-slate-800 transition-all group-hover:w-20 group-hover:bg-blue-600" />
            <span className="uppercase tracking-[0.3em] text-[10px]">View all archives</span>
            <div className="w-12 h-px bg-slate-200 dark:bg-slate-800 transition-all group-hover:w-20 group-hover:bg-blue-600" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
