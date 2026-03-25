import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, ArrowRight, Github } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const { scrollY } = useScroll();

  // Handle dark mode
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark' || (!theme && isSystemDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Scroll visibility logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Intersection Observer for Active Tab
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { title: 'Home', href: '#home', id: 'home' },
    { title: 'About', href: '#about', id: 'about' },
    { title: 'Skills', href: '#skills', id: 'skills' },
    { title: 'Projects', href: '#projects', id: 'projects' },
    { title: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 lg:px-12 py-4 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border-b border-slate-200/50 dark:border-slate-800/50 py-3' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center relative">
        
        {/* Logo Section */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center gap-3 no-underline"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center p-2 group-hover:rotate-[10deg] transition-all duration-500 shadow-xl shadow-blue-500/20">
            <img src={logo} alt="Logo" className="w-full h-full object-contain brightness-0 invert scale-110" />
          </div>
          <span className="hidden sm:block font-heading font-black text-xl lg:text-2xl tracking-tighter text-slate-900 dark:text-white">
            KASIM<span className="text-blue-600 animate-pulse">.</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-slate-100/40 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`relative px-5 py-2.5 rounded-xl transition-all duration-300 text-xs lg:text-sm font-bold uppercase tracking-widest no-underline ${
                activeTab === item.id 
                  ? 'text-white' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeTab === item.id && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute inset-0 bg-blue-600 rounded-xl z-[-1] shadow-lg shadow-blue-500/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.title}
            </a>
          ))}
        </nav>

        {/* Call to Action Buttons */}
        <div className="flex items-center gap-3 lg:gap-5">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />}
          </motion.button>

          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-7 py-3 rounded-2xl font-bold text-sm lg:text-base hover:shadow-2xl hover:shadow-blue-500/30 transition-all no-underline"
          >
            <span>Let's talk</span>
            <ArrowRight size={18} />
          </motion.a>

          {/* Mobile Menu Trigger */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 dark:border-white/10 z-50 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

            <nav className="relative flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 flex justify-between items-center no-underline ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.title}
                  {activeTab === item.id ? <ArrowRight size={18} /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />}
                </a>
              ))}
              <div className="h-px bg-slate-100 dark:bg-slate-800 my-4 opacity-50" />
              <a 
                href="https://github.com/kasimtp" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl text-slate-600 dark:text-slate-400 font-bold no-underline hover:text-blue-600 transition-colors"
              >
                <Github size={22} /> Github Profile
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
