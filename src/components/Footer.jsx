import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-[#020617] border-t border-slate-100 dark:border-slate-800 transition-colors duration-500 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-black text-2xl tracking-tighter text-slate-900 dark:text-white mb-2 uppercase">
              Kasim<span className="text-blue-600">.</span>
            </h3>
            <p className="font-body text-slate-500 text-sm max-w-xs leading-relaxed">
              Crafted with precision, passion, and modern web technologies. Focus on scaling digital experiences.
            </p>
          </div>

          {/* Social Links Small */}
          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/kasimtp" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-kasim-tp" },
              { icon: Mail, href: "mailto:kasimtp@example.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors duration-300"
              >
                <social.icon size={22} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Navigation Links (Quick Links) */}
          <div className="hidden lg:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-slate-100 dark:bg-slate-800 w-full my-10" />

        {/* Copyright & Sign-off */}
        <div className="flex flex-col sm:row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest text-center">
            &copy; {currentYear} Muhammed Kasim TP. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-slate-500">
            <span>Made with</span>
            <Heart size={14} className="text-pink-600 fill-pink-600 animate-pulse" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
