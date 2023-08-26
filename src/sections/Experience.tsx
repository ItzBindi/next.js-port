import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

function Experience() {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        const underline = document.querySelector(".underline");
        if (underline) {
            underline.style.top = `${selected * 2.5}rem`;
        }
    }, [selected]);
    

    
    const expereinces = [
    {
        name : "Fintrackr",
        role : "Frontend Development",
        url: "https://enigmatic-sierra-82451-d19b02a0f714.herokuapp.com/",
        start: "July 2023",
        end: "August 2023",
        shortDescription: [
            "Fintrackr is a budget tracking app that allows users to keep track of their subscriptions, utilities, and leisure expenses. Users can create their own personal logins", "that will assign authentication tokens. Upon logging in, the user will be presented with a dashboard that outlines the purpose of the app, and will pull in your", "subscription, utilities, and leisure expenses in and a corresponding graph to show how much the user is spending on each category. Users can then navigate to each", "specific tab through the navbar on the left by clicking the accordion next to the FinTrackr logo. Each respective tab allows you to add, update, delete subscriptions/","utilities/leisure’s and populate the expenses into their own graph below. Future updates will include: a monthly budget at the top of the dashboard that will deduct", "money for easy expense from the three respective categories to ensure the user is staying within their budget for that month."
        ],
    },
    {
        name : "Whats That Noise?",
        role : "Frontend Development",
        url: "https://mattchiaro.github.io/whats-that-noise/index.html",
        start: "May 2023",
        end: "June 2023",
        shortDescription: [
            "Welcome to Whats That Noise! Our platform offers a friendly and user-friendly interface for discovering exciting events in various cities. Simply enter a city name in", "the search bar, and you'll instantly get a list of events scheduled for the current day in that city. On the right-hand side, you'll find detailed information about", "each event, including the title, date, time, venue, and address. You can save events that interest you, making it easy to revisit them later and plan your activities in", "advance. Our event filters allow you to refine your search based on event types, such as concerts or sports events. Plus, we provide direct links to ticketing", "websites, so you can easily purchase tickets for your chosen events. Whether you're a local resident or a traveler seeking memorable experiences, our platform aims to", "enhance your event discovery and ticket purchasing process, giving you all the necessary details at your fingertips."
        ],
    },
    {
        name : "IP Address Tracker",
        role : "Frontend Development",
        url: "https://itzbindi.github.io/ip-address-tracker/",
        start: "August 2023",
        end: "August 2023",
        shortDescription: [
            "IP Address Tracker is a tool that utilizes IP geolocation data to provide insights into the physical locations of IP addresses. By entering an IP address into the", "application, users can retrieve and visualize information such as the approximate city, state, and isp associated with the IP."


        ],
    },
    {
        name : "Weather Dashboard",
        role : "Frontend Development",
        url: "https://itzbindi.github.io/Weather-Dashboard/",
        start : "May 2023",
        end : "May 2023",
        shortDescription: [
            "Explore the world with our Weather Dashboard! Enter any city, and instantly get the current weather and a 5-day forecast at your fingertips. Stay informed and plan ahead", "with ease. Simple, quick, and accurate weather updates for you." 
        ],
    },
    {
        name : "First Portfolio",
        role : "Frontend Development",
        url: "https://vermillion-treacle-6c741a.netlify.app/",
        start: "July 2023",
        end: "July 2023",
        shortDescription: [
            "This is my first portfolio that I created using HTML, CSS, React.js and JavaScript. I used the Bootstrap framework to help with the responsiveness of the website. I also used", "Font Awesome for the icons and Google Fonts for the fonts. I used Netlify to deploy the website. I am showing you this so you can see how far I have come in my coding journey.", "I am very proud of this portfolio and I hope you enjoy it as well but thats what I was capable of this is what I am capable of now! I hope you", "enjoy my new portfolio!"
        ],

    },
    ]
    return (
        <motion.div 
        className='experience' 
        id='experience'
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
            <div className="container">
                <ul className="exp-slider">
                    <div className="underline"></div> {/* Move the underline element here */}
                    {expereinces.map((experience, index) => (
                        <li
                            key={index}
                            className={`exp-slider-item ${index === selected && "exp-slider-item-selected"}`}
                            onClick={() => setSelected(index)}
                        >
                            <span>{experience.name}</span>
                        </li>
                    ))}
                </ul>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <h3>
                            <span>{expereinces[selected].role}</span>
                            <span className='exp-details-position-company'>
                                &nbsp;@&nbsp;
                                <Link className='link' href={expereinces[selected].url}>{expereinces[selected].name}</Link>
                            </span>
                        </h3>
                        <p className="exp-details-range">
                            {expereinces[selected].start} - {expereinces[selected].end}
                        </p>
                        <ul className="exp-details-list">
                            {expereinces[selected].shortDescription.map((description, index) => (
                                <li key={index} className='exp-details-list-item'>{description}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience;