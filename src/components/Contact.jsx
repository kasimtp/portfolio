import React from 'react';
import { motion } from 'framer-motion';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0e1628] text-white py-16 px-5 md:px-0">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Left Side */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl font-extrabold text-cyan-400 mb-2">Get in Touch</h2>
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                I&lsquo;m always open to new opportunities and collaboration. Feel free to reach out!
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5">
              {[facebook, instagram, linkedin].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img src={icon} alt="icon" className="h-7 w-7" />
                </motion.a>
              ))}
            </div>

            <div className="max-w-sm lg:max-w-md mx-auto md:mx-0">
              <Lottie animationData={contact} />
            </div>
          </motion.div>

          {/* Right Side: Form (no input changes) */}
          <motion.form
            className="w-full md:w-1/2 bg-white text-gray-800 rounded-xl border border-cyan-400 shadow-[0_0_60px_10px_rgba(6,182,212,0.3)] p-8 space-y-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">Contact Me</h3>

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="mt-1 p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mt-1 p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message"
                className="mt-1 p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;