import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';

const Footer = ({ isDarkMode }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`w-[95%] mx-auto mt-24 px-4 py-12 
        ${isDarkMode ? 'bg-gradient-to-tr from-purple-900 to-purple-800' : 'bg-gradient-to-tr from-purple-200 to-purple-100'} 
        text-center text-purple-900 dark:text-white shadow-xl relative`}
      style={{
        borderTopLeftRadius: '3.5rem',
        borderBottomRightRadius: '3.5rem',
        borderTopRightRadius: '0',
        borderBottomLeftRadius: '0',
      }}
    >
      {/* Name */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-Ovo mb-8 tracking-wide text-pink-300"
      >
        Tanu
      </motion.h2>

      {/* Email & Phone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-4 mb-8"
      >
        <div className="flex justify-center items-center gap-2 text-lg font-medium">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="email"
            className="w-6 h-6"
          />
          <span>tanuvit16@gmail.com</span>
        </div>
        <div className="flex justify-center items-center gap-2 text-lg font-medium">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="phone"
            className="w-6 h-6"
          />
          <span>+91 8756396952</span>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-purple-300 w-[80%] mx-auto my-6"></div>

      {/* Footer Bottom */}
      <motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}
  className={`flex flex-col sm:flex-row justify-between items-center text-sm 
    ${isDarkMode ? 'text-purple-200' : 'text-purple-700'}`}
>
  <p>© Tanu — All rights reserved</p>

  <ul className="flex gap-6 mt-4 sm:mt-0">
    {[
      { name: 'GitHub', url: 'https://github.com/tanuvit16' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/tanu-vit-7697a428a' },
      { name: 'Twitter', url: '#' },
    ].map(({ name, url }, idx) => (
      <li key={idx}>
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className={`font-semibold transition-all duration-300
            ${isDarkMode
              ? 'text-purple-200 hover:text-pink-300'
              : 'text-purple-700 hover:text-pink-500'
            }`}
        >
          {name}
        </motion.a>
      </li>
    ))}
  </ul>
</motion.div>
    </motion.footer>
  );
};

export default Footer;
