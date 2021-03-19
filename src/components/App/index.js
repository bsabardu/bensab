// == Import npm
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// == Import Components
import HeaderCustom from 'src/components/HeaderCustom';
import Footer from 'src/components/Footer';

import Home from 'src/components/Home';
import Projects from 'src/components/Projects';
import About from 'src/components/About';
import CV from 'src/components/CV';

// == Import Hook Component
import ScrollToTop from 'src/hooks/ScrollToTop';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">

    <Router>
      <ScrollToTop />
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
  </div>
);

// == Export
export default App;
