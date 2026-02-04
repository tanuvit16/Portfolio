'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { assets } from '@/assets/assets'


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "7d6a4b18-b011-4e15-a864-a605cd574cf4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans overflow-hidden" id="contact">

      {/* Left Panel - Contact Info */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-purple-100 to-purple-300 w-full md:w-1/2 flex flex-col items-center justify-center text-center p-10 gap-6 rounded-b-[5rem] md:rounded-br-[8rem] md:rounded-bl-none rounded-tr-none rounded-tl-[2rem] md:rounded-tl-none shadow-lg relative z-10"
        style={{ borderBottomRightRadius: '8rem' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-purple-800 font-cursive"
        >
          Let's Connect 💌
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-sm text-purple-700 font-medium text-base leading-relaxed"
        >
          I'm open to new opportunities and projects. Feel free to reach out by sending a message. I’ll respond as soon as I can!
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hover:scale-110 transition-transform duration-500"
        >
        
        </motion.div>
      </motion.div>

      {/* Right Panel - Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-black text-black dark:text-white w-full md:w-1/2 flex flex-col justify-center p-10 gap-6 rounded-t-[5rem] md:rounded-tl-[8rem] md:rounded-tr-none rounded-br-none rounded-bl-[2rem] md:rounded-br-none shadow-lg relative z-10"
        style={{ borderTopLeftRadius: '8rem' }}
      >
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl mx-auto w-full backdrop-blur-xl bg-white/50 dark:bg-black/40 p-8 rounded-3xl shadow-2xl border border-purple-200 dark:border-white/30"
        >
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-purple-400"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-purple-400"
            />
          </motion.div>

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            className="w-full mt-6 p-3 rounded-md border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-purple-400"
          />

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#7e22ce' }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="mt-6 w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 shadow-xl"
          >
            📩 Send Message
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300"
          >
            {result}
          </motion.p>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
