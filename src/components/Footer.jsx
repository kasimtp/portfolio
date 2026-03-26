import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-green-200/30 dark:border-green-900/20 transition-colors duration-500 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl tracking-tight text-gray-900 dark:text-white mb-1.5">
              Kasim<span className="text-green-500">.</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Crafted with precision, passion, and modern web technologies.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/kasimtp" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-kasim-tp" },
              { icon: Mail, href: "mailto:tpkasimvlr@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                className="w-9 h-9 rounded-lg bg-green-50 dark:bg-gray-900 border border-green-200/40 dark:border-green-800/30 flex items-center justify-center text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                <social.icon size={18} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 hover:text-green-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-green-200/30 dark:bg-green-900/20 w-full my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-xs font-medium text-center">
            &copy; {currentYear} Muhammed Kasim TP. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold text-gray-400">
            <span>Made with</span>
            <Heart size={12} className="text-green-500 fill-green-500" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
