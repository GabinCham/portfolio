import React, { useState, useEffect } from "react";
import "./../styles/Home.css";
import BoutonDynamique from "./BoutonDynamique";
import Spline from "@splinetool/react-spline";

const Home = () => {
  const [texte, setTexte] = useState("pour vos logos ?");

  useEffect(() => {
    const interval = setInterval(() => {
      const options = ["Web sites", "Video Clips", "Logos"];
      const nouvelTexte = options[Math.floor(Math.random() * options.length)];
      setTexte("pour vos " + nouvelTexte + ".");
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home">
      <div className="content">
        <h1 className="h1-home-txt">
          <span>Welcome to</span>
          <span>Monocle Studio</span>
        </h1>

        <p className="p-home-txt">
          Welcome to Monocle Studio, where creativity knows no bounds. We are a
          graphic design studio, and we love collaborating with a {texte}
        </p>

        <div className="cta-container">
          <BoutonDynamique />
        </div>
      </div>

      <Spline
        className="spline"
        scene="https://prod.spline.design/8psxax6fiFcs9LAz/scene.splinecode" 
        width={500}
        height={500}
     />
    </section>
  );
};

export default Home;
