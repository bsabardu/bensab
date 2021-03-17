// == Import npm
import React from 'react';

// == Import Components
import { Container, Header } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const About = () => (
  <Container text>
    <Header as="h1" textAlign="center" inverted>About</Header>
    <p>
      EgoTrip
    </p>
  </Container>
);

// == Export
export default About;
