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

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    const observerOptions = { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveTab(entry.target.id);
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
    { title: 'Projects', href: '#projects', id: 'projects' },
    { title: 'Skills', href: '#skills', id: 'skills' },
    { title: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 sm:px-6 lg:px-12 py-4 ${
        isScrolled
          ? 'py-3 bg-white/70 dark:bg-gray-950/70 backdrop-blur-2xl shadow-lg shadow-green-900/5 border-b border-green-200/30 dark:border-green-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center relative">

        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center gap-2.5 no-underline"
        >
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-green-500 flex items-center justify-center p-1.5 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-green-500/20">
            <img src={logo} alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <span className="hidden sm:block font-bold text-lg lg:text-xl tracking-tight text-gray-900 dark:text-white">
            KASIM<span className="text-green-500">.</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5 p-1 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-green-200/20 dark:border-green-800/20">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`relative px-4 py-2 rounded-xl transition-all duration-300 text-xs font-semibold uppercase tracking-wider no-underline ${
                activeTab === item.id
                  ? 'text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-green-500 rounded-xl z-[-1] shadow-md shadow-green-500/25"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.title}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-green-200/20 dark:border-green-800/20 text-gray-700 dark:text-gray-200 hover:border-green-400 transition-all cursor-pointer"
          >
            {isDark ? <Sun size={18} className="text-green-400" /> : <Moon size={18} className="text-green-600" />}
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all no-underline shadow-md shadow-green-500/20"
          >
            <span>Let's talk</span>
            <ArrowRight size={16} />
          </motion.a>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-green-200/20 dark:border-green-800/20 text-gray-800 dark:text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="md:hidden absolute top-20 left-4 right-4 p-5 bg-white/80 dark:bg-gray-950/80 backdrop-blur-2xl rounded-2xl shadow-xl border border-green-200/20 dark:border-green-800/20 z-50"
          >
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex justify-between items-center no-underline ${
                    activeTab === item.id
                      ? 'bg-green-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20'
                  }`}
                >
                  {item.title}
                  {activeTab === item.id ? <ArrowRight size={16} /> : <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />}
                </a>
              ))}
              <div className="h-px bg-green-200/30 dark:bg-green-800/20 my-3" />
              <a
                href="https://github.com/kasimtp"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 dark:text-gray-400 font-semibold no-underline hover:text-green-600 transition-colors text-sm"
              >
                <Github size={18} /> Github Profile
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
