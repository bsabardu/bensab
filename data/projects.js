import acdc from '../src/assets/img/projets/acdc.jpg';
import bensab from '../src/assets/img/projets/bensab.jpg';
import yogana from '../src/assets/img/projets/yogana.jpg';

const projects = [{
  title: 'ACDC Cyclisme',
  description: "Site vitrine d'un club de vélo, réalisé ex-nihilo : design avec figma, css avec tailwind et une base node/express/ejs",
  url: 'http://acdc.bensab.fr',
  img: acdc,
  priority: 1,
  tags: [
    {
      name: 'Node/Express',
      color: 'green',
    },
    {
      name: 'Vanilla JS',
      color: 'yellow',
    },
    {
      name: 'Tailwind',
      color: 'teal',
    },
  ],
},
{
  title: 'bensab.fr',
  description: 'Portfolioception ! Une v1 de Mon propre portfolio réalisée en "Quick and pretty"',
  url: 'https://bensab.fr',
  img: bensab,
  priority: 1,
  tags: [
    {
      name: 'React',
      color: 'blue',
    },
    {
      name: 'Semantic UI',
      color: 'grey',
    },
  ],
},
{
  title: 'Yogana',
  description: "Site vitrine d'un professeur de Yoga : Design, Développement wordpress, déploiement",
  url: 'http://yogana-yoga-chatou.fr',
  priority: 2,
  img: yogana,
  tags: [
    {
      name: 'Wordpress',
      color: 'black',
    },
  ],
},
];

export default projects;
