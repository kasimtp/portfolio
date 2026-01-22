// import React from "react";
// import { motion } from "framer-motion";
// import photonew from "../assets/photonew.png";

// const Hero = () => {
//   return (
//     <section
//       className="font-body text-white border-b border-gray-900 lg:h-[900px] overflow-hidden"
//       style={{
//         background: "linear-gradient(to right, #0e1628, #1a2233, #0e1628)",
//       }}
//     >
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
//         <div className="flex flex-col-reverse lg:mt-28 lg:flex-row items-center justify-between gap-10">

//           {/* LEFT SIDE */}
//           <motion.div
//             className="w-full lg:w-1/2 space-y-6 lg:space-y-10 text-center lg:text-left"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <motion.h1
//               className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             >
//               Hi, I&apos;m{" "}
//               <span className="text-cyan-400 tracking-wide animate-pulse">
//                 Kasim
//               </span>
//             </motion.h1>

//             <motion.p
//               className="text-base sm:text-lg md:text-xl text-gray-300 font-medium tracking-wide"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.7 }}
//             >
//               MERN Stack Developer & Designer
//             </motion.p>

//             <motion.p
//               className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.7 }}
//             >
//               I’m a passionate web developer with expertise in React, Next.js,
//               and modern web technologies. I love building beautiful,
//               performant websites that solve real-world problems.
//             </motion.p>

//             {/* DOWNLOAD CV BUTTON */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2 }}z
//               className="inline-block"
//             >
//               <a
//                 href="https://drive.google.com/file/d/1mDZ7HpzlTO4DWSrhIOcztu6kFkM-FiPF/view?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-heading bg-cyan-500 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold tracking-wide hover:bg-cyan-400 transition duration-300"
//               >
//                 Download CV
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE */}
//           <div className="w-full lg:w-1/2 flex justify-center items-center">
//             <img
//               src={photonew}
//               alt="Kasim"
//               className="h-64 sm:h-72 md:h-80 lg:h-[45vh] rounded-2xl cursor-pointer hover:scale-105 transition duration-300"
//               onClick={() =>
//                 window.open("https://github.com/kasimtp", "_blank")
//               }
//             />
//           </div>
// {/* */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, Download, ArrowRight } from "lucide-react"; // Optional: using lucide-react for icons
// import photonew from "../assets/photonew.png";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#f8faff] font-sans">

//       {/* BACKGROUND MESH GRADIENTS */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-100 blur-[120px] opacity-60" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px] opacity-60" />
//         <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] rounded-full bg-pink-50 blur-[100px] opacity-50" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

//           {/* LEFT CONTENT */}
//           <motion.div 
//             className="w-full lg:w-3/5 text-left"
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* Badge */}
//             <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
//               <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
//                 MERN STACK DEVELOPER
//               </span>
//             </div>

//             {/* Headline */}
//             <h1 className="text-6xl md:text-8xl font-black text-[#1e293b] leading-[1.1] tracking-tight mb-6">
//               Building <br />
//               <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//                 Digital <br /> Experiences
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
//               Hi, I'm <span className="font-bold text-gray-800">Kasim</span>. A passionate developer crafting robust, scalable, and user-centric web applications with the MERN stack.
//             </p>

//             {/* Actions */}
//             <div className="flex flex-wrap gap-4">
//               <button className="flex items-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-gray-200">
//                 View Projects <ArrowRight size={18} />
//               </button>

//               <button className="flex items-center gap-2 bg-white text-gray-700 border border-gray-100 px-6 py-4 rounded-2xl font-bold hover:shadow-md transition-all">
//                 <Mail size={18} className="text-gray-400" /> Contact Me
//               </button>

//               <a 
//                href="https://drive.google.com/file/d/1mDZ7HpzlTO4DWSrhIOcztu6kFkM-FiPF/view?usp=sharing"
//                 className="flex items-center gap-2 bg-white text-gray-700 border border-gray-100 px-6 py-4 rounded-2xl font-bold hover:shadow-md transition-all"
//               >
//                 <Download size={18} className="text-gray-400" /> Resume
//               </a>



//             </div>
//           </motion.div>

//           {/* RIGHT IMAGE SECTION */}
//           <motion.div 
//             className="relative w-full lg:w-2/5 flex justify-center lg:justify-end"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             {/* The Image Container with Glass Effect */}
//             <div className="relative group">
//               <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-[40px] -m-4 border border-white/50 shadow-2xl" />

//               <div className="relative overflow-hidden rounded-[32px] w-80 h-96 md:w-96 md:h-[500px] shadow-xl">
//                 <img
//                   src={photonew}
//                   alt="Kasim"
//                   className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
//                 />
//                 {/* Red tint overlay matching the image style */}
//                 <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
//               </div>

//               {/* Status Badge */}
//               <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-gray-50">
//                 <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//                 <span className="text-gray-800 font-bold text-sm">Open to work</span>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>

//       {/* Subtle Horizontal Line from Image */}
//       <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-gray-200 -z-0 opacity-50" />
//     </section>
//   );
// };

// export default Hero;




// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Menu,
//   X,
//   Moon,
//   Sun,
//   Mail,
//   Download,
//   ArrowRight,
// } from "lucide-react";

// import logo from "../assets/logo.png";
// import photonew from "../assets/photonew.png";

// const Hero = () => {
//   /* =======================
//      NAVBAR STATE
//   ======================== */
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const theme = localStorage.getItem("theme");
//     if (
//       theme === "dark" ||
//       (!theme &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       document.documentElement.classList.add("dark");
//       setIsDark(true);
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     const html = document.documentElement;
//     if (html.classList.contains("dark")) {
//       html.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDark(false);
//     } else {
//       html.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDark(true);
//     }
//   };

