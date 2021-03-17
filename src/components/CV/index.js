// == Import npm
import React from 'react';

// == Import Components
import { Container, Header } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const CV = () => (
  <Container text>
    <Header as="h1" textAlign="center" inverted>CV</Header>
    <p>
      This is a resume
    </p>
  </Container>
);

// == Export
export default CV;
