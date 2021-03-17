// == Import npm
import React from 'react';

// == Import Components
import { Container, Header } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const Projects = () => (
  <Container text>
    <Header as="h1" textAlign="center" inverted>Projects</Header>
    <p>
      Das Projects
    </p>
  </Container>
);

// == Export
export default Projects;
