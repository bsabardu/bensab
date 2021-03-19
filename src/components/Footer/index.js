/* eslint-disable jsx-a11y/control-has-associated-label */
// == Import npm
import React from 'react';

// == Import Components
import {
  Container,
  Grid,
  Segment,
  List,
  Icon,
} from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const Footer = () => (
  <Segment style={{ border: '0', boxShadow: 'none' }}>
    <Container>
      <Grid textAlign="center" columns={1}>
        <Grid.Row>
          <List horizontal link>
            <List.Item>
              <a href="https://www.linkedin.com/in/benjaminsabardu/" target="_blank" rel="noreferrer"><Icon size="big" name="linkedin" /></a>
            </List.Item>
            <List.Item>
              <a href="https://github.com/bsabardu" target="_blank" rel="noreferrer"><Icon size="big" name="github" /></a>
            </List.Item>
            <List.Item>
              <a href="https://twitter.com/bsabardu" target="_blank" rel="noreferrer"><Icon size="big" name="twitter" /></a>
            </List.Item>
          </List>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

// == Export
export default Footer;
