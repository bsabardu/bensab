/* eslint-disable max-len */
// == Import npm
import React from 'react';
import { createMedia } from "@artsy/fresnel"

// == Import Components
import {
  Container, Header, Image, Grid, Divider,
} from 'semantic-ui-react';
import ButtonMailto from 'src/components/ButtonMailto';

// == Import
import './styles.scss';

// == Import Image
import ben from '../../assets/img/ben.jpg';
import velo from '../../assets/img/velo.jpg';
import echecs from '../../assets/img/echecs.jpg';
import impro from '../../assets/img/impro.jpg';

// == Composant
const About = () => (
  <Container style={{ minHeight: 'calc( 100vh - 70px - 53px - 28px' }}>
    <Header as="h1" textAlign="center">A propos</Header>
    <Divider hidden />
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column width={4} reversed verticalAlign="middle" textAlign="center">
          <Image size="middle" src={ben} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Container text>
            <p>
              Après des études supérieures en commerce, marketing et gestion de projet, je me suis rapidement orienté vers le <strong>secteur web/numérique</strong>. Depuis 10 ans, j'ai eu l'occasion de travailler dans des structures différentes : <strong>ESN, Agences Web, Editeur SaaS B2B, Pureplayer e-commerce</strong>, pour des projets multiples : <strong>site web, application mobile, intranets, logiciel SaaS</strong>... Au fil des années j'ai pris des fonctions de plus en plus techniques pour terminer en tant que PM/PO en équipe SCRUM d'un logiciel de marketing relationnel. Après cette dernière expérience j'ai décidé de parfaire mes compétences techniques avec une formation de <strong>développeur web Fullstack JS, spécialisation React</strong>. Je suis passionné par les challenges techniques mais surtout par la réalisation de produits de qualité apportant une vraie plus-value aux utilisateurs.
            </p>
            <p>
              De part mon profil atypique, je combine une capacité d'analyse avec une vision produit, utilisateurs et UX éprouvées. <strong>Je suis aujourd'hui capable d'intervenir sur toute la chaine de création d'un produit numérique</strong> : des ateliers de conceptions au déploiement en passant par le wireframing, le design UI mais surtout le développement.
            </p>
            <p>Je cherche aujourd'hui à mettre à profit ces compétences pour accompagner la création de produits passionnant et qui font sens.
            </p>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid.Column width={16}>
          <Container text>
            <Header as="h2" textAlign="center" content="Mais aussi..." />
            <p>
              Je suis passionné <strong>sport et de théâtre</strong>, notamment de l'improvisation théatrale. Je pratique la course à pied, avec une préférence pour le trail, ainsi que le cyclisme. Mais comme personne n'est parfait, je fais aussi du football :). <br />Côté improvisation j'ai eu la chance de jouer à la <a href="https://impro.paris/">Ligue d'improvisation de Paris</a> et à la <a href="https://www.troupedumalin.net/">Troupe du Malin de Nantes</a>.
            </p>
            <p>Je pense que les points importants de ma personnalité sont mon <strong>sens de l'humour</strong> et ma <strong>curiosité</strong>.</p>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid relaxed centered stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Image src={impro} alt="Photographie d'un match d'improvisation théatrale" />
        </Grid.Column>
        <Grid.Column>
          <Image src={velo} alt="3 vélos au bord de la mer" />
        </Grid.Column>
        <Grid.Column>
          <Image src={echecs} alt="Un plateau d'échec" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <ButtonMailto primary size="big" content="Contactez-moi" mailto="mailto:bsabardu@gmail.com" />
      </Grid.Row>
    </Grid>
  </Container>
);

// == Export
export default About;
