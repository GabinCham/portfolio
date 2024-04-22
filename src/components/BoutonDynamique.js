import React from "react";
import logo from "./../assets/icons/icone-rocket-monocle-studio-wh.webp";
import "./../styles/BoutonDynamique.css";

function BoutonDynamique() {
  const ouvrirEmail = () => {
    console.log("click");
    window.location.href = "mailto:contact@monocle.studio";
    console.log("after mailto");
  };

  return (
    <button type="button" className="button" onClick={ouvrirEmail}>
      <span className="button__text">Free consultation</span>
      <span className="button__icon">
        <img src={logo} alt="Logo" className="svg" height="23" width="23" />
      </span>
    </button>
  );
}

export default BoutonDynamique;
