//first
// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "motion/react"

// const Header=()=> {
//   return (
//     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
//       <motion.div 
//       initial={{scale:0}}
//       whileInView={{scale:1}}
//       transition={{duration:0.8,type:'spring',stiffness:100}}>
//         <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
       
//       </motion.div>
//       <motion.h3 
//        initial={{y:-20,opacity:0}}
//        whileInView={{y:0,opacity:1}}
//        transition={{duration:0.6,delay:0.3}}
//       className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'> Hi! I'm William Mark <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>
//       <motion.h1
//      initial={{y:-30,opacity:0}}
//      whileInView={{y:0,opacity:1}}
//      transition={{duration:0.8,delay:0.5}}
//       className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo' > frontend web developer based in London.</motion.h1>
//    <motion.p
//    initial={{opacity:0}}
//    whileInView={{opacity:1}}
//    transition={{duration:0.6,delay:0.7}}
//      className='max-w-2xl mx-auto font-Ovo'>
//     I am a frontend developer from california,Usa with 10 year of experience in multiple companies like microsoft ,tesla
//    </motion.p>
//    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
//     <motion.a
//     initial={{y:30,opacity:0}}
//     whileInView={{y:0,opacity:1}}
//     transition={{duration:0.6,delay:1}}
//     href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>Contact me  <Image src={assets.right_arrow_white} alt='' className=' w-4'/></motion.a>

//     <motion.a
//      initial={{y:30,opacity:0}}
//      whileInView={{y:0,opacity:1}}
//      transition={{duration:0.6,delay:1.2}}
//      href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My resume  <Image src={assets.download_icon} alt='' className=' w-4'/></motion.a>
//    </div>
//     </div>
//   )
// }

// export default Header






















//2nd
// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "framer-motion"

// const Header = () => {
//   return (
//     <motion.div 
//       className='relative w-full px-[12%] h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Subtle Floating Background Element */}
//       <motion.div 
//         className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//       ></motion.div>

//       {/* Profile Image Animation */}
//       <motion.div 
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
//         <Image src={assets.profile_img} alt="Profile" className='rounded-full w-36 shadow-lg' />
//       </motion.div>

//       {/* Greeting Animation */}
//       <motion.h3 
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className='flex items-end gap-2 text-xl md:text-2xl font-Ovo text-gray-700 dark:text-gray-300'
//       >
//         Hi! I'm William Mark
//         <Image src={assets.hand_icon} alt="Hand Icon" className='w-6' />
//       </motion.h3>

//       {/* Title Animation */}
//       <motion.h1
//         initial={{ y: -30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className='text-3xl sm:text-5xl lg:text-[64px] font-Ovo leading-tight text-gray-900 dark:text-white'
//       >
//         Frontend Web Developer based in London.
//       </motion.h1>

//       {/* Bio Animation */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.7 }}
//         className='max-w-2xl mx-auto text-lg font-Ovo text-gray-700 dark:text-gray-300'
//       >
//         I am a frontend developer from <span className="font-semibold">California, USA</span> with <span className="font-semibold">10 years</span> of experience in top companies like Microsoft and Tesla.
//       </motion.p>

//       {/* Buttons */}
//       <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>

//         {/* Contact Button */}
//         <motion.a
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 1 }}
//           href="#contact"
//           className='px-8 py-3 border border-black dark:border-white rounded-full bg-black text-white flex items-center gap-2 font-semibold shadow-md hover:scale-105 transition-all duration-300 dark:bg-transparent dark:hover:bg-darkHover'
//         >
//           Contact me  
//           <Image src={assets.right_arrow_white} alt="Arrow" className='w-4' />
//         </motion.a>

//         {/* Resume Button */}
//         <motion.a
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 1.2 }}
//           href="/sample-resume.pdf" download
//           className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
//         >
//           My Resume  
//           <Image src={assets.download_icon} alt="Download" className='w-4' />
//         </motion.a>

//       </div>
//     </motion.div>
//   )
// }

// export default Header;













