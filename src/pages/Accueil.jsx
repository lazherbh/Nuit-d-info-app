// src/components/Accueil.jsx
import React from 'react';
import Navbarr from '../components/Navbarr';
import myImage from '../assets/myImage.jpg';
function Accueil() {
  return (
      
    <div>
        <Navbarr/>
        <h1>Bienvenue sur notre site</h1>
      <img src={myImage} alt="Une belle image" />
    </div>
  );
}

export default Accueil;
