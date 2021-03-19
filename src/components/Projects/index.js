// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Components
import { Container, Header, Card, Divider } from 'semantic-ui-react';
import ButtonMailto from 'src/components/ButtonMailto';
import Project from './Project';

// == Import
import './styles.scss';

// Import Projets data
import projectsData from '../../../data/projects';

// Import images

// == Composant
const Projects = () => (
  <Container>
    <Header as="h1" textAlign="center">Mes projets</Header>
    <Card.Group itemsPerRow={3} stackable doubling>
      {projectsData.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </Card.Group>
    <Divider hidden />
    <Container textAlign="center">
      <Header as="h3" content="Et bientôt le votre ?..." />
      <ButtonMailto primary size="big" content="Contactez-moi" mailto="mailto:bsabardu@gmail.com" />


    </Container>
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
