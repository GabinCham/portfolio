import React, { useState, useEffect } from "react";
import "./../styles/Home.css";
import BoutonDynamique from "./BoutonDynamique";
import Spline from "@splinetool/react-spline";

const Home = () => {
  const [texte, setTexte] = useState("pour vos logos ?");

  useEffect(() => {
    const interval = setInterval(() => {
      const options = ["Web site", "Video Clip", "Logo"];
      const nouvelTexte = options[Math.floor(Math.random() * options.length)];
      setTexte("pour vos " + nouvelTexte + ".");
    }, 1000);

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
          <span>Welcome to</span>
          <span>Monocle Studio</span>
        </h1>

        <p className="p-home-txt">
          Welcome to Monocle Studio, where creativity knows no bounds. We are a
          graphic design studio, and we love collaborating with a {texte}
        </p>

        <div>
          <BoutonDynamique />
        </div>
      </div>
    </div>
  );
};

export default Home;
