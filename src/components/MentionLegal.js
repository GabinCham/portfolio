import React from "react";
import ClassicPage from "./ClassicPage";

export default function MentionLegal() {
  return (
    <ClassicPage title={'Mention Legal'}>
      <h2>Éditeur du site :</h2>
      <p>
        Monocle Studio
        <br />
        84 rue Marius Aufan
        <br />
        92300 Levallois-Perret
        <br />
        0667365584
        <br />
        <a href="mailto:contact@monocle.studio">contact@monocle.studio</a>
      </p>

      <h2>Directeur de la publication :</h2>
      <p>Monocle Studio</p>

      <h2>Hébergeur du site :</h2>
      <p>
        OVH
        <br />
        2 rue Kellermann
        <br />
        59100 Roubaix
        <br />
        1007 (pour la France)
        <br />
        <a href="mailto:contact@ovh.com">contact@ovh.com</a>
      </p>

      <h2>Protection des données personnelles :</h2>
      <p>
        Conformément à la loi "Informatique et Libertés" du 6 janvier 1978
        modifiée et au Règlement Général sur la Protection des Données (RGPD),
        vous disposez d'un droit d'accès, de rectification, de suppression et
        d'opposition aux données vous concernant. Vous pouvez exercer ces droits
        en nous contactant à l'adresse{" "}
        <a href="mailto:contact@monocle.studio">contact@monocle.studio</a> ou
        par courrier à l'adresse 84 rue Marius Aufan, 92300 Levallois-Perret.
      </p>

      <h2>Cookies :</h2>
      <p>
        Ce site utilise des cookies pour améliorer votre expérience utilisateur.
        En continuant à naviguer sur ce site, vous acceptez l'utilisation de
        cookies conformément à notre politique en matière de cookies.
      </p>

      <h2>Propriété intellectuelle :</h2>
      <p>
        Tous les éléments du site monocle.sutdio sont et restent la propriété
        intellectuelle et exclusive de SARL Moncole Studio. Aucune reproduction,
        même partielle, ne peut être faite de ce site sans l'autorisation
        expresse de SARL Monocle Studio.
      </p>
    </ClassicPage>
  );
}
