import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  FolderGit2,
  Layout,
  Globe,
  Code,
  Sparkles,
  ShoppingCart,
  CloudSun,
  CheckSquare,
  User,
  Layers,
  ChevronRight,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiJavascript,
  SiCss3,
  SiFramer,
} from "react-icons/si";

/* ─── Tech Icon Map ──────────────────────────────────────────── */
const techIconMap = {
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "MongoDB": SiMongodb,
  "Redux": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,
  "Vite": SiVite,
  "JavaScript": SiJavascript,
  "CSS3": SiCss3,
  "Framer Motion": SiFramer,
};

/* ─── Projects Data ──────────────────────────────────────────── */
const projects = [
  {
    title: "zyora.shop",
    desc: "A premium full-stack e-commerce platform with dynamic inventory management, Redux state handling, secure authentication, Razorpay payment integration, WhatsApp order support, and smooth motion animations.",
    github: "https://github.com/kasimtp/zyora_tea_frontend.git",
    live: "https://www.zyora.shop/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS", "Framer Motion"],
    category: "Full Stack",
    icon: ShoppingCart,
    featured: true,
  },
  {
    title: "E-Store",
    desc: "A premium full-stack e-commerce experience. Features dynamic inventory, Redux state management, secure authentication, and seamless Razorpay integration.",
    github: "https://github.com/kasimtp/E-commerce-furniture",
    live: "https://e-commerce-furniture-hhmq.vercel.app/",
    tech: ["React", "Express", "MongoDB", "Redux"],
    category: "Full Stack",
    icon: Layout,
  },

  {
    title: "Nova Weather Hub",
    desc: "Next-generation meteorological forecasting. Integration with high-fidelity APIs, geo-detection, and adaptive UI components.",
    github: "https://github.com/kasimtp/weather-app",
    live: "https://kasimtp.github.io/weather-app/",
    tech: ["JavaScript", "CSS3"],
    category: "Utility",
    icon: CloudSun,
  },
  {
    title: "Personal Brand Hub",
    desc: "Modern digital signature and portfolio. Built with advanced animations, high-end aesthetics, and optimized for visibility.",
    github: "https://github.com/kasimtp/portfolio",
    live: "https://portfoliokasim.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Personal Brand",
    icon: User,
  },
];

/* ─── Tech Chip with Icon ────────────────────────────────────── */
const TechChip = ({ name }) => {
  const Icon = techIconMap[name];
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-50/60 dark:bg-green-950/20 border border-green-100/50 dark:border-green-800/15 text-[10px] sm:text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-300 dark:hover:border-green-700/30 transition-all cursor-default">
      {Icon && <Icon size={11} className="text-green-500/70" />}
      {name}
    </span>
  );
};

