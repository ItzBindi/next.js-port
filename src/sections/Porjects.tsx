import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Porjects() {
  const projectsData = [
    {
      image: "/fin.png",
      projectName: "Fintrackr",
      projectLink: "https://enigmatic-sierra-82451-d19b02a0f714.herokuapp.com/",
      projectDescription:
        "Fintrackr is a budget tracking app that helps users monitor subscriptions, utilities, and leisure expenses. After creating logins with authentication tokens, users access a dashboard presenting the apps purpose. The dashboard displays subscription, utilities, and leisure expenses with corresponding graphs. The left navbar enables navigation to specific tabs for adding, updating, or deleting items, each with its expense graph. Upcoming features include a monthly budget at the top of the dashboard, deducting expenses to ensure budget adherence.",
      projectTech: [
        "React",
        "MERN",
        "MUI",
        "Javascript",
        "MySQL",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Chart.js",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/ItzBindi/myBudgetx",
        externalLink: "https://enigmatic-sierra-82451-d19b02a0f714.herokuapp.com/",
      },
    },
    {
      image: "/wtn.png",
      projectName: "Whats That Noise?",
      projectLink: "https://mattchiaro.github.io/whats-that-noise/index.html",
      projectDescription:
        "Introducing Whats That Noise! Our user-friendly platform helps you discover exciting city events. Enter a city name to instantly see todays events. Detailed event info is on the right including title date time venue and address. Save events you like, filter by type and find direct ticket links. Enhance your event discovery and ticket buying with us!",
      projectTech: [
        "HTML",
        "CSS",
        "Javascript",
        "Jquery",
        "Materialize",
        "Google Fonts",
        "Ticketmaster API",
        "Open Weather API",
      ],
      projectExternalLinks: {
        github: "https://github.com/MattChiaro/whats-that-noise",
        externalLink: "https://mattchiaro.github.io/whats-that-noise/index.html",
      },
    },
    {
      image: "/port.png",
      projectName: "First Portfolio",
      projectLink: "https://vermillion-treacle-6c741a.netlify.app/",
      projectDescription:
        "This is my first portfolio that I created using HTML, CSS, React.js and JavaScript. I used the Bootstrap framework to help with the responsiveness of the website. I also used Font Awesome for the icons and Google Fonts for the fonts. I used Netlify to deploy the website. I am showing you this so you can see how far I have come in my coding journey. I am very proud of this portfolio and I hope you enjoy it as well but thats what I was capable of this is what I am capable of now! I hope you enjoy my new portfolio!",
      projectTech: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Bootstrap",
        "Font Awesome",
        "Google Fonts",
      ],
      projectExternalLinks: {
        github: "https://github.com/ItzBindi/My-Portfolio",
        externalLink: "https://vermillion-treacle-6c741a.netlify.app/",
      },
    },

  ];

  
  return (
    <motion.div 
    className="projects" 
    id="work"
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
            <h2>What I Have Worked On</h2>
        </div>
        <div className="projects-container">
            {projectsData.map(
                ({
                    image,
                    projectDescription,
                    projectLink,
                    projectExternalLinks,
                    projectName,
                    projectTech,
                }) => {
                    return (
                        <div className="project" key={projectName}>
                            <div className="project-image">
                                <div className="project-image-overlay"></div>
                                <div className="project-image-container">
                                    <Image src={image} fill alt={projectName} quality={100} />
                                </div>
                            </div>
                            <div className="project-info">
                                <p className="project-info-overline">Featured Project</p>
                                <h3 className="project-info-title">{projectName}</h3>
                                <div className="project-info-description">
                                    <p>{projectDescription}</p>
                                </div>
                                <ul className="project-info-tech-list">
                                    {projectTech.map((tech) => (
                                        <li className="project-info-tech-list-item" key={tech}>
                                            {tech}
                                        </li>
                                    )
                                    )}
                                </ul>
                                <ul className="project-info-links">
                                    <li className="project-info-links-item">
                                        <Link
                                         href={projectExternalLinks.github}
                                         className="project-info-links-item-link"
                                         >
                                            <FiGithub />
                                        </Link>
                                    </li>
                                    <li className="project-info-links-item">
                                        <Link
                                        href={projectExternalLinks.externalLink}
                                        className="project-info-links-item-link"
                                        >
                                            <FiExternalLink />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
                
                )}
        </div>
    </motion.div>
  )
   
  }
export default Porjects;