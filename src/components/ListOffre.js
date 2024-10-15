import React from "react";
import Inclu from "../assets/icons/a-changer/inclu.png";

function Avantage({ avantage, showLogo = true, logoSrc = Inclu }) {
  return (
    <li>
      {showLogo && <span><img className="img-monocle-list" src={logoSrc} alt="Logo"/></span>}
      {avantage}
    </li>
  );
}

export default Avantage;
