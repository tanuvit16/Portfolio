// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "motion/react"

// const About=({isDarkMode})=> {
//      const infoList = [
//         { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
//         { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
//         { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
//     ];
//     const toolsData = [
//         assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
//     ];
//   return (
//     <motion.div 
//     id='about' className='w-full px-[12%] py-10 scroll-mt-20' 
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1}}
//     >
//         <motion.h4
//            initial={{opacity:0,y:-20}}
//            whileInView={{opacity:1,y:0}}
//            transition={{duration:0.5,delay:0.3}}
//          className='text-center mb-2 text-lg font-Ovo'>
//             Introduction</motion.h4>
//         <motion.h2 
//              initial={{opacity:0,y:-20}}
//              whileInView={{opacity:1,y:0}}
//              transition={{duration:0.5,delay:0.5}}
//         className="text-center text-5xl font-Ovo">About me</motion.h2>
//       <motion.div 
//            initial={{opacity:0}}
//            whileInView={{opacity:1}}
//            transition={{duration:0.8}}
//       className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
//         <motion.div 
//              initial={{opacity:0,sacle:0.9}}
//              whileInView={{opacity:1,scale:1}}
//              transition={{duration:0.6}}
//              className='w-64 sm:w-80 rounded-3xl max-w-none'>
//             <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
//         </motion.div>
//         <motion.div 
//              initial={{opacity:0}}
//              whileInView={{opacity:1}}
//              transition={{duration:0.8,delay:1}}
//         className='flex-1'>
// <p className='mb-10 max-w-2xl font-Ovo'> afefjfj wfw fwfw wf  fw f wfw f fwf wfwg wrg gww g gw gwg w g  wgw </p>
// <motion.ul
//      initial={{opacity:0}}
//      whileInView={{opacity:1,y:0}}
//      transition={{duration:0.5,delay:0.3}}
// className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
//     {infoList.map(({icon,iconDark,title,description},index)=>(
//         <motion.li
//         whileInView={{scale:1.05}}
//         className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
//             <Image src={isDarkMode? iconDark : icon} alt={title}/>
//             <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
//             <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>

//         </motion.li>
//     ))}
// </motion.ul>
// <motion.h4 
//      initial={{y:20,opacity:0,y:-20}}
//      whileInView={{y:0,opacity:1,y:0}}
//      transition={{duration:1.3,delay:0.5}}
// className='my-6 text-gray-700 font-Ovo  dark:text-white/80'>
//     Tools I use
// </motion.h4>
// <motion.ul
//      initial={{opacity:0}}
//      whileInView={{opacity:1}}
//      transition={{duration:1.5,delay:0.6}}
// className='flex items-center gap-3 sm:gap-5'>
//     {toolsData.map((tool,index)=>(
//         <motion.li 
//         whileHover={{scale:1.05}}
//         className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg courser-pointer  hover:-translate-y-1 duration-500 'key={index}>
//         <Image src={tool} alt='Tool' className='w-5 sm:w-7'/></motion.li>
//     ))}
// </motion.ul>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default About












import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const About = ({ isDarkMode }) => {
    const infoList = [
        { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript,Bootdtrap,React' },
        { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
        { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
    ];
    
    const toolsData = [
        assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
    ];

    return (
        <motion.div 
            id='about' 
            className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Subtle Floating Background Element */}
            <motion.div 
                className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ repeat: Infinity, duration: 6 }}
            ></motion.div>

            {/* Title Section */}
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                Introduction
            </motion.h4>
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                About Me
            </motion.h2>

            {/* Content Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex flex-col lg:flex-row items-center gap-20 my-20'
            >
                {/* Profile Image with Hover Effect */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className='w-64 sm:w-80 rounded-3xl shadow-lg transform transition-all duration-300'
                >
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>

                {/* Text & Information Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className='flex-1'
                >
                    <p className='mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 text-lg leading-relaxed'>
                        I'm a passionate frontend developer with a deep love for building beautiful and functional web experiences. With a strong background in web technologies, I thrive on turning ideas into reality through code.
                    </p>

                    {/* Info Cards */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                    >
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                key={index}
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-10 h-10' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Tools Section */}
                    <motion.h4 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3, delay: 0.5 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-xl'
                    >
                        Tools I Use
                    </motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className='flex flex-wrap justify-center items-center gap-4 sm:gap-5'
                    >
                        {toolsData.map((tool, index) => (
                            <motion.li 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className='flex items-center justify-center w-14 sm:w-16 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-gray-50 dark:bg-darkHover/50 dark:border-white/50'
                                key={index}
                            >
                                <Image src={tool} alt='Tool' className='w-8 sm:w-10' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;




















