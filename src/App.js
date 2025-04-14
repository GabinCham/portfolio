import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Brands from "./components/Brands";
import "./App.css";
import Footer from "./components/Footer";
import LinkMonocleStudio from "./components/LinkMonocleStudio";

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
      <div className={`App ${loading ? 'loading' : ''}`}>
        <div className="loading-screen">
          <img className="loading-image" src="./assets/eye-loader_web.svg" alt="Loading..." />
        </div>
        <nav className="navigation">
          <LinkMonocleStudio className="linknav link-home" namePath="/"><span className="sweet">(sweet)</span><span>Home</span></LinkMonocleStudio>
          <LinkMonocleStudio className="linknav link-projects" namePath="/projects">Projects</LinkMonocleStudio>
          <LinkMonocleStudio className="linknav link-about" namePath="/about">About</LinkMonocleStudio>
        </nav>
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
        </Switch>
      </div>
      <Footer />
    </Router>
);
}
