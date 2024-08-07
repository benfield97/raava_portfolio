import {
  DDB,
  SG,
  admatic,
  affinda,
  backend,
  ben,
  bias,
  creator,
  flying_fox,
  justin,
  kez,
  mobile,
  privateAI,
  ripe,
  ripe_logo,
  river,
  vesparum,
  web
} from "../assets";

export const navLinks = [
  // {
  //   id: "about",
  //   title: "About",
  // },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
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
const technologies = [];
const testimonials = [
  {
    image: river,
  },
  {
    image: kez,
  },
  {
    image: flying_fox,
  },
  {
    image: ripe_logo
  },
  {image: affinda},
  {name: 'Vesparum', image: vesparum},
  {name: 'SG Hiscock', image: SG},
  {image: DDB},
  {name: 'Admatic', image: admatic}

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

export { experiences, projects, services, technologies, testimonials };

