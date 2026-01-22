import React from "react";
import { motion } from "framer-motion";

// You can use your existing assets or high-quality icons from a library
import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Cpu, 
  Cloud 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-blue-600" />,
    skills: [
      { name: "React", level: "92%" },
      { name: "Next.js", level: "83%" },
      { name: "JavaScript", level: "88%" },
      { name: "Tailwind CSS", level: "93%" },
      { name: "Redux", level: "80%" },
      { name: "HTML/CSS", level: "95%" },
    ],
    color: "bg-blue-50",
    border: "border-blue-100"
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: "Node.js", level: "87%" },
      { name: "Express.js", level: "84%" },
      { name: "MongoDB", level: "86%" },
      { name: "REST APIs", level: "90%" },
      { name: "JWT Auth", level: "85%" },
    ],
    color: "bg-purple-50",
    border: "border-purple-100"
  },
  {
    title: "Tools & Deployment",
    icon: <Terminal className="w-6 h-6 text-pink-600" />,
    skills: [
      { name: "Git & GitHub", level: "88%" },
      { name: "Vercel / Netlify", level: "85%" },
      { name: "Postman", level: "90%" },
      { name: "Vite", level: "89%" },
      { name: "Digital Marketing", level: "75%" },
    ],
    color: "bg-pink-50",
    border: "border-pink-100"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Skill = () => {
  return (
    <section id="skills" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Technical <span className="text-blue-600">Skill</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            My skill set is focused on the MERN ecosystem, emphasizing performance, 
            scalability, and clean user interfaces.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`p-8 rounded-3xl border ${category.border} ${category.color} transition-all hover:shadow-lg`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                        {skill.level}
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-gray-200/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Tag Cloud (Optional Bottom Section) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {["REST API", "Responsive Design", "Firebase", "Agile", "UI/UX", "SEO"].map((tag) => (
            <span key={tag} className="px-5 py-2 bg-slate-50 text-slate-500 text-sm font-medium rounded-full border border-slate-100 hover:border-blue-200 hover:text-blue-600 transition-all cursor-default">
              #{tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;