// == Import npm
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu, Segment } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Import PDF

export default class HeaderCustom extends Component {
  state = { activeItem: window.location.pathname.slice(1) }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Segment style={{ border: 0, boxShadow: 'none' }}>
        <Container>
          <Menu pointing secondary>
            <Menu.Menu position="right">
              <Link to="/">
                <Menu.Item
                  name="accueil"
                  active={activeItem === 'accueil' || activeItem === ''}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/projets">
                <Menu.Item
                  name="projets"
                  active={activeItem === 'projets'}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/apropos">
                <Menu.Item
                  name="A propos"
                  active={activeItem === 'A propos' || activeItem === 'apropos'}
                  onClick={this.handleItemClick}
                />
              </Link>
              <a href="/cv_BenjaminSabardu_devFront.pdf" download>
                <Menu.Item size="mini">
                  <Button size="mini" secondary content="CV" only="mobile" />
                </Menu.Item>
              </a>
            </Menu.Menu>
          </Menu>
        </Container>
      </Segment>
    );
  }
}
