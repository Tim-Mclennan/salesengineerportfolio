import React from "react";
import admindashScreenshot from '../assets/images/Admindash-demoScreenshot.png';
import econochartDemo from '../assets/images/econochart-demo.png';
import timTubeThumbnail from '../assets/images/TimTubeThumbnail.jpg';
import earthDemo from '../assets/images/earthdemo.jpg';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://admin-dash-sb2t.vercel.app/" target="_blank" rel="noreferrer"><img src={admindashScreenshot} className="zoom" alt="AdminDash thumbnail" width="100%"/></a>
                <a href="https://admin-dash-sb2t.vercel.app/" target="_blank" rel="noreferrer"><h2>AdminDash</h2></a>
                <p>AdminDash is a comprehensive admin panel and dashboard application built with the Refine framework. It incorporates, analyses and displays CRM-like data and a smooth UI interface.</p>
            </div>
            <div className="project">
                <a href="https://econo-chart.vercel.app/" target="_blank" rel="noreferrer"><img src={econochartDemo} className="zoom" alt="EconoChart thumbnail" width="100%"/></a>
                <a href="https://econo-chart.vercel.app/" target="_blank" rel="noreferrer"><h2>EconoChart</h2></a>
                <p>EconoChart is a full-stack web application that provides a visual representation of key performance indicators (KPIs), products, and transactions data. It's a great tool for visualizing and using machine learning to predict business performance.</p>
            </div>
            <div className="project">
                <a href="https://startling-liger-581815.netlify.app/" target="_blank" rel="noreferrer"><img src={timTubeThumbnail} className="zoom" alt="TimTube thumbnail" width="100%"/></a>
                <a href="https://startling-liger-581815.netlify.app/" target="_blank" rel="noreferrer"><h2>TimTube</h2></a>
                <p>YouTube clone built with HTML, CSS, SASS/SCSS and React. Fetched API data from YouTube using Axios to display video feeds, including default categories.</p>
            </div>
            <div className="project">
                <a href="https://earth-in-three-js.vercel.app/" target="_blank" rel="noreferrer"><img src={earthDemo} className="zoom" alt="Earth in ThreeJS thumbnail" width="100%"/></a>
                <a href="https://earth-in-three-js.vercel.app/" target="_blank" rel="noreferrer"><h2>Earth in ThreeJS</h2></a>
                <p>This project is an immersive 3D visualization of Earth, built using the Three.js library. It was a fun project in which I got to test out some of my skills in ThreeJS.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;