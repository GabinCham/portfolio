import React from "react";

function ProjectBlock({
  backgroundColor,
  backgroundImage,
  projet,
  description,
  categorie,
  outils,
  centerImage,
  centerVideo,
  textColor,
  animateBackground,
  scrollVertical,
  backgroundSize,
  backgroundRepeat,
  showShadow,
  imageSize,
  maxWidth,
  borderRadius
}) {
  return (
    <div
      className={`full-screen-block ${
        animateBackground
          ? scrollVertical
            ? "animated-background-vertical"
            : "animated-background-horizontal"
          : ""
      }`}
      style={{
        backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize,
        backgroundRepeat,
        position: "relative",
        boxShadow: showShadow ? "0 0 10px rgba(0, 0, 0, 0.5)" : "unset",
        maxWidth,
        borderRadius
      }}
    >
      {centerVideo ? (
        <video className="center-image" autoPlay loop muted>
          <source src={centerVideo} type="video/mp4" />
          <source src={centerVideo} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          className="center-image"
          src={centerImage}
          alt="Center"
          style={{ width: imageSize }}
        />
      )}
      <div
        className="text-container"
        style={{
          color: textColor,
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: "20px",
        }}
      >
        <div className="little-box-text-left">
          <h4 className="projet-name">{projet}</h4>
          <p className="projet-description">{description}</p>
          <p className="projet-description">{categorie}</p>
          <p className="projet-description">{outils}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
