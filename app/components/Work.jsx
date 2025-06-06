// import React from 'react'
// import Image from 'next/image'
// import { assets } from '@/assets/assets'
// import { motion } from "motion/react"

// function Work(isDarkMode) {
//     const workData = [
//         {
//             title: 'Frontend project',
//             description: 'Web Design',
//             bgImage: '/work-1.png',
//         },
//         {
//             title: 'Geo based app',
//             description: 'Mobile App',
//             bgImage: '/work-2.png',
//         },
//         {
//             title: 'Photography site',
//             description: 'Web Design',
//             bgImage: '/work-3.png',
//         },
//         {
//             title: 'UI/UX designing',
//             description: 'UI/UX Design',
//             bgImage: '/work-4.png',
//         },
//     ]
//   return (
//     <motion.div
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1}}
//     id='work' className='w-full px-[12%] py-10 scroll-mt-20' >
//       <motion.h4
//         initial={{opacity:0,y:-20}}
//         whileInView={{opacity:1,y:0}}
//         transition={{duration:0.5,delay:0.3}}
//       className='text-center mb-2 text-lg font-Ovo'>
//         My portfolio</motion.h4>
//       <motion.h2
//         initial={{opacity:0,y:-20}}
//         whileInView={{opacity:1,y:0}}
//         transition={{duration:0.5,delay:0.5}}
//       className='text-center text-5xl font-Ovo'>
//         My latest work
//       </motion.h2>
//  <motion.p
//    initial={{opacity:0,y:-20}}
//    whileInView={{opacity:1,y:0}}
//    transition={{duration:0.5,delay:0.7}}
//  className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>

//     welcome to my web development portfolio explore a collectio of project showing my experience in front-end development.
// </motion.p>
// {/* <div className='grid grid-cols-auto my-10 gap-5'> */}
// <motion.div 
//   initial={{opacity:0}}
//   whileInView={{opacity:1}}
//   transition={{duration:0.6,delay:0.9}}
// className='grid grid-cols-1 md:grid-cols-4 gap-5 my-10 dark:text-black'>

//     {workData.map((project,index)=>(
//   <motion.div 
//   whileHover={{scale:1.05}}
//   transition={{dustion:0.3}}
//   key={index} 
//   className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
//   style={{backgroundImage:`url(${project.bgImage})`}}>
//     <div className ='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
//     duration-500 group-hover:bottom-7'>
//     <div>
//         <h2 className='font-semibold'>{project.title}</h2>
//         <p className='text-sm text-gray-700'>{project.description}</p>
//     </div>
//     <div className='boder rounded-full boder-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
//      group-hover:bg-lime-300 transsition'>
//         {/* <Image src={assets.send_icon} alt='send icon' className='w-5'/> */}
//         <Image src={assets.send_icon} alt='send icon' width={20} height={20} />

//     </div>
//     </div>
    
//      </motion.div>

//     ))}
// </motion.div>
// <motion.a 
//   initial={{opacity:0}}
//   whileInView={{opacity:1}}
//   transition={{duration:0.5,delay:1.1}}
// href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
// rounded-full y-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover' >
//     Show more <Image src={isDarkMode? assets.right_arrow_bold_dark :assets.right_arrow_bold} alt='Right arrow' 
//     className='w-4'/>
// </motion.a>
//     </motion.div>
//   )
// }

// export default Work















// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//     const workData = [
//         { title: 'Frontend project', description: 'Web Design', bgImage: '/work-1.png' },
//         { title: 'Geo based app', description: 'Mobile App', bgImage: '/work-2.png' },
//         { title: 'Photography site', description: 'Web Design', bgImage: '/work-3.png' },
//         { title: 'UI/UX designing', description: 'UI/UX Design', bgImage: '/work-4.png' }
//     ];

//     return (
//         <motion.div 
//             id='work' 
//             className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             {/* Subtle Floating Background Element */}
//             <motion.div 
//                 className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
//                 animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//                 transition={{ repeat: Infinity, duration: 6 }}
//             ></motion.div>

//             {/* Title Section */}
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'
//             >
//                 My Portfolio
//             </motion.h4>
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 My Latest Work
//             </motion.h2>
//             <motion.p
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.7 }}
//                 className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
//             >
//                 Welcome to my web development portfolio. Explore a collection of projects showcasing my expertise in Full Stack development.
//             </motion.p>

