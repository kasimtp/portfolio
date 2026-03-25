import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Download, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Sparkles,
  MousePointer2,
  Code
} from "lucide-react";
import photonew from "../assets/photonew.png";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#020617] pt-32 pb-20 px-6 transition-colors duration-500">
      
      {/* Abstract Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 dark:bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] rounded-full bg-purple-100/50 dark:bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* SMALL PHOTO AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-12"
        >
          {/* Circular Frame with Animated Ring */}
          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 group">
             <div className="absolute inset-0 rounded-full animate-pulse-slow bg-blue-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 bg-white dark:bg-slate-800 shadow-2xl">
               <img 
                 src={photonew} 
                 alt="Mohd Kasim" 
                 className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
               />
             </div>
             
             {/* Floating Badge (Online Status) */}
             <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 p-1 rounded-full shadow-lg border border-slate-100 dark:border-slate-800">
               <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-slate-900 animate-pulse" />
             </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block"
          >
             <div className="px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center gap-2">
               <Sparkles size={14} className="text-yellow-500" />
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-200">Creative</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block"
          >
             <div className="px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center gap-2">
               <MousePointer2 size={14} className="text-blue-500" />
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-200">Developer</span>
             </div>
          </motion.div>
        </motion.div>

        {/* IDENTITY AREA */}
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
          >
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Full Stack Developer</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight"
          >
            Imagine <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent italic">Design</span> <br />
            Create <span className="text-blue-600">Reality.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-body text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Hi, I'm <span className="text-slate-900 dark:text-white font-black">Mohd Kasim</span>. 
            Designing digital ecosystems that are equal parts functional and breathtaking.
          </motion.p>

          {/* CTA Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 pt-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-sm uppercase tracking-widest shadow-2xl hover:shadow-blue-500/20 transition-all flex items-center gap-3"
            >
              <span>Explore My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1ubmnfs9_R8Lgt2lTaAR7bkfR2-_dfk_6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-black text-sm uppercase tracking-widest hover:border-blue-400 dark:hover:border-blue-400 transition-all"
            >
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* SOCIALS */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-12 flex justify-center items-center gap-10"
          >
            {[
              { icon: Github, href: "https://github.com/kasimtp", label: "Github" },
              { icon: Linkedin, href: "#", label: "Linkedin" },
              { icon: Twitter, href: "#", label: "Twitter" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                className="group flex flex-col items-center gap-2"
              >
                <div className="p-3 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                  <social.icon size={22} />
                </div>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 dark:text-blue-400">{social.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* DecorativeDNA Bar Bottom */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
         <div className="w-[1px] h-20 bg-gradient-to-t from-blue-600/50 to-transparent" />
         <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 dark:text-slate-600">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
