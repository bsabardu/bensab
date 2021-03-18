// == Import npm
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Segment, Image } from 'semantic-ui-react';

// == Import
import './styles.scss';

export default class HeaderCustom extends Component {
  state = { activeItem: window.location.pathname.slice(1) }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    console.log(this.state.activeItem);
    const { activeItem } = this.state;

    return (
      <Segment style={{border: 0, boxShadow: 'none'}}>
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
              <Link to="/cv">
                <Menu.Item
                  name="CV"
                  active={activeItem === 'CV' || activeItem === 'cv'}
                  onClick={this.handleItemClick}
                />
              </Link>
            </Menu.Menu>
          </Menu>
        </Container>
      </Segment>
    );
  }
}
