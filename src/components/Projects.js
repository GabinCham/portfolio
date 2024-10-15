import React, { useState } from "react";
import "../styles/Projects.css";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      fallbackSrc: "./../../public/assets/brands_project/peugeot-10.svg",
      videoSrc: "./../../public/assets/brands_project/peugeot-2.mp4",
      title: "PEUGEOT E-3008",
      description: "Intégration IHM",
      categorie: "Dev, Animations, Automobile",
      outils: "After Effect, Photoshop, Adobe Xd, Qt, Qml, 2D/3D",
      additionnel:
        "* Credit video: Peugeot, transformation Webp par Monocle Studio.",
      classNme: "peugeot",
      link: "https://www.peugeot.fr/nos-vehicules/nouveau-peugeot-3008/electrique.html",
    },
    {
      src: "./../../public/assets/brands_project/orro.webp",
      fallbackSrc: "./../../public/assets/brands_project/orro.gif",
      title: "ORRO EP",
      description: "Création cover pour Orro",
      categorie: "3D, Animations, Music",
      outils: "After Effect, Photoshop",
      classNme: "orro",
      link: "https://open.spotify.com/intl-fr/artist/5EBDnP2Vty9NEQL7fjHrE0",
    },
    {
      src: "./../../public/assets/brands_project/204-min.png",
      fallbackSrc: "./../../public/assets/brands_project/wam.svg",
      title: "WAM CLOTHING",
      description: "E-commerce website",
      categorie: "After Effect, Dev, Animations, CMS, Mode",
      outils: "Wordpress, JS, CSS, PHP, After Effect",
      classNme: "wam",
      link: "https://wamclothing.fr",
    },
    {
      fallbackSrc: "./../../public/assets/brands_project/dyson2.svg",
      videoSrc: "./../../public/assets/brands_project/dyson.mp4",
      title: "DYSON",
      description: "Video",
      categorie: "Electroménager",
      outils: "Réalisation, image, montage, étalonnage",
      classNme: "dyson",
      link: "https://www.instagram.com/p/C2NZ5hGiH_w/",
    },
    {
      fallbackSrc: "./../../public/assets/brands_project/casba.svg",
      videoSrc: "./../../public/assets/brands_project/CasbaTravaux.mov",
      title: "Casbâ",
      description: "Site web",
      categorie: "Dev",
      outils: "Angular, Adobe Xd",
      classNme: "casba",
      link: "https://travaux.casba.fr/professionnels",
    },
  ];

  const handleImageClick = (index) => {
    if (index === activeIndex) {
      window.open(images[index].link, "_blank");
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="projects-page">
      <div id="container" className="image-gallery-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`img-container ${
              index === activeIndex && (image.src || image.videoSrc)
                ? `active active-${image.classNme}`
                : `inactive inactive-${image.classNme}`
            }`}
            style={{
              backgroundImage: `url('${
                index === activeIndex ? image.src : image.fallbackSrc
              }')`,
            }}
            onClick={() => handleImageClick(index)}
          >
            {index === activeIndex && image.videoSrc && (
              <video
                src={image.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="video-background"
              ></video>
            )}
            <h3>
              {image.title} {index === activeIndex}
            </h3>
          </div>
        ))}
      </div>

      <div className="more">
        <div className="more-txt">
          <h2 className="more-txt-title">Description</h2>
          <div>
            {images[activeIndex].description && (
              <p>{images[activeIndex].description}</p>
            )}
          </div>
        </div>

        <div className="more-txt">
          <h2 className="more-txt-title">Categorie</h2>
          <div>
            {images[activeIndex].categorie && (
              <p>{images[activeIndex].categorie}</p>
            )}
            <h5>
              {images[activeIndex].link && (
                <a
                  href={images[activeIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plus sur ce projet&gt;
                </a>
              )}
            </h5>
          </div>
        </div>

        <div className="more-txt">
          <h2 className="more-txt-title">Outils</h2>
          <div>
            {images[activeIndex].outils && <p>{images[activeIndex].outils}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