//             {/* Work Grid */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className='grid grid-cols-1 md:grid-cols-4 gap-5 my-10 dark:text-black'
//             >
//                 {workData.map((project, index) => (
//                     <motion.div 
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                         key={index} 
//                         className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
//                         style={{ backgroundImage: `url(${project.bgImage})` }}
//                     >
//                         <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
//                             duration-500 group-hover:bottom-7 dark:bg-darkHover/50 dark:text-white'
//                         >
//                             <div>
//                                 <h2 className='font-semibold'>{project.title}</h2>
//                                 <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
//                             </div>
//                             <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
//                                 group-hover:bg-lime-300 transition dark:border-white'
//                             >
//                                 <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             {/* Show More Button */}
//             <motion.a 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 1.1 }}
//                 href="#" 
//                 className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
//                     rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
//             >
//                 Show more 
//                 <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
//             </motion.a>
//         </motion.div>
//     );
// }

// export default Work;













// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//     const workData = [
//         { title: 'Frontend project', description: 'Web Design', bgImage: '/work-1.png' },
//         { title: 'Geo based app', description: 'Mobile App', bgImage: '/work-2.png' },
//         { title: 'Photography site', description: 'Web Design', bgImage: '/work-3.png' },
//         { title: 'UI/UX designing', description: 'UI/UX Design', bgImage: '/work-4.png' },
//         { title: 'E-commerce site', description: 'Web Development', bgImage: '/work-5.png' },
//         { title: 'Portfolio site', description: 'Personal Branding', bgImage: '/work-6.png' },
//         { title: 'Dashboard UI', description: 'Web App', bgImage: '/work-7.png' },
//         { title: 'Travel Blog', description: 'Content Website', bgImage: '/work-8.png' }
//     ];

//     return (
//         <motion.div 
//             id='work' 
//             className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             {/* Title Section */}
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'
//             >
//                 My Portfolio
//             </motion.h4>
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 My Latest Work
//             </motion.h2>
//             <motion.p
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.7 }}
//                 className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
//             >
//                 Welcome to my web development portfolio. Explore a collection of projects showcasing my expertise in Full Stack development.
//             </motion.p>

//             {/* Work Grid */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 my-10 dark:text-black'
//             >
//                 {workData.map((project, index) => (
//                     <motion.div 
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                         key={index} 
//                         className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
//                         style={{ backgroundImage: `url(${project.bgImage})` }}
//                     >
//                         <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
//                             duration-500 group-hover:bottom-7 dark:bg-darkHover/50 dark:text-white'
//                         >
//                             <div>
//                                 <h2 className='font-semibold'>{project.title}</h2>
//                                 <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
//                             </div>
//                             <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
//                                 group-hover:bg-lime-300 transition dark:border-white'
//                             >
//                                 <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             {/* Show More Button */}
//             <motion.a 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 1.1 }}
//                 href="#" 
//                 className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
//                     rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
//             >
//                 Show more 
//                 <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
//             </motion.a>
//         </motion.div>
//     );
// }

// export default Work;

















import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "framer-motion";

function Work({ isDarkMode }) {
    const workData = [
        { title: 'Frontend project', description: 'Web Design', bgImage: '/work-1.png' },
        { title: 'Geo based app', description: 'Mobile App', bgImage: '/work-2.png' },
        { title: 'Photography site', description: 'Web Design', bgImage: '/work-3.png' },
        { title: 'UI/UX designing', description: 'UI/UX Design', bgImage: '/work-4.png' },
        { title: 'E-commerce site', description: 'Web Development', bgImage: '/work-1.png' },
        { title: 'Portfolio site', description: 'Personal Branding', bgImage: '/work-2.png' },
        { title: 'Dashboard UI', description: 'Web App', bgImage: '/work-3.png' },
        { title: 'Travel Blog', description: 'Content Website', bgImage: '/work-4.png' }
    ];

    return (
        <motion.div 
            id='work' 
            className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Title Section */}
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                My Portfolio
            </motion.h4>
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                My Latest Work
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
            >
                Welcome to my web development portfolio. Explore a collection of projects showcasing my expertise in Full Stack development.
            </motion.p>

            {/* Work Grid */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 my-10 dark:text-black'
            >
                {workData.map((project, index) => (
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index} 
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
                            duration-500 group-hover:bottom-7 dark:bg-darkHover/50 dark:text-white'
                        >
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
                                group-hover:bg-lime-300 transition dark:border-white'
                            >
                                <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Show More Button */}
            <motion.a 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                href="#" 
                className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
                    rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
            >
                Show more 
                <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
            </motion.a>
        </motion.div>
    );
}

export default Work;
