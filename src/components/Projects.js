import React, { useState } from "react";
import "../styles/Projects.css";


export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: '/assets/brands_project/peugeot-him-low-min.webp',
      title: 'PEUGEOT E-3008',
      description: 'Intégration IHM',
      categorie: 'Dev, Animations, Automobile',
      outils: 'After Effect, Photoshop, Adobe Xd, Qt, Qml, 2D/3D',
      additionnel: '* Credit video: Peugeot, transformation Webp par Monocle Studio.'

    },
    {
      src: '/assets/brands_project/orro_2-min.webp',
      title: 'ORRO EP',
      description: 'Création cover pour Orro',
      categorie: '3D, Animations, Music',
      outils: 'After Effect, Photoshop',
    },
    {
      src: '/assets/brands_project/204-min.png',
      title: 'WAM CLOTHING',
      description: 'E-commerce website',
      categorie: 'After Effect, Dev, Animations, CMS, Mode',
      outils: 'Wordpress, JS, CSS, PHP, After Effect',
    },
    {
      src: '/assets/brands_project/dyson-tournage-low-min.webp',
      title: 'DYSON',
      description: 'Video',
      categorie: 'Electroménager',
      outils: 'Réalisation, image, montage, étalonnage',
    },
    {
      src: '/assets/brands_project/dyson.webp',
      title: 'Galaxy',
    },
  ];

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="projects-page">
    <div id="container" className="image-gallery-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`img-container ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url('${image.src}')`, border: "1px solid white" }}
          onClick={() => handleImageClick(index)}
        >
          <h3>{image.title}</h3>
        </div>
      ))}
    </div>

<div className="more">

<div className="more-txt">
<h2>Description</h2>
<p>{images[activeIndex].description && <p>{images[activeIndex].description}</p>}
</p>
</div>

<div className="more-txt">
<h2>Categorie</h2>
<p>{images[activeIndex].categorie && <p>{images[activeIndex].categorie}</p>}
</p>
</div>


<div className="more-txt">
<h2>Outils</h2>
<p>{images[activeIndex].outils && <p>{images[activeIndex].outils}</p>}
</p>
</div>

</div>

<h5>{images[activeIndex].additionnel && <p>{images[activeIndex].additionnel}</p>}</h5>



    </div>
  );
}
