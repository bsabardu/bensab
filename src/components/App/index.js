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
    <Segment size="massive" inverted style={{ height: '100vh' }}>
      <Container>
        <Grid>
          <Grid.Column stretched>
            <Grid.Row>
              <HeaderCustom />
            </Grid.Row>
            <Grid.Row stretched>

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

            </Grid.Row>
            <Grid.Row>
              <Footer />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </Router>
);

// == Export
export default App;