// // laga hua jo tha
import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6'>
      
      {/* Profile Image Animation */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
        <Image src={assets.profile_img} alt="Profile" className='rounded-full w-36 shadow-lg' />
      </motion.div>

      {/* Greeting Animation */}
      <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl font-Ovo'>
        Hi! I'm William Mark
        <Image src={assets.hand_icon} alt="Hand Icon" className='w-6' />
      </motion.h3>

      {/* Title Animation */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-5xl lg:text-[64px] font-Ovo leading-tight'>
        Frontend Web Developer based in London.
      </motion.h1>

      {/* Bio Animation */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto text-lg font-Ovo text-gray-700 dark:text-gray-300'>
        I am a frontend developer from <span className="font-semibold">California, USA</span> with <span className="font-semibold">10 years</span> of experience in top companies like Microsoft and Tesla.
      </motion.p>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>

        {/* Contact Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className='px-8 py-3 border border-black dark:border-white rounded-full bg-black text-white flex items-center gap-2 font-semibold shadow-md hover:scale-105 transition-all duration-300 dark:bg-transparent'>
          Contact me  
          <Image src={assets.right_arrow_white} alt="Arrow" className='w-4' />
        </motion.a>

        {/* Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf" download
        className=
        // 'px-8 py-3 border border-gray-500 rounded-full bg-white text-black dark:text-white flex items-center gap-2 font-semibold shadow-md hover:scale-105 transition-all duration-300  dark:bg-darkHover'
        
        
       'px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          My Resume  
          <Image src={assets.download_icon} alt="Download" className='w-4' />
        </motion.a>

      </div>
    </div>
  )
}

export default Header;



























// // // Final
// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "framer-motion"

// const Header = () => {
//   return (
//     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg'>
      
//       {/* Profile Image Animation */}
//       <motion.div 
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
//         className='bg-white p-2 rounded-full shadow-2xl'>
//         <Image src={assets.profile_img} alt="Profile" className='rounded-full w-36' />
//       </motion.div>

//       {/* Greeting Animation */}
//       <motion.h3 
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className='flex items-end gap-2 text-xl md:text-2xl font-Ovo'>
//         Hi! I'm <span className='text-yellow-300'>Vipul Kumar</span>.
//         <Image src={assets.hand_icon} alt="Hand Icon" className='w-6' />
//       </motion.h3>

//       {/* Title Animation */}
//       <motion.h1
//         initial={{ y: -30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className='text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight text-white drop-shadow-lg'>
//         Full Stack Web Developer
//       </motion.h1>

//       {/* Bio Animation */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.7 }}
//         className='max-w-2xl mx-auto text-lg font-light text-white/90'>
//         I am a frontend developer from <span className="font-semibold text-yellow-300">California, USA</span> with <span className="font-semibold text-yellow-300">10 years</span> of experience in top companies like Microsoft and Tesla.
//       </motion.p>

//       {/* Buttons */}
//       <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>
//         {/* Contact Button */}
//         <motion.a
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           whileHover={{ scale: 1.05, opacity: 0.9 }}
//           transition={{ duration: 0.3 }}
//           href="#contact"
//           className='px-8 py-3 rounded-full bg-yellow-400 text-black flex items-center gap-2 font-semibold shadow-md hover:bg-yellow-500 transition duration-300'>
//           Contact Me  
//           <Image src={assets.right_arrow_white} alt="Arrow" className='w-4' />
//         </motion.a>

//         {/* Resume Button */}
//         <motion.a
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           whileHover={{ scale: 1.05, opacity: 0.9 }}
//           transition={{ duration: 0.3 }}
//           href="/sample-resume.pdf" download
//           className='px-10 py-3 rounded-full border-2 border-white flex items-center gap-2 bg-transparent text-white shadow-md hover:bg-white hover:text-black transition duration-300'>
//           My Resume  
//           <Image src={assets.download_icon} alt="Download" className='w-4' />
//         </motion.a>
//       </div>
//     </div>
//   )
// }

// export default Header;












