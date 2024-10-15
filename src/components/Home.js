import React, { useState, useEffect } from "react";
import "./../styles/Home.css";
import BoutonDynamique from "./BoutonDynamique";
import Spline from "@splinetool/react-spline";
import ScrollIcon from "./ScrollIcon";

const Home = () => {
  const [texte, setTexte] = useState("Logos");

  useEffect(() => {
    const interval = setInterval(() => {
      const options = ["sites web", "vidéos", "logos", "projets uniques"];
      const nouvelTexte = options[Math.floor(Math.random() * options.length)];
      setTexte(nouvelTexte + ".");
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <Spline
        className="spline"
        scene="https://prod.spline.design/8psxax6fiFcs9LAz/scene.splinecode"
      />

      <div className="content">
        <h1 className="h1-home-txt">
          <span className="wellcome">Welcome to</span>
          <span>Monocle Studio</span>
        </h1>

        <div className="p-home-txt">
          {/**
          <h4>Welcome to Monocle Studio, where creativity knows no bounds.</h4>
          */}
          <p>
            Collectif de créatifs passionnés. 
            Le Monocle est pour nous un laboratoire créatif. Nous sommes un studio de création, nous aimons
            créer des 
            <span className="dynamique-txt">{texte}</span>
          </p>
        </div>

        <div className="btn-dynamique-home">
          <BoutonDynamique text="Un Projet ?" />
        </div>
      </div>
      <React.Fragment>
        <ScrollIcon />
      </React.Fragment>
    </div>
  );
};

export default Home;
