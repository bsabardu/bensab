// == Import npm
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';

// == Import
import './styles.scss';

export default class HeaderCustom extends Component {
  state = { activeItem: 'accueil' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Segment style={{border: 0, boxShadow: 'none'}}>
        <Container>
          <Menu pointing secondary>
            <Link to="/">
              <Menu.Item
                name="accueil"
                active={activeItem === 'accueil'}
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
                active={activeItem === 'A propos'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/cv">
              <Menu.Item
                name="CV"
                active={activeItem === 'CV'}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu>
        </Container>
      </Segment>
    );
  }
}
