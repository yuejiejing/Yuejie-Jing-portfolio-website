'use client';
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pb-20 border-b border-neutral-900">
        <motion.h2 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{duration: 0.5}}
          className="my-10 text-4xl text-center text-white">
            Get in Touch!
        </motion.h2>
        <nav className='flex items-center justify-center'>
          <div className='flex items-center justify-center gap-4 text-2xl text-white'>
              <a href="https://www.linkedin.com/in/jingyuejie-9752bb147/"><FaLinkedin/></a>
              <a href="https://github.com/yuejiejing"><FaGithub /></a>
          </div>
              {/* 
              <div className="tracking-tighter text-center text-white">
                <motion.p 
                  whileInView={{opacity: 1, x: 0}}
                  initial={{opacity: 0, x: 100}}
                  transition={{duration: 1}}
                  className="my-4">
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a 
                  whileInView={{opacity: 1}}
                  initial={{opacity: 0}}
                  transition={{duration: 1}}
                  href="#" className="border-b border-zinc-200 text-white">{CONTACT.email}</motion.a> 
              </div> */}
        </nav>
    </div>
  )
}

export default Contact