import React from "react";
import ClassicPage from "./ClassicPage";
import Avantage from "./ListOffre";
import ParlonsEn from "./Parlons-en";
import "../styles/Services.css";
import Pizza from "../assets/icons/monocle-studio-coeur.svg";
import SiteCleEnMain from "../assets/separator/site-cle-en-main.gif";
import LogoBranding from "../assets/separator/logo-branding.gif";
import Free from "../assets/icons/a-changer/free.png";
import Deux from "../assets/icons/a-changer/deux.png";
import Trois from "../assets/icons/a-changer/trois.png";
import Quatre from "../assets/icons/a-changer/quatre.png";
import Cinq from "../assets/icons/a-changer/cinq.png";


function Card() {
  return (
    <div>
      <ClassicPage title={"Nos services"}>
        <h2>
          Monocle Studio est un studio de création où chaque projet est unique.
          Bien que nos réalisations varient considérablement, nous proposons
          également des offres préconçues pour répondre à divers besoins et
          demandes.
        </h2>

        <ParlonsEn />

        <div className="line-separator">
          <div>
            <img
              className="line-separator-img"
              src={SiteCleEnMain}
              alt="Site cle en main"
            />
          </div>
        </div>

        <section>
          <div className="card">
            <div className="header-offre">
              <img
                className="img-monocle-pizza"
                src={Pizza}
                alt="Monocle Studio Pizza time"
              />
              <h2 className="nom-offre">Offre Clé en main</h2>
              <span className="forumule-offre">pizza chaude</span>
              <span className="a-partir">à partir de</span>
            </div>
            <h2 className="price">990€</h2>
            <p>Nous nous occupons de tout.</p>
            <div className="avantages">
              <Avantage avantage="Votre site en 72H" />
              <Avantage avantage="Instalation gratuite" />
              <Avantage avantage="4 Pages" />
              <Avantage avantage="On créer les maquettes" />
              <Avantage avantage="Site compatible smartphone" />
              <Avantage avantage="3 retours" />
            </div>
          </div>

          <div className="card">
            <div className="header-offre">
              <img
                className="img-monocle-pizza"
                src={Pizza}
                alt="Monocle Studio Pizza time"
              />
              <h2 className="nom-offre">Offre Clé en main</h2>
              <span className="forumule-offre">classic</span>
              <span className="a-partir">à partir de</span>
            </div>

            <h2 className="price">
              1999€<span> + 49€ /mois</span>
            </h2>
            <p>Votre web personalisé.</p>

            <div className="avantages">
              <Avantage avantage=" Hébergement & maintenance inclus" />
              <Avantage avantage="+4 Pages" />
              <Avantage avantage="Réalisation des maquettes" />
              <Avantage avantage="Créons un site unique" />
              <Avantage avantage="Site compatible smartphone" />
              <Avantage avantage="3 retours maximum" />
            </div>
          </div>

          <div className="card">
            <div className="header-offre">
              <img
                className="img-monocle-pizza"
                src={Pizza}
                alt="Monocle Studio Pizza time"
              />
              <h2 className="nom-offre">Offre Clé en main</h2>
              <span className="forumule-offre">mensualisé</span>
              <span className="a-partir">à partir de</span>
            </div>

            <h2 className="price">
              129€ <span>/ mois</span>
            </h2>
            <p>L'offre Classic mais mensualisé.</p>

            <div className="avantages">
              <Avantage avantage=" Hébergement & maintenance inclus" />
              <Avantage avantage="+4 Pages" />
              <Avantage avantage="Réalisation des maquettes" />
              <Avantage avantage="Créons un site unique" />
              <Avantage avantage="Site compatible smartphone" />
              <Avantage avantage="3 retours maximum" />
            </div>
          </div>
        </section>
        <ParlonsEn />
        <div class="line-separator">
          <div>
            <img
              className="line-separator-img"
              src={LogoBranding}
              alt="Site cle en main"
            />
          </div>
        </div>

        <section className="branding">
          <div className="card">
            <div className="header-offre">
              <img
                className="img-monocle-pizza"
                src={Pizza}
                alt="Monocle Studio Pizza time"
              />
              <h2 className="nom-offre">Branding</h2>
              <span className="forumule-offre">Sweet</span>
              {/**<span className="a-partir">à partir de</span>**/}
              </div>
            <h2 className="price">850€</h2>
             {/**<<p>Nous nous occupons de tout.</p>**/}
             <div className="avantages">
              <Avantage  avantage="Conception logo et déclinaisons" />
              <Avantage  avantage="Palette de couleurs" />
              <Avantage  avantage="Typographie" />
              <Avantage logoSrc={Deux} avantage="Maquette pour support visuel" />
              <Avantage logoSrc={Free} avantage="Animation logo" />
              <Avantage  avantage="Brandbook" />
              <Avantage logoSrc={Trois} avantage="Révisions" />
            </div>
          </div>

          <div className="card">
            <div className="header-offre">
              <img
                className="img-monocle-pizza"
                src={Pizza}
                alt="Monocle Studio Pizza time"
              />
              <h2 className="nom-offre">Branding</h2>
              <span className="forumule-offre">Spicy</span>
              {/**<span className="a-partir">à partir de</span>**/}
              </div>
            <h2 className="price">1400€</h2>
             {/**<<p>Nous nous occupons de tout.</p>**/}
             <div className="avantages">
              <Avantage  avantage="Conception logo et déclinaisons" />
              <Avantage  avantage="Palette de couleurs" />
              <Avantage  avantage="Typographie" />
              <Avantage  avantage="Icones" />
              <Avantage  avantage="Kit et template réseaux sociaux" />
              <Avantage  avantage="2 Maquette pour support visuel" />
              <Avantage logoSrc={Free} avantage="Animation logo" />
              <Avantage logoSrc={Free} avantage="Pattern" />
              <Avantage  avantage="Brandbook" />
              <Avantage logoSrc={Trois} avantage="Révisions" />
            </div>
          </div>

          <div className="card">
            <div className="header-offre">
              <img
                className="img-monocle-pizza"
                src={Pizza}
                alt="Monocle Studio Pizza time"
              />
              <h2 className="nom-offre">Branding</h2>
              <span className="forumule-offre">Hot</span>
              {/**<span className="a-partir">à partir de</span>**/}
            </div>
            <h2 className="price">1900€</h2>
             {/**<<p>Nous nous occupons de tout.</p>**/}
            <div className="avantages">
              <Avantage  avantage="Conception logo et déclinaisons" />
              <Avantage  avantage="Palette de couleurs" />
              <Avantage  avantage="Typographie" />
              <Avantage  avantage="Icones" />
              <Avantage  avantage="Kit et template réseaux sociaux" />
              <Avantage  avantage="Banque images" />
              <Avantage  avantage="Carte de visite" />
              <Avantage logoSrc={Quatre} avantage="Maquette pour support visuel" />
              <Avantage logoSrc={Free} avantage="Animation logo" />
              <Avantage logoSrc={Free} avantage="Patern" />
              <Avantage  avantage="Brandbook" />
              <Avantage logoSrc={Cinq} avantage="Révisions" />
            </div>
          </div>
        </section>

        <ParlonsEn/>
        <div className="pourquoi">
          <h2>Pourquoi un Site Web est Essentiel pour votre Entreprise</h2>
          <p>
            Bienvenue sur monocle.studio, votre partenaire privilégié dans la
            création de sites web professionnels, de logos percutants et d'une
            identité visuelle forte. En tant que studio de création spécialisé,
            nous comprenons l'importance cruciale d'avoir une présence en ligne
            robuste et remarquable dans l'écosystème numérique actuel.
          </p>

          <h3>La Vitrine Digitale de votre Entreprise</h3>
          <p>
            Dans un monde de plus en plus connecté, votre site web est la
            première impression que vous laissez sur vos clients potentiels.
            C'est votre vitrine digitale, votre opportunité de captiver
            instantanément l'attention de votre public cible.
          </p>

          <h3>Accessibilité 24/7</h3>
          <p>
            Votre site web est ouvert 24 heures sur 24, 7 jours sur 7, offrant
            une accessibilité inégalée à votre audience mondiale. Que ce soit en
            journée ou en pleine nuit, vos clients potentiels peuvent découvrir
            votre entreprise, explorer vos offres et même effectuer des achats
            ou des demandes de renseignements à tout moment qui leur convient.
          </p>

          <h3>Renforcement de la Crédibilité et de la Confiance</h3>
          <p>
            Un site web professionnel transmet instantanément un sentiment de
            crédibilité et de confiance à vos visiteurs. C'est une plateforme où
            vous pouvez présenter votre expertise, vos réalisations passées et
            les témoignages de vos clients satisfaits.
          </p>

          <h3>Visibilité et Opportunités de Croissance</h3>
          <p>
            En optimisant votre site web pour les moteurs de recherche, vous
            augmentez votre visibilité en ligne et attirez un trafic organique
            qualifié. Grâce à des techniques de référencement efficaces, votre
            site peut se classer plus haut dans les résultats de recherche, vous
            offrant ainsi une exposition accrue et des opportunités de
            croissance commerciale.
          </p>

          <p>
            <span style={{ fontWeight: "bold" }}>En résumé,</span> un site web
            est bien plus qu'une simple nécessité pour les entreprises
            d'aujourd'hui ; c'est une composante essentielle de votre stratégie
            de marketing et de croissance. Chez monocle.studio, nous sommes là
            pour vous accompagner dans la création d'un site web exceptionnel,
            d'un logo percutant et d'une identité visuelle forte, conçus sur
            mesure pour répondre à vos besoins spécifiques et vous aider à
            réaliser vos objectifs commerciaux. Contactez-nous dès aujourd'hui
            pour commencer votre voyage vers une présence en ligne inoubliable.
          </p>
        </div>

        <ParlonsEn />
      </ClassicPage>
    </div>
  );
}

export default Card;
