import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  console.log(currentPage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`App ${loading ? 'loading' : ''}`}>
        <div className="loading-screen">
          <img className="loading-image" src="./assets/eye-loader_web.svg" alt="Loading..." />
        </div>
        {/*
       
               <Switch>
  <Route exact path="/">
    <LinkMonocleStudio className={`linknav ${currentPage === '/' ? 'link-top-right' : 'link-home link-top-right'}`} namePath={"/services"}>Services</LinkMonocleStudio>
  </Route>
  <Route path={["/projects", "/about", "/legal", "/join-our-team", "/services"]}>
    <LinkMonocleStudio className={`linknav ${currentPage === '/services' ? 'link-top-left' : 'link-home link-top-right'}`} namePath="/" nameLink=""><span className="sweet">(sweet)</span><span>Home</span></LinkMonocleStudio>
  </Route>
</Switch>

  */}







    {/** 
     * <LinkMonocleStudio className="linknav link-top-left" namePath={"/projects"}>Projects</LinkMonocleStudio>
    */}    

        <LinkMonocleStudio className={`linknav ${currentPage === '/projects' ? 'link-top-left' : 'link-top-right'}`} namePath={"/projects"}>Projects</LinkMonocleStudio>

        



        <LinkMonocleStudio className="linknav link-bot-right" namePath={"/about"}>About</LinkMonocleStudio>
        <Switch>
          <Route exact path="/">
            <Home />
            <Brands />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/legal">
            <MentionLegal />
          </Route>
          <Route exact path="/join-our-team">
            <JoinOurTeam />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
