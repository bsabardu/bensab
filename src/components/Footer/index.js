// == Import npm
import React from 'react';

// == Import Components
import { Container, Grid, Segment, List } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const Footer = () => (
  <Segment inverted>
    <Container>
      <Grid textAlign='center' columns={1}>
        <Grid.Row>
          <List horizontal link inverted>
            <List.Item>
              Linkedin
            </List.Item>
            <List.Item>
              Github
            </List.Item>
            <List.Item>
              Twitter
            </List.Item>
          </List>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

// == Export
export default Footer;
