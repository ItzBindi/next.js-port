import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
function About() {
    return (
        <motion.div 
        className='about' 
        id='about'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 0.6}}
        variants={{
            visible: {opacity: 1, y: -50},
            hidden: {opacity: 0, y: 0, transition: {delay: 2}},
        }}
        >
            <div className="title">
                <h2>About Me</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                        Hey, my name is Suraj Nair but I go by Bindi! I was born, raised and still live in the suburbs of Chicago
                        I have successfully completed Northwestern Universitys intensive coding bootcamp, equipping me with the
                        necessary skills to thrive in the development field. My dedication, reliability, and adeptness at both
                        independent and team-oriented work make me a valuable asset. I approach challenges with enthusiasm,
                        continuously seeking opportunities for growth and improvement.
                    </p>
                    <p className="about-grid-info-text">
                        Today I am a full stack developer with a passion for creating intuitive, dynamic user experiences. I am
                        proficient in HTML, CSS, JavaScript, React, and Node.js. I am also experienced in Next.js, TypeScript,
                        Express, MongoDB, MySQL, and more. I am currently seeking a full-time position as a software engineer!
                    </p>
                    <p className="about-grid-info-text">
                        Here are a few technologies I have been working with recently:
                    </p>
                    <ul className="about-grid-info-list">
                            <li className="about-grid-info-list-item">React</li>
                            <li className="about-grid-info-list-item">React.js</li>
                            <li className="about-grid-info-list-item">HTML</li>
                            <li className="about-grid-info-list-item">CSS</li>
                            <li className="about-grid-info-list-item">JavaScript</li>
                            <li className="about-grid-info-list-item">TypeScript</li>
                            <li className="about-grid-info-list-item">Node.js</li>
                            <li className="about-grid-info-list-item">Next.js</li>
                            <li className="about-grid-info-list-item">Bootstrap</li>
                            <li className="about-grid-info-list-item">Material-UI (MUI)</li>
                            <li className="about-grid-info-list-item">SCSS</li>
                    </ul>
                </div>
                <div className="about-grid-photo">
                    <div className="overlay">
                    <div className="overlay-border">
                    <div className="about-grid-photo-container">
                        <Image src="/yup.png" alt="profile" fill/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About