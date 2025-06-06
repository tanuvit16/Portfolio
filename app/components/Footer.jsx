// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// const Footer=({isDarkMode})=> {
//   return (
//     <div className='mt-20'>
//       <div className='text-center'>
//         <Image src={isDarkMode? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>
//         <div className='w-max flex items-center gap-2 mx-auto'>
//             <Image src={isDarkMode? assets.mail_icon_dark :assets.mail_icon} alt='' className='w-6'/>
//             tovipul.kr@gmail.com
//         </div>
//       </div>
//       <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'> 
//         <p> © 2025 williom mark all right reserved</p>
//       <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
//         <li><a target='_blank' href="https://instagram.comgreatdda"> Github</a></li>
//         <li><a target='_blank' href="https://instagram.comgreatdda">linked</a></li>
//         <li><a target='_blank' href="https://instagram.comgreatdda">twitter</a></li>
//       </ul>
//       </div>
//     </div>
//   )
// }

// export default Footer


















import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className='relative w-full px-[10%] py-16 bg-gradient-to-t from-gray-100 to-white dark:from-darkTheme dark:to-darkHover overflow-hidden'
    >
      {/* Floating Background Elements */}
      <motion.div 
        className="absolute top-10 left-20 w-32 h-32 bg-blue-400 opacity-30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 7 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-10 right-20 w-24 h-24 bg-purple-400 opacity-30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>

      {/* Logo & Email */}
      <div className='text-center'>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo' className='w-36 mx-auto mb-3' />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-white text-lg font-medium'
        >
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Email' className='w-6' />
          <span>tovipul.kr@gmail.com</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-white text-lg font-medium'
        >
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Email' className='w-6' />
          <span>9523354658</span>
        </motion.div>
      </div>

      {/* Copyright & Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='mt-12 border-t border-gray-400 pt-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-gray-600 dark:text-gray-300'
      > 
        <p>© Vipul Kumar - All rights reserved</p>
        <ul className='flex items-center gap-6 mt-4 sm:mt-0'>
          {[
            { name: 'Github', url: 'https://github.com/vipul1029' },
            { name: 'LinkedIn', url: 'https://linkedin.com/in/vipul-kumar-7697a428a' },
            { name: 'Twitter', url: '#' }
          ].map(({ name, url }, index) => (
            <li key={index}>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                target='_blank' 
                href={url}
                className={`transition-all duration-300 font-medium ${
                  isDarkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'
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








