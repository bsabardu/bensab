// == Import npm
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// == Import Components
import { Container, Grid, Segment } from 'semantic-ui-react';
import HeaderCustom from 'src/components/HeaderCustom';
import Footer from 'src/components/Footer';

import Home from 'src/components/Home';
import Projects from 'src/components/Projects';
import About from 'src/components/About';
import CV from 'src/components/CV';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <Router>
    <HeaderCustom />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/projets" exact>
        <Projects />
      </Route>
      <Route path="/apropos" exact>
        <About />
      </Route>
      <Route path="/cv" exact>
        <CV />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

// == Export
export default App;
