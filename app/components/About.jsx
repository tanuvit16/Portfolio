import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  const infoList = [
    {
      icon: assets.code_icon,
      iconDark: assets.code_icon_dark,
      title: 'Languages',
      description: 'HTML, CSS, JavaScript, C, C++, Java, Python',
    },
    {
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark,
      title: 'Education',
      description: 'B.Tech in Computer Science',
    },
    {
      icon: assets.project_icon,
      iconDark: assets.project_icon_dark,
      title: 'Projects',
      description: 'Built more than 5 projects',
    },
  ];

  const toolsData = [
    assets.vscode,
    assets.firebase,
    assets.mongodb,
    assets.figma,
    assets.git,
  ];

  return (
    <motion.section
      id="about"
      className="w-full max-w-[95%] mx-auto my-24 px-2 py-12 shadow-xl relative 
                 bg-gradient-to-tr from-purple-100 to-purple-300
                 rounded-tl-[40px] rounded-br-[40px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row gap-16 items-center">

        {/* Profile Image */}
        <motion.div
          className="relative w-72 h-96 rounded-xl overflow-hidden border-8 border-purple-500 shadow-[0_0_30px_rgba(128,0,128,0.6)]"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={assets.user_image}
            alt="Profile image of Tanu"
            fill
            className="object-cover"
            loading="lazy"
          />

          <motion.div
            className="absolute inset-0 rounded-xl border-4 border-purple-400 opacity-40"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-12">
          <h2 className="text-4xl font-extrabold text-purple-900">
            About Tanu
          </h2>

          <p className="text-lg text-purple-800 leading-relaxed max-w-xl">
            I’m an enthusiastic 3rd-year Computer Science Engineering student at VIT Vellore
            with a strong foundation in C, C++, Data Structures, Algorithms, and full-stack
            development. I enjoy building responsive, user-friendly applications and
            continuously improving my problem-solving skills through hands-on projects.
          </p>

          {/* Info Cards */}
          <div className="flex flex-col gap-6">
            {infoList.map(({ icon, iconDark, title, description }, i) => {
              const iconSrc = isDarkMode && iconDark ? iconDark : icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 6px 15px rgba(128,0,128,0.3)',
                  }}
                  className="flex items-center gap-6 p-5 rounded-lg bg-white shadow-md border border-purple-300"
                >
                  {iconSrc && (
                    <Image
                      src={iconSrc}
                      alt={`${title} icon`}
                      width={48}
                      height={48}
                      className={isDarkMode ? 'invert brightness-200' : ''}
                    />
                  )}

                  <div>
                    <h3 className="text-purple-900 font-semibold text-xl">
                      {title}
                    </h3>
                    <p className="text-purple-800">{description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tools */}
          <h3 className="text-xl font-semibold text-purple-800">
            Tools I Use
          </h3>

          <div className="flex gap-6 flex-wrap max-w-xl">
            {toolsData.map(
              (tool, idx) =>
                tool && (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: '0 8px 20px rgba(128,0,128,0.3)',
                    }}
                    className="w-14 h-14 bg-white border border-purple-400 rounded-lg flex items-center justify-center shadow-sm"
                  >
                    <Image
                      src={tool}
                      alt="Technology tool icon"
                      width={40}
                      height={40}
                      style={{ width: 'auto', height: 'auto' }}
                      className={isDarkMode ? 'invert brightness-200' : ''}
                    />
                  </motion.div>
                )
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
