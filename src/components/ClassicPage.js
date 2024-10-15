import React from "react";
import "../styles/ClassicPage.css";

export default function ClassicPage({children, title}) {
  return (
    <div className="classic-page-container">
      <h1 className="classic-page-title">{title}</h1>
      <div className="classic-page-content">
        {children}
      </div>
    </div>
  );
}
