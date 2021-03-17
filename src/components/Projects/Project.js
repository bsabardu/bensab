// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Components
import {
  Card,
  Image,
  List,
  Label,
  Icon,
} from 'semantic-ui-react';

// == Import
import './styles.scss';

// Import Projets data

// == Composant
const Project = ({
  img,
  url,
  title,
  description,
  tags,
}) => (
  <Card>
    <Image src={img} centered ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {url
      && (
        <a src={url}>
          <Icon name="external alternate" />
          Lien externe du projet
        </a>
      )}
      <List horizontal>
        {tags.map((tag) => (
          <List.Item>
            <Label key={tag.name} color={tag.color}>{tag.name}</Label>
          </List.Item>
        ))}
      </List>
    </Card.Content>
  </Card>
);

// On déclare le type de props attendu
Project.propTypes = {
  img: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

Project.defaultProps = {
  title: 'Un projet',
  url: '',
  img: 'https://screenshots.imgix.net/semantic-org/semantic-ui-react/image/0.88.2/5e9c2ef2c772c5001968bb36/01745fe5-ec11-4324-b76c-22079929fe9f.png?w=300&h=200&fit=fillmax&fm=png',
  description: 'Une description',
  tags: [{ name: 'Un tag' }],
};
// == Export
export default Project;
