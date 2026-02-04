

import React from 'react';
import { motion } from 'framer-motion';

function Work({ isDarkMode }) {
  const workData = [
    // { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
    // { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
    // { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
    // { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
    // { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
  ];

  return (
    <motion.section
      id="work"
      className="
        w-full max-w-[95%] mx-auto my-24 px-2 py-12 
        bg-gradient-to-br from-purple-100 to-purple-300
        dark:bg-[#E5D4F7]
        shadow-xl relative
      "
      style={{
        borderTopLeftRadius: '3.5rem',
        borderBottomRightRadius: '3.5rem',
        borderTopRightRadius: '0',
        borderBottomLeftRadius: '0',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-purple-800 tracking-wide uppercase"
      >
        My Projects
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-bold font-Ovo text-purple-900 mb-6"
      >
        Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-800 leading-relaxed"
      >
        Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
      >
        {workData.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.07 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
            style={{
              paddingTop: '65%',
              backgroundImage: `url(${project.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Work;
