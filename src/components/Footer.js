import React from "react";
import "../styles/Footer.css";
import instaLogoMonocle from "../assets/icons/instagram-icon-monocle-studio.svg";
import LinknLogoMonocle from "../assets/icons/linkn-icon-monocle-studio.svg";
import LinkMonocleStudio from "./LinkMonocleStudio";


export default function Footer() {

  return (
    <div className="container-footer">
      <footer id="footer">
        <div className="col col1">
          <h3>Monocle Studio</h3>
          <p>
            Made with <span style={{ color: "#BA6573" }}>❤</span> Monocle
            Studio
          </p>
          <div className="social">
            <a
              href="https://www.instagram.com/monoclestudiooo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instaLogoMonocle}
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
                src={LinknLogoMonocle}
                alt="LinkedIn Logo"
                className="link"
              />
            </a>
          </div>
          <p style={{ color: "#818181", fontSize: "smaller" }}>
            2023 © All Rights Reserved
          </p>
        </div>
        <div className="col col2">
  <LinkMonocleStudio namePath={"/"}>Home</LinkMonocleStudio>
  <LinkMonocleStudio namePath={"/projects"}>Projects</LinkMonocleStudio>
  <LinkMonocleStudio namePath={"/about"}>About</LinkMonocleStudio>
  <LinkMonocleStudio namePath={"/privacy-policy"}>Privacy Policy</LinkMonocleStudio>
</div>
<div className="col col3">
  <LinkMonocleStudio namePath={"/services"}>Services</LinkMonocleStudio>
  <LinkMonocleStudio namePath={"/terms-of-service"}>Terms of service</LinkMonocleStudio>
  <LinkMonocleStudio namePath={"/join-our-team"}>Join our team</LinkMonocleStudio>
  <LinkMonocleStudio namePath={"/partner-with-us"}>Partner with us</LinkMonocleStudio>
</div>

        <div className="backdrop"></div>
      </footer>
    </div>
  );
}
