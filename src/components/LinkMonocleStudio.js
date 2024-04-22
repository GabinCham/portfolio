import React from "react";
import { Link } from "react-router-dom";


export default function LinkMonocleStudio({className, namePath, children}) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
 <Link className={className} to={namePath} onClick={scrollToTop}>{children}</Link>
  );
}