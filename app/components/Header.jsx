'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">

      {/* Left Panel - Purple Gradient with curved bottom-right corner */}
      <div 
        className="
          bg-gradient-to-br from-purple-100 to-purple-300 
          w-full md:w-1/2 
          flex flex-col items-center justify-center text-center 
          p-10 gap-6
          rounded-b-[5rem] md:rounded-br-[8rem] md:rounded-bl-none rounded-tr-none rounded-tl-[2rem]
          md:rounded-tl-none
          shadow-lg
        "
        style={{ borderBottomRightRadius: '8rem' }}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
        >
          <Image
            src={assets.profile_img}
            alt="Profile"
            className="rounded-full w-40 border-4 border-purple-300 shadow-purple-300 shadow-xl"
          />
        </motion.div>

        {/* Name and Wave */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-cursive font-bold text-purple-800 flex items-center justify-center gap-2"
        >
          Hello! I'm Tanu 💜
          <Image src={assets.hand_icon} alt="Wave" className="w-6" />
        </motion.h3>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-sm text-purple-700 font-medium text-base leading-relaxed"
        >
          I’m a Computer Science Engineering student at VIT Vellore who enjoys building clean, responsive web applications. Passionate about Software development and always eager to learn new technologies
        </motion.p>
      </div>

      {/* Right Panel - White background with curved top-left corner */}
      <div 
        className="
          bg-white dark:bg-black text-black dark:text-white 
          w-full md:w-1/2 
          flex flex-col items-center justify-center text-center 
          p-10 gap-8
          rounded-t-[5rem] md:rounded-tl-[8rem] md:rounded-tr-none rounded-br-none rounded-bl-[2rem]
          md:rounded-br-none
          shadow-lg
        "
        style={{ borderTopLeftRadius: '8rem' }}
      >

        {/* Tagline */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight font-cursive text-purple-700"
        >
          💫 Code with Grace, Build with Passion 💫
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-md text-lg font-light text-gray-600 dark:text-gray-300"
        >
          Soft as lavender, sharp as logic ✨ Building digital beauty with code. Empowering, expressive, elegant. 👩‍💻💜
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">

          {/* Contact */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            href="#contact"
            className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
          >
            ✨ Contact Me
          </motion.a>

          {/* Resume */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="Tanu_VIT_Resume.pdf"
            download
            className="px-6 py-3 rounded-full border-2 border-purple-400 text-purple-700 bg-white hover:bg-purple-100 hover:scale-105 transition-all duration-300 font-semibold"
          >
            📄 My Resume
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Header
