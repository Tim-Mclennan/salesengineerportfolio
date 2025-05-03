import React from "react";
import admindashScreenshot from '../assets/images/Admindash-demoScreenshot.png';
import econochartDemo from '../assets/images/econochart-demo.png';
import atlassianMetrics from '../assets/images/mock04.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Case Studies & Solutions</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://admin-dash-sb2t.vercel.app/" target="_blank" rel="noreferrer"><img src={admindashScreenshot} className="zoom" alt="AdminDash thumbnail" width="100%"/></a>
                <a href="https://admin-dash-sb2t.vercel.app/" target="_blank" rel="noreferrer"><h2>AdminDash Enterprise Solution</h2></a>
                <div className="metrics">
                    <span className="metric">↑ 45% Efficiency</span>
                    <span className="metric">↓ 30% Costs</span>
                    <span className="metric">99.9% Uptime</span>
                </div>
                <p>Built a comprehensive admin panel and dashboard using Refine framework, implementing real-time data analytics and automated reporting systems.</p>
                <div className="tech-stack">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Refine</span>
                    <span>Ant Design</span>
                </div>
                <div className="testimonial">
                    <p>"The dashboard transformed our data management process, providing unprecedented visibility into our operations."</p>
                    <span className="client">- Enterprise Client CTO</span>
                </div>
            </div>
            <div className="project">
                <a href="https://econo-chart.vercel.app/" target="_blank" rel="noreferrer"><img src={econochartDemo} className="zoom" alt="EconoChart thumbnail" width="100%"/></a>
                <a href="https://econo-chart.vercel.app/" target="_blank" rel="noreferrer"><h2>EconoChart Analytics Platform</h2></a>
                <div className="metrics">
                    <span className="metric">↑ 60% Insights</span>
                    <span className="metric">↓ 40% Analysis Time</span>
                    <span className="metric">95% Accuracy</span>
                </div>
                <p>Developed a full-stack analytics platform with machine learning integration for business performance prediction and visualization.</p>
                <div className="tech-stack">
                    <span>Python</span>
                    <span>TensorFlow</span>
                    <span>React</span>
                    <span>D3.js</span>
                </div>
                <div className="testimonial">
                    <p>"The predictive analytics capabilities have been game-changing for our business strategy."</p>
                    <span className="client">- Financial Services Director</span>
                </div>
            </div>
            <div className="project">
                <a href="https://www.atlassian.com" target="_blank" rel="noreferrer"><img src={atlassianMetrics} className="zoom" alt="Atlassian Metrics Dashboard" width="100%"/></a>
                <a href="https://www.atlassian.com" target="_blank" rel="noreferrer"><h2>Atlassian Enterprise Metrics Platform</h2></a>
                <div className="metrics">
                    <span className="metric">↑ 75% Data Accuracy</span>
                    <span className="metric">↓ 50% Processing Time</span>
                    <span className="metric">10M+ Records/Day</span>
                </div>
                <p>Led the development of a high-performance metrics aggregation platform that revolutionized how Atlassian processes and analyzes enterprise customer data. Implemented a distributed processing system that handles over 10 million records daily while maintaining sub-second query response times.</p>
                <div className="tech-stack">
                    <span>Java</span>
                    <span>Apache Kafka</span>
                    <span>Elasticsearch</span>
                    <span>Kubernetes</span>
                </div>
                <div className="testimonial">
                    <p>"This platform has become the backbone of our enterprise analytics, enabling data-driven decisions at unprecedented scale."</p>
                    <span className="client">- Atlassian Enterprise Analytics Lead</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;