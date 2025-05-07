import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import portraitImage from '../assets/images/portrait_bluebg_circle.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={portraitImage} alt="Avatar" />  
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Tim-Mclennan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tim-mclennan-0563341aa/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:timmymclennan@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Tim McLennan</h1>
          <p>Senior Solutions Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Tim-Mclennan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tim-mclennan-0563341aa/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:timmymclennan@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;