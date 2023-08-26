import Button from '@/components/button'
import React from 'react'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className='home'>
        <motion.h1 
        className="home-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
        >
          Hi my name is   
        </motion.h1>
        <motion.h2 
        className="home-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
        >
            Suraj Nair.
        </motion.h2>
        <motion.h3 
        className="home-title-large home-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
        >
            I mold interactive wonders.
        </motion.h3>
        <motion.p 
        className="home-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
        >
            Hey there! 🚀 I'm a software engineer extraordinaire who's all about whipping up incredible digital experiences. Right now, I'm all in on cooking up products that are super easy to use and totally catered to what users want. Your team sounds like a blast – I'd absolutely love to jump on board! 🙌
        </motion.p>
        <motion.div 
        className="home-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
        >
            <Button text='Hello' link='https://google.com'/>
        </motion.div>
        </div>
  )
}

export default Home