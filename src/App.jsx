// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Solutions from './components/Solutions';
import Impact from './components/Impact';
import Ressources from './components/Ressources';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Accueil />}/>
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/ressources" element={<Ressources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
