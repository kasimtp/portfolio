import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiPostman,
  SiVite,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import {
  Rocket,
  Zap,
  Command,
  Terminal,
  Cpu,
  Code2,
  Blocks,
  Sparkles,
  Layers,
  Wrench,
} from "lucide-react";

/* ─── Data ───────────────────────────────────────────────────── */
const categories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Blocks,
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: Zap, color: "#E36BEE" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Terminal,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "REST APIs", icon: Command, color: "#22c55e" },
      { name: "JWT Auth", icon: Code2, color: "#F43F5E" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Git / GitHub", icon: SiGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "SEO", icon: Sparkles, color: "#22c55e" },
      { name: "Deployment", icon: Cpu, color: "#14b8a6" },
    ],
  },
];

/* ─── Skill Card ─────────────────────────────────────────────── */
const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;
  const isDarkIcon =
    skill.color === "#000000" || skill.color === "#181717";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -5 }}
      className="group cursor-default"
    >
      <div className="relative h-full p-5 sm:p-6 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm border border-green-100/40 dark:border-white/[0.06] hover:border-green-400/50 dark:hover:border-green-500/20 transition-all duration-400 hover:shadow-lg hover:shadow-green-500/[0.04] overflow-hidden">
        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
          style={{ backgroundColor: skill.color }}
        />

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
          style={{
            backgroundColor: `${skill.color}12`,
            border: `1px solid ${skill.color}25`,
            color: isDarkIcon
              ? undefined
              : skill.color,
          }}
        >
          <Icon
            size={20}
            className={isDarkIcon ? "text-gray-700 dark:text-gray-300" : ""}
          />
        </div>

        {/* Name */}
        <h4
          className="text-sm font-bold text-gray-900 dark:text-white"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {skill.name}
        </h4>

        {/* Accent dot */}
        <div className="flex items-center gap-1.5 mt-2">
          <div
            className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: skill.color }}
          />
          <div
            className="h-px w-8 rounded-full opacity-20 group-hover:opacity-40 group-hover:w-12 transition-all duration-300"
            style={{ backgroundColor: skill.color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Section ───────────────────────────────────────────── */
const Skill = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-green-50/40 dark:bg-gray-950 transition-colors duration-500 overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-green-200/25 dark:bg-green-900/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-emerald-200/20 dark:bg-emerald-900/8 blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(34,197,94,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        {/* ─── Header ─── */}
        <div className="text-center mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-green-500/8 dark:bg-green-500/10 border border-green-300/30 dark:border-green-700/20 mb-6"
          >
            <Layers size={13} className="text-green-500" />
            <span
              className="text-[10px] font-bold tracking-[0.25em] text-green-600 dark:text-green-400 uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Tech Stack
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mt-4 text-sm leading-relaxed"
          >
            The tools and frameworks I use to build fast, scalable,
            and beautiful digital products.
          </motion.p>
        </div>

        {/* ─── Tab Switcher ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-green-200/25 dark:border-green-800/15 backdrop-blur-sm">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="skill-tab-bg"
                      className="absolute inset-0 bg-green-500 rounded-lg shadow-md shadow-green-500/25"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <CatIcon size={14} />
                    <span className="hidden sm:inline">{cat.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Skill Grid (animated on tab switch) ─── */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              {activeCategory.skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── All Tech Summary (always visible) ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-14 pt-8 border-t border-green-200/20 dark:border-green-800/10"
        >
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {categories.flatMap((c) => c.skills).map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="flex items-center gap-1.5 text-gray-300 dark:text-gray-700 hover:text-green-500 dark:hover:text-green-500 transition-colors cursor-default"
                  title={skill.name}
                >
                  <Icon size={14} />
                  <span
                    className="text-[10px] font-medium tracking-wide"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Bottom Banner ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-14 sm:mt-16"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gray-900" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

            <div className="relative z-10 px-6 sm:px-8 py-7 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="text-center sm:text-left">
                <h4
                  className="text-base sm:text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Always learning, always shipping.
                </h4>
                <p
                  className="text-gray-500 text-xs"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  My toolkit evolves with every project.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-1.5">
                {["Agile", "CI/CD", "Cloud", "UI/UX"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-[10px] font-semibold uppercase tracking-wider text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-all cursor-default"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;