// src/components/Accueil.jsx
import React from 'react';
import Navbarr from '../components/Navbarr';
import myImage1 from '../assets/myImage1.png';
function Impact() {
  return (
    <div>
         <Navbarr />
      <h2>Des impacts globaux qui inquiètent particulièrement</h2>
     
<img src={myImage1} alt="Une belle image" />
<p>Logiquement, on s’attend à ce qu’un réchauffement des températures moyennes de la surface du globe provoque une importante fonte de glaciers polaires et alpins ainsi qu’une hausse du niveau de la mer pouvant atteindre jusqu'à 95 centimètres d’ici la fin du 21ième siècle. Cette hausse, induite par la fonte de glaciers mais surtout par simple expansion thermique de l’eau réchauffée, rendrait particulièrement vulnérable aux inondations les basses terres côtières où plus de 50% des habitants de cette planète vivent. De plus, si on y ajoute les prévisions de croissance démographique pour ces régions côtières très convoitées par une majorité de gens, il est bien possible que la hausse du niveau de la mer soit l’un des plus grand danger induit par des changements climatiques. Quant à elle, la fonte des glaciers alpins aura des impacts majeurs pour certaines localités qui en dépendent fortement pour leur industrie touristique, pour l’accès à des ressources en eau, pour la biodiversité et l’environnement, etc.
</p>
    </div>
  );
}

export default Impact;
