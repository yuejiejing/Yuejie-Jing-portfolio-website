'use client';
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiD3Dotjs, SiMysql, SiReact } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { animate, motion } from "framer-motion";

const iconVariants = (duration:number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-900">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.7}}
            className="my-20 text-4xl text-center text-white">
                Technologies
        </motion.h2>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="p-4 border-4 rounded-2xl border-neutral-500">
                        <SiReact className="text-7xl text-cyan-300"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="p-4 border-4 rounded-2xl border-neutral-500">
                        <RiNextjsFill className="text-gray-300 text-7xl"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="p-4 border-4 rounded-2xl border-neutral-500">
                        <SiTypescript className="text-blue-600 text-7xl"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.7)}
                    initial="initial"
                    animate="animate"
                    className="p-4 border-4 rounded-2xl border-neutral-500">
                        <BiLogoTailwindCss className="text-7xl text-cyan-500 "/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.8)}
                    initial="initial"
                    animate="animate"
                    className="p-4 border-4 rounded-2xl border-neutral-500">
                        <SiMysql className="text-sky-500 text-7xl"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.2)}
                    initial="initial"
                    animate="animate"
                    className="p-4 border-4 rounded-2xl border-neutral-500">
                        <SiD3Dotjs className="text-orange-600 text-7xl"/>
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies