// src/components/Accueil.jsx
import React from 'react';
import Navbarr from '../components/Navbarr';
import myImage3 from '../assets/myImage3.jpg';
function Solutions() {
  return (
    <div>
         <Navbarr />
      <h2>Les solutions pour lutter contre le changement climatique existent déjà</h2>
      <p>Les preuves que nous sommes la principale cause du changement climatique, aux conséquences désastreuses pour la vie sur Terre, sont accablantes.</p>
      <h2>LA GÉO-INGÉNIERIE, PART DE LA SOLUTION ?</h2>
      <p>S’il est primordial que nos émissions de gaz à effet de serre n’augmentent pas, les scientifiques estiment qu’extraire le dioxyde de carbone déjà présent dans l’atmosphère, en l’absorbant dans le ciel, est nécessaire.

Le captage du CO2 dans l’atmosphère relève de la géo-ingénierie, une science qui interfère avec les systèmes naturels terrestres. Celle-ci constitue une approche controversée de lutte contre le changement climatique.</p>
<img src={myImage3} alt="Une belle image" />
    </div>
  );
}

export default Solutions;
