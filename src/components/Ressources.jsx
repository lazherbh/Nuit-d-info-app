import React from 'react';
import Navbarr from '../components/Navbarr';

function Ressources() {
 return (
    <div className="Ressources">
        <Navbarr />
      <h1>Ressources pour la changement climatique</h1>
      <h2>Organisations internationales</h2>
      <ul>
        <li><a href="https://www.un.org/fr/climatechange/index.html">Organisation des Nations Unies pour le Changement Climatique</a></li>
        <li><a href="https://www.ipcc.ch/">Groupe d'experts intergouvernemental sur l'évolution du climat</a></li>
      </ul>
      <h2>Initiatives nationales</h2>
      <ul>
        <li><a href="https://www.energy.gov/eere/climate-change">Administration américaine de l'énergie - Changement climatique</a></li>
        <li><a href="https://www.ec.europa.eu/clima/policies/european-green-deal_en">Accord vert européen</a></li>
      </ul>
      <h2>Études et rapports</h2>
      <ul>
        <li><a href="https://www.nature.com/subjects/climate-change">Recherche Nature sur le Changement Climatique</a></li>
        <li><a href="https://www.sciencedirect.com/search?qs=climate%20change&title=Journal%20of%20Climate%20Change">Revue scientifique du Changement Climatique</a></li>
      </ul>
    </div>
 );
}

export default Ressources;