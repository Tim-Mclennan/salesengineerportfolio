import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faUserTie, faVideo } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Programming",
    "APIs",
    "SaaS",
    "Cloud Platforms (GCP/AWS)",
    "Networking",
    "Cybersecurity",
    "POCs",
    "MCP",
    "Azure",
    "System Architecture",
];

const labelsSecond = [
    "Demonstrations",
    "Presentations",
    "Negotiating",
    "Prospecting",
    "Teamwork",
    "Customer-focused",
    "Discovery",
];

const labelsThird = [
    "Written & verbal communication",
    "Active listening",
    "Empathy",
    "Technical and business articulation",
    "Presenting",
    "Professional etiquette",
    "Mentoring",
    "Problem Solving",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Profile</h1>
            <p >I'm a results-driven Senior Sales Engineer with over five years of experience in customer-facing technical roles. With a unique blend of technical and interpersonal skills, I have consistently achieved high client satisfaction by focusing on 3 core metrics:</p>
            <br></br>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Technical Acumen</h3>
                    <p  style={{ fontSize: '0.9rem' }}>With a background in software engineering, I am confident in my ability to lead the technical aspect in large and complex sales processes. I have extensive experience working with APIs, SaaS, AI/ML concepts, networking, security, system architecture etc. which allow me to confidently address technical inquiries and tailor solutions to unique client environments. For instance, during a recent engagement with a large e-commerce client, I architected a custom data pipeline leveraging our platform's API, achieving a ~30% reduction in their data processing time with 0% data loss.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUserTie} size="3x"/>
                    <h3>Sales & Account Management</h3>
                    <p  style={{ fontSize: '0.9rem' }}>I also demonstrate a strong aptitude for sales, in which I have a proven ability to articulate technical and commercial value across the entire sales cycle with a streamlined strategy. This strategy includes conducting impactful and compelling technical presentations, architecture design discussions, competitive displacement, proof-of-concept (POC) engagements, leading RFP/RFI responses, solution demonstrations and technical workshops. This effective sales approach is reflected with an 86% POC-to-close conversion rate average at Atlassian - highlighting my commitment to building enduring relationships with my clients.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faVideo} size="3x"/>
                    <h3>Communication & Problem Solving</h3>
                    <p  style={{ fontSize: '0.9rem' }}>Effective communication and problem-solving are fundamental to my success as a Sales Engineer. I consistently achieve high client satisfaction ratings with an average of 4.8/5 for my presentations and demos - a testament to my ability of precisely addressing client needs. I am proactive in identifying and resolving potential issues, resulting in a 8% reduction in post-sale implementation tickets at Atlassian. I approach challenges with a creative problem-solving mindset and a strong inclination towards systems thinking. I enjoy dissecting complex issues and developing clear, effective solutions.</p>
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