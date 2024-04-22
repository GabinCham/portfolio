import React from "react";
import ProjectBlock from "./ProjectBlock";
import "./../styles/Projects.css";

const Projects = () => {
  
  return (
    <div className="app-container">
      <div className="scroll-container">
        <ProjectBlock
          projet="PEUGEOT E-3008"
          description="Intégration IHM, Dev, Animations, Automobile"
          categorie="After Effect, Photoshop, Adobe Xd, Qt, Qml, 2D/3D"
          outils="*credit photo/video www.peugeot.fr"
          textColor="#f8f9fa"
          centerImage="/assets/brands_projet/peugeot-him-low-min.webp"
          // backgroundImage="/assets/brands_projet/peugeot-background1-min.webp"
         // backgroundColor="white"
            backgroundColor="#1a1b1b"
          animateBackground
          scrollVertical={true}
          backgroundSize="cover"
          backgroundRepeat="repeat"
          showShadow={false}
          imageSize="60%"
          maxWidth="none"
        />
        <ProjectBlock
          projet="ORRO EP"
          description="Création cover pour Orro"
          categorie="3D, Animations, Music"
          outils="After Effect, Photoshop"
          textColor="rgb(86 203 55)"
          centerImage="/assets/brands_projet/orro_2-min.webp"
          // backgroundImage="/assets/brands_projet/orro-min.gif"
          backgroundColor="white"
           // backgroundColor="#1a1b1b"
          animateBackground
          scrollVertical={true}
          backgroundSize="cover"
          showShadow={false}
          imageSize="50%"
          maxWidth="none"
          borderRadius="0% 10% 0% 10%"
        />

        <ProjectBlock
          projet="WAM CLOTHING"
          description="E-commerce website"
          categorie="After Effect, Dev, Animations, CMS, Mode"
          outils="Wordpress, JS, CSS, PHP, After Effect"
          textColor="#f8f9fa"
          centerImage="/assets/brands_projet/204-min.png"
          // backgroundImage="/assets/brands_projet/wam-min.png"
        //  backgroundColor="white"
          backgroundColor="#1a1b1b"
          animateBackground
          scrollVertical={false}
          backgroundSize="auto"
          backgroundRepeat="repeat"
          showShadow={false}
          imageSize="80%"
          maxWidth="none"
        />

        <ProjectBlock
          projet="DYSON"
          description="Video"
          categorie="Electroménager"
          outils="Réalisation, image, montage, étalonnage"
          textColor="#f8f9fa"
          centerImage="/assets/brands_projet/dyson-tournage-low-min.webp"
          // backgroundImage="/assets/brands_projet/dyson.webp"
          backgroundColor="white"
          //  backgroundColor="#1a1b1b"
          animateBackground
          scrollVertical={true}
          backgroundSize="auto"
          backgroundRepeat="repeat"
          showShadow={false}
          imageSize="60%"
          maxWidth="none"
          borderRadius="0% 10% 0% 10%"
        />
      </div>
    </div>
  );
};

export default Projects;
