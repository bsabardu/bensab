// == Import npm
import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react'

// == Import
import landingImg from './velo.gif';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Container text>
      <Image src={landingImg} centered size="medium" alt="Cycling guy gif" />
      <Header as="h1" textAlign="center">J'arrive bientôt</Header>
    </Container>
  </div>
);

// == Export
export default App;
