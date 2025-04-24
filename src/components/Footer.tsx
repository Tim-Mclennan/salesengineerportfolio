import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Tim-Mclennan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/tim-mclennan-0563341aa/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:timmymclennan@gmail.com"><EmailIcon/></a>
      </div>
      <p>Australia based</p>
    </footer>
  );
}

export default Footer;