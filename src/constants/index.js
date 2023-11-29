import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  justin,
  ben,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  river,
  privateAI,
  ripe,
  bias,
  ripe_logo,
  flying_fox,
  kez
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Development",
    icon: web,
  },
  {
    title: "Analysis/Consulting",
    icon: mobile,
  },
  {
    title: "Training",
    icon: backend,
  },
  {
    title: "Workshops",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Justin Beaconsfield",
    icon: justin,
    iconBg: "#383E56",
    points: [
      "Master's of Data Scince @ Melbourne University. Ex. Quant Trader at Akuna Capital.",
      'Interested in statistics, complex systems and AI safety. Experienced in AI Engineering and Machine Learning.'
    ],
  },
  {
    title: "Ben Field",
    icon: ben,
    iconBg: "#E6DEDD",
    points: [
      "Master's of Biomedical Engineering @ Melbourne University. ",
      'Interested in complexity, design, progress and technology. Experienced in Software and AI engineering.'
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "River Capital",
    designation: "CTO",
    company: "456 Enterprises",
    image: river,
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Kez",
    designation: "CFO",
    company: "Acme Co",
    image: kez,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Flying Fox",
    designation: "COO",
    company: "DEF Corp",
    image: flying_fox,
  },
  {
    testimonial:
      "I love to hate crime and i don't care who knows it!",
    name: "ripe",
    designation: "CTO",
    company: "456 Enterprises",
    image: ripe_logo
  },
];

const projects = [
  {
    name: "PrivateAI",
    description:
      "Chat interface that allows businesses to securely access OpenAI models. Secured by Microsoft Azure to ensure full privacy.",
    image: privateAI,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ripe Descriptionizer",
    description:
      "We worked with Ripe Maternity to build a tool that automates the process of creating product descriptions. Descriptions were equal in quality to manually created ones and 100's of times faster to produce.",
    image: ripe,
    source_code_link: "https://github.com/",
  },
  {
    name: "byeBias",
    description:
      "A chrome plugin that alerts you to the political and rhetorical bias of the article you're reading through a scored rating and the highlighting of key phrases..",
    image: bias,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
