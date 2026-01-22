







import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Globe } from "lucide-react"; // Using Lucide for the icons in the image

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="text-white font-sans py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" // Light background as per image
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-center text-5xl font-bold text-blue-600 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >  
        <p className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                   About Me
                </p>
        
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                I am a self-taught <span className="text-blue-600 font-semibold">MERN Stack Developer</span> with hands-on experience in building and deploying full-stack web applications.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                My background in <span className="text-purple-600 font-semibold">Digital Marketing</span> gives me a unique perspective on building user-focused and business-driven applications.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Frontend Card */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-50 flex flex-col gap-4"
            >
              <Code2 className="text-blue-500 w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Frontend</h3>
                <p className="text-gray-500 text-sm">React, Tailwind, Modern JS</p>
              </div>
            </motion.div>

            {/* Backend Card - Slightly offset like the image */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-50 flex flex-col gap-4 mt-0 sm:mt-12"
            >
              <Server className="text-purple-500 w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Backend</h3>
                <p className="text-gray-500 text-sm">Node.js, Express, MongoDB</p>
              </div>
            </motion.div>

            {/* API & Cloud Card */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-50 flex flex-col gap-4"
            >
              <Globe className="text-pink-500 w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">API & Cloud</h3>
                <p className="text-gray-500 text-sm">REST API, JWT, Deployment</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;