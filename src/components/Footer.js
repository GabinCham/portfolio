import React from "react";
import "../styles/Footer.css";
import InstaLogoMonocleStudio from "../assets/icons/instagram-icon-monocle-studio.svg";
import LinkedinLogoMonocleStudio from "../assets/icons/linkn-icon-monocle-studio.svg";
import LinkMonocleStudio from "./LinkMonocleStudio";


export default function Footer() {

  return (
    <div className="container-footer">
      <footer id="footer">
        <div className="col col1">
          <h3>Monocle Studio</h3>
          <p>
            Made with <span style={{ color: "#BA6573" }}>
              <img 
              className="footer-img"
          src="./assets/icons/eye-monocle-studio-coeur-border-wh.svg" 
          alt="Monocle Studio Home"/></span>
           by Gabin Chameroy
          </p>
          <div className="social">
            <a
              href="https://www.instagram.com/monoclestudiooo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
              
                src={InstaLogoMonocleStudio}
                alt="Instagram Logo"
                className="link"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/monoclestudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedinLogoMonocleStudio}
                alt="LinkedIn Logo"
                className="link"
              />
            </a>
          </div>
          <p style={{ color: "#818181", fontSize: "smaller" }}>
            2024 © All Rights Reserved
          </p>
        </div>
        <div className="col col2">
        <LinkMonocleStudio namePath={"/"}>Home</LinkMonocleStudio>
        <LinkMonocleStudio namePath={"/about"}>About</LinkMonocleStudio>
        <LinkMonocleStudio namePath={"/projects"}>Projects</LinkMonocleStudio>
        <LinkMonocleStudio namePath={"/services"}>Services</LinkMonocleStudio>
</div>
<div className="col col3">
 {/**
  *   <LinkMonocleStudio namePath={"/partner-with-us"}>Partner with us</LinkMonocleStudio>

  *  <LinkMonocleStudio namePath={"/terms-of-service"}>Terms of service</LinkMonocleStudio>

 */} 
  <a
              href="https://www.linkedin.com/in/gabin-chameroy-52b776193/"
              target="_blank"
              rel="noopener noreferrer"
            >Linkedin</a>
             <a
              href="https://www.instagram.com/monoclestudiooo/"
              target="_blank"
              rel="noopener noreferrer"
            >Instagram</a>
              <LinkMonocleStudio namePath={"/join-our-team"}>Join our team</LinkMonocleStudio>
              <LinkMonocleStudio namePath={"/legal"}>Mention Legal</LinkMonocleStudio>


                      
</div>

        <div className="backdrop"></div>
      </footer>
    </div>
  );
}
