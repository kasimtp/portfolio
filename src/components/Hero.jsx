import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Download,
  Briefcase,
  Code2,
  Layers,
  Globe,
  MapPin,
  Mail,
} from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const fadeOut = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-green-50/40 dark:bg-gray-950 transition-colors duration-500"
    >
      {/* ─── Background ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-green-200/30 dark:bg-green-900/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] rounded-full bg-emerald-200/25 dark:bg-emerald-900/8 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(34,197,94,0.4) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ─── Content ─── */}
      <div className="max-w-5xl mx-auto w-full px-6 lg:px-12 relative z-10 pt-32 pb-24">
        <div className="flex flex-col items-center text-center">

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 dark:bg-white/[0.05] backdrop-blur-xl border border-green-200/30 dark:border-green-700/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span
              className="text-[10px] font-bold tracking-[0.2em] text-green-600 dark:text-green-400 uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Available for work
            </span>
          </motion.div>

          {/* Name + Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.15] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Mohd Kasim
            </h1>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px w-5 bg-green-500/50" />
              <span
                className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-green-600 dark:text-green-400"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Full Stack Developer
              </span>
              <div className="h-px w-5 bg-green-500/50" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mt-6 text-sm sm:text-base leading-relaxed"
          >
            I design & build{" "}
            <span className="text-gray-800 dark:text-gray-200 font-semibold">
              modern web applications
            </span>{" "}
            with clean code, thoughtful interfaces, and a focus on
            performance that makes a real impact.
          </motion.p>

          {/* Quick info row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-5"
          >
            {[
              { icon: MapPin, text: "India" },
              { icon: Mail, text: "tpkasimvlr@gmail.com" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                <item.icon size={13} className="text-green-500/70" />
                <span
                  className="text-[11px] sm:text-xs font-medium"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ─── Stat Cards ─── */}
    

          {/* ─── CTAs ─── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-3 mt-9"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-green-500/15 no-underline"
            >
              <span>View Projects</span>
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1ubmnfs9_R8Lgt2lTaAR7bkfR2-_dfk_6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-green-200/30 dark:border-green-700/20 text-gray-700 dark:text-gray-200 font-semibold text-sm transition-all hover:border-green-400 dark:hover:border-green-600/40 flex items-center gap-2 no-underline"
            >
              <Download size={14} />
              <span>Resume</span>
            </motion.a>
          </motion.div>

          {/* ─── Social Row ─── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex items-center gap-2.5 mt-8"
          >
            {[
              { icon: Github, href: "https://github.com/kasimtp", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-kasim-tp", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/kasim_mhd__/", label: "Instagram" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-9 h-9 rounded-lg bg-white/40 dark:bg-white/[0.04] border border-green-200/20 dark:border-green-700/15 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-green-500 hover:border-green-400/30 transition-all no-underline"
                title={social.label}
              >
                <social.icon size={15} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-green-400/25 dark:border-green-700/25 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-green-500/60" />
        </motion.div>
        <span
          className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-600"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
