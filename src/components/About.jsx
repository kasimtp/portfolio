import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Globe, Sparkles, User, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Experience", value: "2+ Years", icon: Briefcase },
    { label: "Completed", value: "20+ Projects", icon: Sparkles },
    { label: "Education", value: "Self-Taught", icon: GraduationCap },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[25%] h-[25%] bg-green-200/30 dark:bg-green-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200/40 dark:border-green-800/30 text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-widest mb-5"
          >
            <User size={14} />
            <span>Know Me Better</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Passionate About <br />
            <span className="text-green-500">Problem Solving</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed"
          >
            I am a self-taught <span className="text-green-600 dark:text-green-400 font-semibold">MERN Stack Developer</span> with a sharp
            focus on building scalable applications and intuitive user experiences. My background in
            <span className="text-green-600 dark:text-green-400 font-semibold"> Digital Marketing</span> gives me
            the unique ability to build products that not only look great but also convert and grow businesses.
          </motion.p>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl bg-green-50/50 dark:bg-gray-900/50 backdrop-blur-xl border border-green-200/30 dark:border-green-800/20 text-center group transition-all cursor-default hover:border-green-300 dark:hover:border-green-700/40"
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500 transition-transform group-hover:rotate-12">
                <stat.icon size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h4>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend Mastery",
              desc: "Crafting beautiful, responsive, and high-performance user interfaces using React, Next.js, and Tailwind CSS.",
              icon: Code2,
            },
            {
              title: "Backend Scalability",
              desc: "Building robust server-side logic and secure APIs with Node.js, Express, and MongoDB architectures.",
              icon: Server,
            },
            {
              title: "Strategic Growth",
              desc: "Leveraging digital marketing insights to optimize applications for SEO, performance, and user engagement.",
              icon: Globe,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-7 rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl border border-green-200/30 dark:border-green-800/20 transition-all duration-500 hover:border-green-300 dark:hover:border-green-700/40"
            >
              <div className="p-3 inline-flex rounded-xl bg-green-100 dark:bg-green-900/30 text-green-500 mb-6 transition-transform group-hover:scale-110">
                <item.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;