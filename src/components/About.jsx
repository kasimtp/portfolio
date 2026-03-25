import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Globe, Sparkles, User, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Experience", value: "2+ Years", icon: Briefcase, color: "text-blue-600" },
    { label: "Completed", value: "20+ Projects", icon: Sparkles, color: "text-purple-600" },
    { label: "Education", value: "Self-Taught", icon: GraduationCap, color: "text-pink-600" },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <User size={14} />
            <span>Know Me Better</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8"
          >
            Passionate About <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Problem Solving
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            I am a self-taught <span className="text-blue-600 dark:text-blue-400 font-bold">MERN Stack Developer</span> with a sharp 
            focus on building scalable applications and intuitive user experiences. My background in 
            <span className="text-purple-600 dark:text-purple-400 font-bold"> Digital Marketing</span> gives me 
            the unique ability to build products that not only look great but also convert and grow businesses.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[32px] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center group transition-all"
            >
              <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 ${stat.color}`}>
                <stat.icon size={28} />
              </div>
              <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</h4>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Frontend Mastery", 
              desc: "Crafting beautiful, responsive, and high-performance user interfaces using React, Next.js, and Tailwind CSS.", 
              icon: Code2, 
              color: "blue" 
            },
            { 
              title: "Backend Scalability", 
              desc: "Building robust server-side logic and secure APIs with Node.js, Express, and MongoDB architectures.", 
              icon: Server, 
              color: "purple" 
            },
            { 
              title: "Strategic Growth", 
              desc: "Leveraging digital marketing insights to optimize applications for SEO, performance, and user engagement.", 
              icon: Globe, 
              color: "pink" 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[40px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-blue-500/50 transition-all duration-500"
            >
              <div className={`p-4 inline-flex rounded-2xl bg-${item.color}-50 dark:bg-${item.color}-900/20 text-${item.color}-600 dark:text-${item.color}-400 mb-8 transition-transform group-hover:scale-110`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;