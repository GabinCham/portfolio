import React from "react";
import "../styles/Parlons-en.css";
import InstaLogoMonocleStudio from "../assets/icons/instagram-icon-monocle-studio.svg";
import LinkedinLogoMonocleStudio from "../assets/icons/linkn-icon-monocle-studio.svg";
import IconLink from "./IconLink";

export default function ParlonsEn() {
  return (
    <div className="parlons-en">
      <h3>Besoin de conseils ? Nous sommes là pour vous guider.</h3>
      <div className="icons-parlons-en">
      <IconLink
        iconSrc={LinkedinLogoMonocleStudio}
        alt={"LinkedIn"}
        link={"https://www.instagram.com/monoclestudiooo"}
      ></IconLink>
      <IconLink
        iconSrc={InstaLogoMonocleStudio}
        alt={"Instagram"}
        link={"https://www.instagram.com/monoclestudiooo"}
      ></IconLink>
      </div>
    </div>
  );
}