// == Import npm
import React from 'react';

// == Import
import landingImg from './velo.gif';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={landingImg} alt="react logo" />
    <h1>J'arrive bientôt :)</h1>
  </div>
);

// == Export
export default App;
