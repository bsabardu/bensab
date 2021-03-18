// == Import npm
import React from 'react';

// == Import Components
import { Container, Grid, Segment, List, Icon } from 'semantic-ui-react';

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
              <Icon size="big" name="linkedin" />
            </List.Item>
            <List.Item>
              <Icon size="big" name="github" />
            </List.Item>
            <List.Item>
              <Icon size="big" name="twitter" />
            </List.Item>
          </List>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

// == Export
export default Footer;
