import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Brands from "./components/Brands";
import "./App.css"; // Importez votre fichier CSS
import Footer from "./components/Footer";
import LinkMonocleStudio from "./components/LinkMonocleStudio";
import MentionLegal from "./components/MentionLegal";
import JoinOurTeam from "./components/JoinOurTeam";
import Services from "./components/Services";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`App ${loading ? "loading" : ""}`}>
        <div className="loading-screen">
          <img
            className="loading-image"
            src="./assets/eye-loader_web.svg"
            alt="Loading..."
          />
        </div>
        <LinkMonocleStudio
          className="linknav link-top-right"
          namePath={"/projects"}
        >
          Projects
        </LinkMonocleStudio>
        {/**
         *         <LinkMonocleStudio
          className="linknav link-top-right"
          namePath={"/services"}
        >
          Services
        </LinkMonocleStudio>
         */}

        <LinkMonocleStudio
          className="linknav link-bot-right"
          namePath={"/about"}
        >
          About
        </LinkMonocleStudio>
        <LinkMonocleStudio
          className="linknav link-top-left link-home-logo"
          namePath={"/"}
        >
          <img src="./assets/monocle-studio.svg" alt="Monocle Studio Home" />
        </LinkMonocleStudio>

        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
            <Brands />
          </Route>
          <Route exact path="/projects" component={Projects}>
            <Projects />
          </Route>
          <Route exact path="/about" component={About}>
            <About />
          </Route>
          <Route exact path="/legal" component={MentionLegal}>
            <MentionLegal />
          </Route>
          <Route exact path="/join-our-team" component={JoinOurTeam}>
            <JoinOurTeam />
          </Route>
          {/** 
          <Route exact path="/services">
            <Services />
          </Route>
          */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
