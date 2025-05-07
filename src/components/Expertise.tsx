import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faUserTie, faVideo } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "API Integrations",
    "Python",
    "React",
    "SaaS",
    "Internal Tooling",
    "Reference Architecture",
    "SSO",
    "Webhooks",
    "Postman",
    "System Design",
];

const labelsSecond = [
    "Go-to-Market",
    "Technical Sales",
    "Implementation",
    "Customer Success",
    "Cross-functional Collaboration",
    "Solution Architecture",
    "Beta Testing",
];

const labelsThird = [
    "Technical Documentation",
    "API Workflows",
    "Problem Solving",
    "Team Enablement",
    "Requirements Gathering",
    "Technical Workshops",
    "Mentoring",
    "Process Improvement",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Profile</h1>
            <p>Passionate and results-oriented Senior Solutions Engineer with over 5 years of experience specialising in SaaS. Adept at delivering technical solutions to accelerate platform adoption and drive go-to-market success. Proven expertise in API integrations, internal tooling, reference architecture design, and cross-functional collaboration. Passionate about enabling modern learning organizations through scalable, well-documented solutions and seamless user experiences.</p>
            <br></br>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Technical Expertise</h3>
                    <p style={{ fontSize: '0.9rem' }}>With a strong foundation in computer science and software engineering, I excel at designing and implementing technical solutions that drive business value. At Hubspot, I've built internal tools using Python and React that significantly improved demo preparation efficiency. My experience includes designing API integrations, implementing SSO solutions, and creating reference architectures that have helped reduce implementation time by up to 25%. I've also developed reusable Postman collections and CI-ready Python scripts to streamline testing and validation processes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUserTie} size="3x"/>
                    <h3>Solutions & Implementation</h3>
                    <p style={{ fontSize: '0.9rem' }}>I specialize in delivering tailored solutions that address complex business needs. At Hubspot, I've contributed to a 17% improvement in enterprise onboarding speed through effective technical solutions. My experience includes designing and implementing go-to-market solutions, creating reusable scripts and API connectors, and developing account provisioning tools. I've successfully guided the implementation of customized solutions for over 50 businesses, focusing on aligning technology with specific business requirements.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faVideo} size="3x"/>
                    <h3>Collaboration & Enablement</h3>
                    <p style={{ fontSize: '0.9rem' }}>I excel at bridging the gap between technical and business teams, translating complex requirements into actionable solutions. I've led internal enablement sessions for new Solutions Engineers on API integration and account management best practices. My experience includes acting as a liaison between Sales, Product, and Engineering teams, participating in beta testing programs, and providing structured feedback to improve product capabilities. I'm passionate about creating well-documented solutions and enabling teams through knowledge sharing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;