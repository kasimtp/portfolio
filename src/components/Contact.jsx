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

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        form.current,
        'YOUR_PUBLIC_KEY' 
      )
      .then(
        () => {
          setIsSent(true);
          setIsSending(false);
          form.current.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.error('Email failed:', error.text);
          setIsSending(false);
          alert('❌ Something went wrong. Please check your EmailJS configuration.');
        }
      );
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-kasim-tp", color: "hover:text-blue-600" },
    { icon: Github, href: "https://github.com/kasimtp", color: "hover:text-slate-900 dark:hover:text-white" },
    { icon: Instagram, href: "https://www.instagram.com/kasim_mhd__", color: "hover:text-pink-600" }
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Content & Socials */}
          <motion.div 
            className="flex-1 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest rounded-lg mb-6"
            >
              <Sparkles size={14} />
              <span>Let's Connect</span>
            </motion.div>

            <h2 className="font-heading text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8">
              Let's Build Something <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
                Extraordinary.
              </span>
            </h2>

            <p className="font-body text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-12 max-w-lg">
              Whether you have a question, a project proposal, or just want to say hi,
              it's always a good time to connect. My inbox is always open!
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Me</p>
                  <p className="font-bold text-slate-900 dark:text-white">tpkasimvlr@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 ${social.color} shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-300`}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>

            {/* Lottie Animation Visibility on Desktop */}
            <div className="hidden lg:block mt-12 max-w-xs opacity-80 mix-blend-multiply dark:mix-blend-screen grayscale dark:grayscale-0 contrast-125 dark:contrast-100">
              <Lottie animationData={contactAnim} />
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            className="w-full lg:w-[540px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-8 sm:p-12 rounded-[48px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-3xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
              {/* Decorative Blur */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full" />
              
              <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-8">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="relative group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-blue-600 transition-colors mb-2 block ml-2">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                      <input
                        type="text"
                        name="user_name"
                        required
                        placeholder="Mohd Kasim"
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500 outline-none font-bold text-slate-900 dark:text-white transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-blue-600 transition-colors mb-2 block ml-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                      <input
                        type="email"
                        name="user_email"
                        required
                        placeholder="hello@kasim.com"
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500 outline-none font-bold text-slate-900 dark:text-white transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="relative group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-blue-600 transition-colors mb-2 block ml-2">Your Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                      <textarea
                        name="message"
                        required
                        rows="5"
                        placeholder="Let's talk about..."
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500 outline-none font-bold text-slate-900 dark:text-white transition-all placeholder:text-slate-300 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending || isSent}
                  className={`w-full relative flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden ${
                    isSent 
                    ? 'bg-green-500 text-white' 
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:shadow-2xl hover:shadow-blue-500/30'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isSending ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    ) : isSent ? (
                      <motion.div
                        key="sent"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle size={18} />
                        <span>Message Sent</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <Send size={18} className="rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>Send Message</span>
                      </motion.div>
                    )}
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
