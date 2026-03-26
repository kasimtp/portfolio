import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import { Mail, MessageSquare, User, Send, CheckCircle, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';
import contactAnim from '../assets/Contact.json';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',form.current,'YOUR_PUBLIC_KEY')
      .then(() => {
        setIsSent(true); setIsSending(false); form.current.reset();
        setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
        console.error('Email failed:', error.text); setIsSending(false);
        alert('Something went wrong.');
      });
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-kasim-tp" },
    { icon: Github, href: "https://github.com/kasimtp" },
    { icon: Instagram, href: "https://www.instagram.com/kasim_mhd__" },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-green-50/40 dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-green-200/20 dark:bg-green-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <motion.div className="flex-1 lg:sticky lg:top-32" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200/40 dark:border-green-800/30 text-green-600 dark:text-green-400 text-xs font-semibold uppercase tracking-widest rounded-lg mb-5">
              <Sparkles size={14} /><span>Let's Connect</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Let's Build Something <br /><span className="text-green-500 italic">Extraordinary.</span></h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10 max-w-md">Whether you have a question, a project proposal, or just want to say hi, it's always a good time to connect.</p>
            <div className="mb-10">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-gray-900 border border-green-200/40 dark:border-green-800/30 flex items-center justify-center text-gray-400 group-hover:text-green-500 transition-all"><Mail size={20} /></div>
                <div><p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Email Me</p><p className="font-semibold text-gray-900 dark:text-white text-sm">tpkasimvlr@gmail.com</p></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <motion.a key={i} href={social.href} target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.05 }} className="w-10 h-10 rounded-xl bg-green-50 dark:bg-gray-900 border border-green-200/40 dark:border-green-800/30 flex items-center justify-center text-gray-400 hover:text-green-500 transition-all duration-300">
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="hidden lg:block mt-10 max-w-[200px] opacity-60 dark:opacity-40"><Lottie animationData={contactAnim} /></div>
          </motion.div>

          <motion.div className="w-full lg:w-[480px]" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative p-7 sm:p-10 rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl border border-green-200/30 dark:border-green-800/20 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-400/10 dark:bg-green-500/5 blur-3xl rounded-full" />
              <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-6">
                <div className="space-y-5">
                  <div className="group">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 group-focus-within:text-green-500 transition-colors mb-2 block ml-1">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-600 group-focus-within:text-green-500 transition-colors" size={18} />
                      <input type="text" name="user_name" required placeholder="Mohd Kasim" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-green-50/50 dark:bg-gray-800/50 border border-green-200/40 dark:border-green-800/30 outline-none font-medium text-sm text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:border-green-500 dark:focus:border-green-400 transition-all" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 group-focus-within:text-green-500 transition-colors mb-2 block ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-600 group-focus-within:text-green-500 transition-colors" size={18} />
                      <input type="email" name="user_email" required placeholder="hello@kasim.com" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-green-50/50 dark:bg-gray-800/50 border border-green-200/40 dark:border-green-800/30 outline-none font-medium text-sm text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:border-green-500 dark:focus:border-green-400 transition-all" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 group-focus-within:text-green-500 transition-colors mb-2 block ml-1">Your Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-4 text-gray-300 dark:text-gray-600 group-focus-within:text-green-500 transition-colors" size={18} />
                      <textarea name="message" required rows="4" placeholder="Let's talk about..." className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-green-50/50 dark:bg-gray-800/50 border border-green-200/40 dark:border-green-800/30 outline-none font-medium text-sm text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:border-green-500 dark:focus:border-green-400 transition-all resize-none" />
                    </div>
                  </div>
                </div>
                <button type="submit" disabled={isSending || isSent} className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-500 cursor-pointer ${isSent ? 'bg-green-500 text-white' : 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20'}`}>
                  <AnimatePresence mode="wait">
                    {isSending ? (<motion.div key="l" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Sending...</span></motion.div>)
                    : isSent ? (<motion.div key="s" initial={{scale:0.5,opacity:0}} animate={{scale:1,opacity:1}} className="flex items-center gap-2"><CheckCircle size={16} /><span>Message Sent</span></motion.div>)
                    : (<motion.div key="d" initial={{opacity:0}} animate={{opacity:1}} className="flex items-center gap-2"><Send size={16} /><span>Send Message</span></motion.div>)}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
