import React from "react";

export default function IconLink({ iconSrc, alt, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={iconSrc}
        alt={alt + " monocle studio logo"}
        className="link"
        style={{ margin: "15px 7px 0px 7px" }}
      />
    </a>
  );
}
