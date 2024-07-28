'use client';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/yuejiejingprofile.jpg';
import { motion } from 'framer-motion';

const container = (initialx:number, duration:number, delay:number) => ({
    hidden: {x: initialx, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: duration, delay: delay }
    }
})

const Hero = () => {
  return (
    <div className="pb-4 border-b border-neutral-900 lg:mb-35">
        <div className='flex flex-wrap'>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5}}
                        className="pb-16 text-6xl text-white font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Yuejie Jing
                    </motion.h1>
                    <motion.span 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5}}
                        // variants={container(-100, 0.5, 0.5)}
                        // initial="hidden"
                        // animate="visible"
                        // via-cyan-400
                        className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-orange-400  to-pink-500 bg-clip-text"> 
                            Software Developer
                    </motion.span>
                    <motion.p 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5}}
                        // variants={container(-100, 0.5, 0.8)}
                        // initial="hidden"
                        // animate="visible"
                        className='max-w-xl py-6 my-2 text-white'>
                            {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1}}
                        // variants={container(100, 1, 0.3)}
                        // initial="hidden"
                        // animate="visible"
                        className='rounded-2xl' src={profilePic.src} alt="Yuejie Jing" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero