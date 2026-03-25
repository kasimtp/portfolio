import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
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
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { 
  Rocket, 
  Zap, 
  Command, 
  Terminal, 
  Cpu, 
  Code2,
  Blocks,
  Sparkles
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Mastery",
    icon: Blocks,
    color: "#3b82f6", // Blue
    description: "Architecting immersive user interfaces with modern reactivity and fluid motion.",
    skills: [
      { name: "React", icon: SiReact, level: 92 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "TypeScript", icon: SiTypescript, level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
      { name: "Framer Motion", icon: Zap, level: 88 },
      { name: "Redux", icon: SiRedux, level: 82 },
    ],
  },
  {
    title: "Backend Core",
    icon: Terminal,
    color: "#a855f7", // Purple
    description: "Engineering secure, scalable server-side systems and resilient database architectures.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 87 },
      { name: "Express.js", icon: SiExpress, level: 90 },
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "Firebase", icon: SiFirebase, level: 80 },
      { name: "REST APIs", icon: Command, level: 92 },
      { name: "JWT Auth", icon: Code2, level: 88 },
    ],
  },
  {
    title: "Eco-System",
    icon: Rocket,
    color: "#ec4899", // Pink
    description: "Leveraging high-performance tools and cloud platforms for seamless deployment.",
    skills: [
      { name: "Vite / Webpack", icon: SiVite, level: 88 },
      { name: "Vercel / Netlify", icon: SiVercel, level: 85 },
      { name: "Git / GitHub", icon: SiGithub, level: 92 },
      { name: "Postman", icon: SiPostman, level: 90 },
      { name: "SEO Strategy", icon: Sparkles, level: 82 },
      { name: "Deployment", icon: Cpu, level: 85 },
    ],
  }
];

const Skill = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/5 dark:bg-purple-600/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Cinematic Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.2em] rounded-full mb-8 border border-blue-100 dark:border-blue-800"
          >
            <Cpu size={14} className="animate-spin-slow" />
            <span>Expertise & Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-tight"
          >
            Technical <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Powerhouse
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-10 text-xl leading-relaxed"
          >
            A high-performance stack curated for scalability, speed, and 
            crafting visually stunning digital products that solve real-world challenges.
          </motion.p>
        </div>

        {/* 3D-Feel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative p-10 rounded-[48px] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-all duration-500 group-hover:bg-white dark:group-hover:bg-slate-900 group-hover:border-transparent group-hover:scale-[1.02] overflow-hidden group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] flex flex-col h-full">
                
                {/* Glow Effect */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"
                  style={{ backgroundColor: category.color }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-6 mb-8">
                    <div 
                      className="p-5 rounded-3xl text-white shadow-xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                      style={{ backgroundColor: category.color, boxShadow: `0 10px 30px ${category.color}40` }}
                    >
                      <category.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter">{category.title}</h3>
                      <div className="h-1 w-12 rounded-full mt-1" style={{ backgroundColor: category.color }} />
                    </div>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 font-body text-sm leading-relaxed mb-10">
                    {category.description}
                  </p>

                  <div className="space-y-6 mt-auto">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="group/skill">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover/skill:bg-blue-600 dark:group-hover/skill:bg-blue-600 group-hover/skill:text-white transition-all">
                              <skill.icon size={16} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors">{skill.name}</span>
                          </div>
                          <span className="text-[10px] font-black text-slate-400 group-hover/skill:text-blue-600 tabular-nums">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progressive Bar */}
                        <div className="h-1.5 w-full bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-transparent to-current opacity-80"
                            style={{ color: category.color, backgroundColor: 'currentColor' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Abstract Tech DNA Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 p-8 lg:p-12 rounded-[56px] bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-black text-white relative overflow-hidden group shadow-3xl"
        >
          <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[200%] bg-blue-600/10 blur-[100px] rotate-12 transition-transform duration-1000 group-hover:rotate-[15deg] group-hover:scale-110" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-3xl font-black mb-4">Ready to Innovate?</h4>
              <p className="text-slate-400 font-body text-lg">My skills are constantly evolving with the industry pulse. Let's merge my technical proficiency with your bold ideas.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 flex-1 lg:flex-none">
              {["Agile", "UI Architecture", "Cloud Optimization", "Performance Engineering"].map((tag, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-xs font-bold uppercase tracking-widest hover:border-blue-500/50 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;