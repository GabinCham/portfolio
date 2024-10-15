// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import PetitCurieux from "./components/PetitCurieux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Créer une fonction pour changer le rendu de PetitCurieux vers App
//const switchToApp = () => {
  root.render(
  //  <React.StrictMode>
      <App />
   // </React.StrictMode>
  );
//};

//root.render(
 // <React.StrictMode>
  //  <PetitCurieux onDisappear={switchToApp} />
  //</React.StrictMode>
//);

reportWebVitals();
