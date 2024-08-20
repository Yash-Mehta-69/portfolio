// import React from 'react'
// import { motion } from "framer-motion"
// import { styles} from "../styles"
// import { ComputersCanvas } from "./canvas"
// import Socials from './Socials'
// import './Button.css'

// const Hero = () => {
//   return (
//     <section className='relative w-full h-screen mx-auto'>

//       <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
//           <div className="w-1 sm:h-80 h-40 violet-gradient"/>
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Yash Mehta</span></h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             Full Stack Developer.
//           </p>

//           <a href="\YASH MEHTA CV.pdf" download={'YASH_MEHTA_CV.pdf'}>
//               <button className="Btn mt-10 bg-tertiary">
//               <svg viewBox="0 0 20 20" className="svgIcon animate-bounce" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M5 20h14v-2H5v2zm7-18c-.55 0-1 .45-1 1v9.59l-3.29-3.3c-.39-.38-1.03-.38-1.41 0-.38.39-.38 1.03 0 1.42l5 5c.39.39 1.03.39 1.42 0l5-5c.38-.39.38-1.03 0-1.42-.39-.38-1.03-.38-1.41 0l-3.29 3.3V3c0-.55-.45-1-1-1z"/>
//               </svg>
//               <p className="text">RESUME</p>
//               <span className="effect"></span>
//             </button> 
//           </a>
//         </div>

//       </div>

      


//       <div className="absolute right-5 bottom-5 flex flex-col gap-4 z-10">
//         <Socials />
//       </div>

//       
//       <ComputersCanvas />
//       

//     </section>
//   )
// }



// export default Hero



import React from 'react'
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import Socials from './Socials'
import './Button.css'
import './Hero.css'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Yash Mehta</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer.
          </p>

          <a href="\YASH MEHTA CV.pdf" download={'YASH_MEHTA_CV.pdf'}>
            <button className="Btn mt-10 bg-tertiary">
              <svg viewBox="0 0 20 20" className="svgIcon animate-bounce" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 20h14v-2H5v2zm7-18c-.55 0-1 .45-1 1v9.59l-3.29-3.3c-.39-.38-1.03-.38-1.41 0-.38.39-.38 1.03 0 1.42l5 5c.39.39 1.03.39 1.42 0l5-5c.38-.39.38-1.03 0-1.42-.39-.38-1.03-.38-1.41 0l-3.29 3.3V3c0-.55-.45-1-1-1z"/>
              </svg>
              <p className="text">RESUME</p>
              <span className="effect"></span>
            </button> 
          </a>
        </div>

      </div>

      <div className="absolute right-5 bottom-10 flex flex-col gap-4 z-10">
        <Socials />
      </div>

      <div className="canvas-container">
        <ComputersCanvas />
      </div>

      {/* <div className="absolute hidden xs:flex xs:bottom-10 bottom-32 w-full flex justify-center items-center bg-blue-100">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
             className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>          
        </a>
      </div> */}

    </section>
  )
}

export default Hero

