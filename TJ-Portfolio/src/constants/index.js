import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  devtown,
  saksham,
  symphony,
  skatezy,
  webot,
  
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Machine Learning',
    icon: ux,
  },
  {
    title: 'Cloud Computing',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Lead Front-End Developer',
    company_name: 'University Software Cell',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2022 - Present',
  },
  {
    title: 'Machine Learning Mentor',
    company_name: 'HackEDCode',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Web-Blinders (Internship)',
    icon: kelhel,
    iconBg: '#333333',
    date: 'July 2023 - Sept 2023',
  },
  {
    title: 'GDSC-USAR Lead',
    company_name: 'Google Club at College',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'DevTown',
    description: 'A social media platform designed specifically for developers. Frontend in react.js & Express.js used for back-end development.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: devtown,
    repo: 'https://github.com/TaniskaJha/DevTown',
    demo: 'https://devtown.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'SAKSHAM',
    description:
      'Education Platform for specially abled children of all age group. Equipped with worlds first digital hindi orbit writer and a Saksham Playgroud. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: saksham,
    repo: 'https://github.com/TaniskaJha/Saksham-Web-Portal',
    demo: 'https://sakshamml.onrender.com/',
  },
  {
    id: 'project-3',
    name: 'SKATEZY',
    description: 'A Skateboard rental service platform integrated with a Stripe Payment Gateway connected for seamless transactions. This project is built with Next.js and tailwind css. ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: skatezy,
    repo: 'https://github.com/TaniskaJha/SKATEZY',
    demo: 'https://skatezy-11.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'Symphony System',
    description: `This EDA Webapp recommends song and has used Flask for back-end. It has CI/CD pipleline setup with AWS using github actions and docker.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: symphony,
    repo: 'https://github.com/TaniskaJha/FullStack-project',
    demo: 'https://symphonyml.onrender.com/',
  },
  {
    id: 'project-5',
    name: 'webot',
    description:
      'This is website supported with an AI bot built using OPENApi which answers all your real time queries.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: webot,
    repo: 'https://github.com/TaniskaJha/WEBOT',
    demo: 'https://webot-taniskajha.netlify.app',
  },
];

export { services, technologies, experiences, projects };
