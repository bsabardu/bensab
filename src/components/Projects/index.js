// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Components
import { Container, Header, Segment, Card } from 'semantic-ui-react';
import Project from './Project';

// == Import
import './styles.scss';

// Import Projets data
import projectsData from '../../../data/projects.json';

// == Composant
const Projects = () => (
  <Container textAlign="center">
    <Header as="h1" textAlign="center">Mes projets</Header>
    <Card.Group itemsPerRow={3} stackable doubling>
      {projectsData.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </Card.Group>
  </Container>
);

// On déclare le type de props attendu
Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

Projects.defaultProps = {
  projects: [{ name: 'Un project' }],
};

// == Export
export default Projects;
