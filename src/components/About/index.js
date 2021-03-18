// == Import npm
import React from 'react';

// == Import Components
import { Container, Header, Image, Grid, Divider } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Import Image
import ben from '../../assets/img/ben.jpg';

// == Composant
const About = () => (
  <Container style={{ minHeight: 'calc( 100vh - 70px - 53px - 28px' }}>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={4} verticalAlign="middle">
          <Image size="medium" src={ben} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Container text>
           <Header as="h1" textAlign="center">A propos</Header>
            <p>
            Après des études supérieures en commerce, marketing et gestion de projet, je me suis rapidement orienté vers le secteur web/numérique. Depuis 10 ans, j'ai eu l'occasion de travailler dans des structures différentes : ESN, Agences Web, Editeur SaaS B2B, Pureplayer e-commerce, pour des projets différents : site web, application mobile, intranets, logiciel SaaS... Au fil des années j'ai pris des fonctions de plus en plus techniques pour terminer en tant que PM/PO en équipe SCRUM d'un logiciel de marketing relationnel. Après cette dernière expérience j'ai décidé de parfaire mes compétences techniques avec une formation de développeur web Fullstack JS, spécialisation React. Je suis passionné par les challenges, la réalisation de produits de qualité et apportant une vraie plus-value aux utilisateurs.</p>
            <p>
            De part mon profil atypique, je combine une capacité d'analyse avec une vision produit, utilisateurs et UX éprouvées. Je suis aujourd'hui capable d'intervenir sur toute la chaine de création d'un produit numérique : des ateliers de conceptions au déploiement en passant par le wireframing, le design UI mais surtout le développement.</p> 
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
              Je suis passionné sport et de théâtre, notamment de l'improvisation théatrale. Je pratique la course à pied, avec une préférence pour le trail, ainsi que le cyclisme. Je fais aussi du football (personne n'est parfait !). Côté improvisation j'ai eu la chance de jouer à la <a href="https://impro.paris/">Ligue d'improvisation de Paris</a> et à la <a href="https://www.troupedumalin.net/">Troupe du Malin de Nantes</a>. 
            </p>
            <p>
              Je pense que les points importants de ma personnalité sont mon sens de l'humour et ma curiosité
            </p>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid relaxed="very" centered columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Image src={ben} />
        </Grid.Column>
        <Grid.Column>
          <Image src={ben} />
        </Grid.Column>
        <Grid.Column>
          <Image src={ben} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

// == Export
export default About;