/* ─── Featured Project Card (first/large) ────────────────────── */
const FeaturedCard = ({ project, index }) => {
  const ProjectIcon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative col-span-full"
    >
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl border border-green-200/25 dark:border-green-800/10 hover:border-green-400/40 dark:hover:border-green-600/20 transition-all duration-700 hover:shadow-xl hover:shadow-green-500/[0.04]">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

        {/* Background glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-400/5 dark:bg-green-500/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Left - Info */}
            <div className="flex-1 min-w-0">
              {/* Top meta row */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-all duration-500"
                  style={{
                    background: "linear-gradient(135deg, #22c55e, #10b981)",
                    boxShadow: "0 6px 20px rgba(34,197,94,0.25)",
                  }}
                >
                  <ProjectIcon size={20} />
                </div>
                <div>
                  <span
                    className="text-[9px] font-bold tracking-[0.25em] text-green-500/60 uppercase block"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Featured Project
                  </span>
                  <span
                    className="text-[10px] font-semibold tracking-wider text-gray-400 dark:text-gray-600 uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-lg">
                {project.desc}
              </p>

              {/* Tech with icons */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <TechChip key={i} name={tech} />
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all no-underline shadow-lg shadow-green-500/15"
                  >
                    <span>Live Site</span>
                    <ArrowUpRight size={14} />
                  </motion.a>
                )}

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/60 dark:bg-white/[0.04] border border-green-200/30 dark:border-green-700/20 text-gray-700 dark:text-gray-300 font-semibold text-xs uppercase tracking-wider transition-all hover:border-green-400 dark:hover:border-green-600/30 no-underline"
                >
                  <Github size={14} />
                  <span>Source</span>
                </motion.a>
              </div>
            </div>

            {/* Right - Visual Preview Placeholder */}
            <div className="lg:w-[280px] xl:w-[320px] flex-shrink-0 hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-green-50 dark:from-green-950/30 to-emerald-50/50 dark:to-emerald-950/10 border border-green-100/40 dark:border-green-800/15 flex items-center justify-center overflow-hidden">
                {/* Decorative terminal window */}
                <div className="w-[85%] rounded-lg bg-white/80 dark:bg-gray-900/60 border border-green-200/20 dark:border-green-800/15 shadow-lg overflow-hidden">
                  {/* Fake titlebar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-green-100/30 dark:border-green-800/10">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                    <span
                      className="ml-2 text-[8px] text-gray-400 dark:text-gray-600 tracking-wider"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {project.title}
                    </span>
                  </div>
                  {/* Fake code lines */}
                  <div className="p-3 space-y-1.5">
                    {[85, 60, 75, 45, 90, 55].map((w, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span
                          className="text-[8px] text-gray-300 dark:text-gray-700 w-3 text-right"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {i + 1}
                        </span>
                        <div
                          className="h-1.5 rounded-full bg-green-200/40 dark:bg-green-800/20"
                          style={{ width: `${w}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating icon */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.04] dark:opacity-[0.06]">
                  <ProjectIcon size={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Regular Project Card ───────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const ProjectIcon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl border border-green-200/25 dark:border-green-800/10 hover:border-green-400/40 dark:hover:border-green-600/20 transition-all duration-700 hover:shadow-lg hover:shadow-green-500/[0.03] flex flex-col">
        {/* Glow on hover */}
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-green-400/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:rotate-3 transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, #22c55e, #10b981)",
                  boxShadow: "0 4px 14px rgba(34,197,94,0.2)",
                }}
              >
                <ProjectIcon size={17} />
              </div>

              <div>
                <h3
                  className="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white leading-tight group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {project.title}
                </h3>
                <span
                  className="text-[9px] font-semibold tracking-[0.2em] text-gray-400 dark:text-gray-600 uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {project.category}
                </span>
              </div>
            </div>

            {/* Quick link arrow */}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200/30 dark:border-green-800/20 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-400/50 transition-all no-underline opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
              >
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2 flex-1">
            {project.desc}
          </p>

          {/* Tech row with icons */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((tech, i) => (
              <TechChip key={i} name={tech} />
            ))}
          </div>

          {/* Bottom actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-green-100/30 dark:border-green-800/10 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-green-500 transition-colors no-underline"
            >
              <Github size={15} />
              <span
                className="text-[10px] font-semibold uppercase tracking-wider"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Source
              </span>
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-green-500 transition-colors no-underline"
              >
                <ExternalLink size={14} />
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Live Demo
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Watermark icon */}
        <div className="absolute -bottom-6 -right-6 opacity-[0.025] dark:opacity-[0.04] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none">
          <ProjectIcon size={130} />
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Projects Section ──────────────────────────────────── */
const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-green-50/40 dark:bg-gray-950 overflow-hidden transition-colors duration-500"
    >
      {/* Atmospheric BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] right-[-5%] w-[35%] h-[35%] bg-green-200/20 dark:bg-green-900/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-emerald-200/15 dark:bg-emerald-900/5 blur-[120px] rounded-full" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(34,197,94,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* ═══ Header ═══ */}
        <div className="mb-14 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-green-500/8 dark:bg-green-500/10 border border-green-300/30 dark:border-green-700/20 mb-6"
          >
            <FolderGit2 size={13} className="text-green-500" />
            <span
              className="text-[10px] font-bold tracking-[0.25em] text-green-600 dark:text-green-400 uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Recent{" "}
            <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mt-4 text-sm sm:text-base leading-relaxed"
          >
            Scalable applications and refined interfaces, each built
            with a focus on craft and real-world impact.
          </motion.p>
        </div>

        {/* ═══ Featured Project ═══ */}
        {featured.map((project, i) => (
          <div key={i} className="mb-6">
            <FeaturedCard project={project} index={i} />
          </div>
        ))}

        {/* ═══ Regular Projects Grid ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {regular.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* ═══ View All Link ═══ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <motion.a
            href="https://github.com/kasimtp"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-green-200/25 dark:border-green-700/15 text-gray-500 dark:text-gray-400 hover:text-green-500 hover:border-green-400/40 dark:hover:border-green-600/25 font-semibold text-xs uppercase tracking-[0.2em] transition-all no-underline"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Github size={15} />
            <span>View all on GitHub</span>
            <ChevronRight size={13} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
