import React, { useState } from "react";
import admindashScreenshot from '../assets/images/Admindash-demoScreenshot.png';
import econochartDemo from '../assets/images/econochart-demo.png';
import atlassianMetrics from '../assets/images/stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash.jpg';
import ecommercePlatform from '../assets/images/mediamodifier-5u5IQyQdfkM-unsplash.jpg';
import CaseStudyModal from './CaseStudyModal';

import '../assets/styles/Project.scss';

interface CaseStudy {
    title: string;
    thumbnail: string;
    challenge: string;
    solution: string;
    impact: {
        metrics: string[];
        testimonial: string;
        client: string;
    };
    technicalDetails: {
        stack: string[];
        architecture: string;
        challenges: string[];
    };
    certifications: string[];
}

function Project() {
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

    const caseStudies = [
        {
            title: "Enterprise E-commerce Platform Transformation",
            thumbnail: ecommercePlatform,
            challenge: "A leading retail conglomerate needed to modernize their legacy e-commerce platform to compete with emerging digital-first competitors. The existing system was monolithic, lacked scalability, and couldn't support modern customer experiences. The client required a comprehensive solution that would enable rapid innovation while maintaining enterprise-grade reliability.",
            solution: "Led the end-to-end transformation of the e-commerce platform through a series of strategic technical presentations, architecture workshops, and proof-of-concept demonstrations. Developed a compelling technical vision that secured executive buy-in and displaced incumbent solutions. Orchestrated a phased migration strategy that minimized business disruption while delivering immediate value.",
            impact: {
                metrics: [
                    "↑ 85% Platform Scalability",
                    "↓ 35% Time-to-Market",
                    "↑ 42% Conversion Rate",
                    "↓ 28% Operational Costs"
                ],
                testimonial: "The technical leadership and solution architecture expertise demonstrated throughout this engagement were exceptional. The proof-of-concept workshops and architecture discussions helped us make informed decisions that transformed our digital commerce capabilities. The platform now serves as a competitive differentiator in our market.",
                client: "- Retail Conglomerate CTO"
            },
            technicalDetails: {
                stack: ["Node.js", "React", "GraphQL", "MongoDB", "AWS", "Kubernetes", "Redis"],
                architecture: "Event-driven microservices architecture with domain-driven design principles, enabling independent scaling and deployment of business capabilities.",
                challenges: [
                    "Led technical workshops with stakeholders to align on architecture vision",
                    "Designed and demonstrated proof-of-concept solutions for critical features",
                    "Developed comprehensive RFP responses that secured enterprise contracts",
                    "Created technical documentation and architecture blueprints for implementation teams"
                ]
            },
            certifications: ["AWS Solutions Architect Professional", "TOGAF Certified"]
        },
        {
            title: "Atlassian Metrics Platform",
            thumbnail: atlassianMetrics,
            challenge: "A major Atlassian enterprise client needed a high-performance metrics aggregation platform to process and analyze their Atlassian tool usage data at scale. The existing system couldn't handle the volume of data or provide real-time insights.",
            solution: "Led the development of a distributed metrics platform that revolutionized how the client processes and analyzes their Atlassian tool usage data. Implemented a scalable architecture that handles millions of records daily.",
            impact: {
                metrics: [
                    "↑ 45% Data Accuracy",
                    "↓ 35% Processing Time",
                    "5M+ Records/Day",
                    "↓ 25% Infrastructure Costs"
                ],
                testimonial: "This platform has become the backbone of our enterprise analytics, enabling data-driven decisions at unprecedented scale. The real-time processing capabilities have transformed how we understand our Atlassian tool usage and team productivity.",
                client: "- Enterprise Client Analytics Lead"
            },
            technicalDetails: {
                stack: ["Java", "Apache Kafka", "Elasticsearch", "Kubernetes", "Prometheus", "Grafana"],
                architecture: "Distributed microservices architecture with event streaming and real-time analytics processing.",
                challenges: [
                    "Designed scalable data ingestion pipelines",
                    "Implemented distributed processing system",
                    "Created real-time analytics dashboards",
                    "Built automated scaling infrastructure"
                ]
            },
            certifications: ["Kubernetes Administrator", "Java Enterprise Architect"]
        },
        {
            title: "EconoChart Analytics Platform",
            thumbnail: econochartDemo,
            challenge: "A financial services firm needed a sophisticated analytics platform to process market data, predict trends, and visualize complex financial metrics. The existing solution couldn't handle the volume of data or provide accurate predictions.",
            solution: "Built a full-stack analytics platform with machine learning integration for business performance prediction and visualization. Implemented advanced data processing pipelines and real-time visualization capabilities.",
            impact: {
                metrics: [
                    "↑ 35% Data Insights Accuracy",
                    "↓ 28% Analysis Time",
                    "87% Prediction Accuracy",
                    "↑ 65% Data Processing Speed"
                ],
                testimonial: "The predictive analytics capabilities have been game-changing for our business strategy. The platform's ability to process and visualize complex market data in real-time has given us a significant competitive advantage.",
                client: "- Financial Services Director"
            },
            technicalDetails: {
                stack: ["Python", "TensorFlow", "React", "D3.js", "Apache Kafka", "Redis"],
                architecture: "Event-driven architecture with real-time data processing and machine learning model serving.",
                challenges: [
                    "Developed custom machine learning models for market prediction",
                    "Implemented real-time data processing pipelines",
                    "Created interactive data visualization components",
                    "Built scalable model serving infrastructure"
                ]
            },
            certifications: ["TensorFlow Developer", "Data Science Professional"]
        },
        {
            title: "AdminDash Enterprise Solution",
            thumbnail: admindashScreenshot,
            challenge: "A Fortune 500 company needed a comprehensive admin panel to manage their complex operations, handle real-time data analytics, and automate reporting processes. The existing system was fragmented, slow, and lacked real-time capabilities.",
            solution: "Developed a modern, scalable admin dashboard using Refine framework that integrated multiple data sources, implemented real-time analytics, and automated reporting workflows. The solution included role-based access control, audit logging, and advanced data visualization capabilities.",
            impact: {
                metrics: [
                    "↑ 32% Operational Efficiency",
                    "↓ 22% Operational Costs",
                    "99.5% System Uptime",
                    "↓ 45% Report Generation Time"
                ],
                testimonial: "The dashboard transformed our data management process, providing unprecedented visibility into our operations. The real-time analytics and automated reporting have become indispensable tools for our decision-making process.",
                client: "- Enterprise Client CTO"
            },
            technicalDetails: {
                stack: ["React", "TypeScript", "Refine", "Ant Design", "GraphQL", "PostgreSQL"],
                architecture: "Microservices architecture with real-time data synchronization using WebSocket connections and GraphQL subscriptions.",
                challenges: [
                    "Implemented complex data aggregation across multiple sources",
                    "Developed custom caching strategies for optimal performance",
                    "Created a flexible permission system for role-based access",
                    "Built real-time data visualization components"
                ]
            },
            certifications: ["AWS Certified Solutions Architect", "React Advanced Concepts"]
        }
    ];

    return (
        <div className="projects-container" id="projects">
            <h1>Case Studies & Solutions</h1>
            <div className="projects-grid">
                {caseStudies.map((caseStudy, index) => (
                    <div className="project" key={index}>
                        <div className="project-thumbnail" onClick={() => setSelectedCaseStudy(caseStudy)}>
                            <img src={caseStudy.thumbnail} className="zoom" alt={`${caseStudy.title} thumbnail`} width="100%"/>
                            <div className="project-overlay">
                                <div className="metrics">
                                    {caseStudy.impact.metrics.slice(0, 3).map((metric, idx) => (
                                        <span key={idx} className="metric">{metric}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h2 onClick={() => setSelectedCaseStudy(caseStudy)}>{caseStudy.title}</h2>
                        <div className="project-preview">
                            <p>{caseStudy.challenge.substring(0, 150)}...</p>
                            <button className="read-more" onClick={() => setSelectedCaseStudy(caseStudy)}>
                                Read Full Case Study
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedCaseStudy && (
                <CaseStudyModal
                    isOpen={!!selectedCaseStudy}
                    onClose={() => setSelectedCaseStudy(null)}
                    caseStudy={selectedCaseStudy}
                />
            )}
        </div>
    );
}

export default Project;