//   return (
//     <>
//       {/* =======================
//           NAVBAR
//       ======================== */}
//       <div className="absolute inset-0 sticky top-0">
//         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-100 blur-[120px]" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100 blur-[120px]" />

//         <header className="sticky top-0 z-50 w-full  px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">

//           <div className="max-w-[1600px] mx-auto flex justify-between items-center py-4">
//             {/* Logo */}
//             <img src={logo} alt="Logo" className="h-10 lg:h-14" />

//             {/* Desktop Nav */}
//             <nav className="hidden md:flex items-center gap-8 text-base font-medium">
//               <a href="#about" className="text-gray-800 hover:text-cyan-500">
//                 About
//               </a>
//               <a href="#projects" className="text-gray-800 hover:text-cyan-500">
//                 Projects
//               </a>
//               <a href="#contact" className="text-gray-800 hover:text-cyan-500">
//                 Contact
//               </a>

//               <button onClick={toggleDarkMode}>
//                 {isDark ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//             </nav>

//             {/* Mobile Buttons */}
//             <div className="md:hidden flex items-center gap-4">
//               <button onClick={toggleDarkMode}>
//                 {isDark ? <Sun size={22} /> : <Moon size={22} />}
//               </button>

//               <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                 {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="md:hidden bg-[#0e1628] px-6 py-4 space-y-3">
//               <a href="#about" className="block text-slate-300">
//                 About
//               </a>
//               <a href="#projects" className="block text-slate-300">
//                 Projects
//               </a>
//               <a href="#contact" className="block text-slate-300">
//                 Contact
//               </a>
//             </div>
//           )}
//         </header>
//       </div>

//       {/* =======================
//           HERO SECTION
//       ======================== */}
//       <section className="relative min-h-screen flex items-center bg-[#f8faff] overflow-hidden">
//         {/* Background blur */}
//         <div className="absolute ">
//           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-100 blur-[120px]" />
//           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100 blur-[120px]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             {/* LEFT */}
//             <motion.div
//               className="lg:w-3/5"
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <span className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
//                 MERN STACK DEVELOPER
//               </span>

//               <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight">
//                 Building <br />
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
//                   Digital Experiences
//                 </span>
//               </h1>

//               <p className="mt-6 text-lg text-gray-500 max-w-xl">
//                 Hi, I'm <b>Kasim</b>. I build scalable, modern and
//                 user-friendly web apps using MERN stack.
//               </p>

//               <div className="mt-10 flex flex-wrap gap-4">
//                 <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold">
//                   View Projects <ArrowRight size={18} />
//                 </button>

//                 <button className="flex items-center gap-2 bg-white border px-6 py-4 rounded-2xl font-bold">
//                   <Mail size={18} /> Contact
//                 </button>

//                 <a
//                   href="https://drive.google.com/file/d/1mDZ7HpzlTO4DWSrhIOcztu6kFkM-FiPF/view"
//                   className="flex items-center gap-2 bg-white border px-6 py-4 rounded-2xl font-bold"
//                 >
//                   <Download size={18} /> Resume
//                 </a>
//               </div>
//             </motion.div>

//             {/* RIGHT IMAGE */}
//             <motion.div
//               className="lg:w-2/5"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="relative">
//                 <img
//                   // src={photonew}
//                   alt="Kasim"
//                   className="rounded-[32px] shadow-2xl w-80 md:w-96"
//                 />

//                 <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-xl shadow">
//                   <span className="flex items-center gap-2 text-sm font-bold">
//                     <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//                     Open to work
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";

import logo from "../assets/logo.png";
import photonew from "../assets/photonew.png";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Dark mode */
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  /* Scroll navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* BACKGROUND BLUR */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-purple-200 blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
          <p className="font-mono font-semibold text-xl">
            Mohd Kasim.TP
          </p>




          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm lg:text-base">
            <a href="#about" className="hover:text-cyan-500">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-500">
              Contact
            </a>
            <button onClick={toggleDarkMode}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleDarkMode}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg px-6 py-6 space-y-4 shadow-lg">
            <a href="#about" className="block text-base">
              About
            </a>
            <a href="#projects" className="block text-base">
              Projects
            </a>
            <a href="#contact" className="block text-base">
              Contact
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-28 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-14">
            {/* Text */}
            <motion.div
              className="w-full lg:w-3/5 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block mb-5 px-4 py-2 text-xs sm:text-sm rounded-full bg-blue-50 text-blue-600 font-semibold">
                MERN STACK DEVELOPER
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
                Building <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-base text-gray-500 max-w-xl mx-auto lg:mx-0">
                Hi, I'm <b>Kasim</b>. I build scalable and modern MERN stack web
                applications.
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base">
                  View Projects <ArrowRight size={16} />
                </button>

                <button className="flex items-center gap-2 border px-6 py-3 rounded-xl font-semibold text-sm sm:text-base">
                  <Mail size={16} /> Contact
                </button>

                <a
                  href="https://drive.google.com/file/d/1mDZ7HpzlTO4DWSrhIOcztu6kFkM-FiPF/view"
                  className="flex items-center gap-2 border px-6 py-3 rounded-xl font-semibold text-sm sm:text-base"
                >
                  <Download size={16} /> Resume
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="w-full lg:w-2/5 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <img
                src={photonew}
                alt="Kasim"
                className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
