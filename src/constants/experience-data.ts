import compayZImage from '/compayz-logo.jpg';
import lisbomImage from '/lisbom-logo.jpg';

type Skill = string;

interface ExperienceRole {
  title: string;
  period: string;
  location: string;
  skills: Skill[];
}

interface ExperienceItem {
  company: string;
  logo: string;
  altText: string;
  employmentType: string;
  roles: ExperienceRole[];
  isLast?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    company: 'Lisbom',
    logo: lisbomImage,
    altText: 'Lisbom',
    employmentType: 'full-time',
    roles: [
      {
        title: 'Desenvolvedor Full Stack',
        period: 'Ago 2023 - Presente',
        location: 'Brasil · Remoto',
        skills: [
          'JavaScript',
          'Node.js',
          'Tailwind CSS',
          'Next.js',
          'MongoDB',
          'Desenvolvimento web',
          'Playwright',
          'Terraform',
          'Amazon S3',
          'Controle de versão',
          'AWS Amplify',
          'AWS Elastic Beanstalk',
          'Prisma',
          'React.js',
          'TypeScript',
          'Amazon EC2',
        ],
      },
    ],
  },
  {
    company: 'CompayZ',
    logo: compayZImage,
    altText: 'CompayZ',
    employmentType: 'full-time',
    roles: [
      {
        title: 'Desenvolvedor Full Stack',
        period: 'Set 2021 - Ago 2023',
        location: 'Cuiabá, Mato Grosso, Brasil',
        skills: [
          'JavaScript',
          'Vuex',
          'Tailwind CSS',
          'SCSS',
          'Next.js',
          'MongoDB',
          'Desenvolvimento web',
          'Bootstrap',
          'CSS',
          'Nuxt.js',
          'Inteligência emocional',
          'Terraform',
          'Amazon S3',
          'Controle de versão',
          'Web design',
          'PostgreSQL',
          'AWS Amplify',
          'Desenvolvimento full stack',
          'AWS Elastic Beanstalk',
          'React.js',
          'TypeScript',
          'HTML5',
          'Desenvolvimento de back-end',
          'Web Design Responsivo',
          'Treinamento em soft skills',
          'Scrum',
          'GraphQL',
          'Padrões de design',
          'Vue.js',
          'Amazon EC2',
        ],
      },
    ],
  },
  {
    company: 'Lisbom',
    logo: lisbomImage,
    altText: 'Lisbom',
    employmentType: 'part-time',
    roles: [
      {
        title: 'Desenvolvedor Full Stack',
        period: 'Jan 2021 - Set 2021',
        location: 'Brasil · Remoto',
        skills: [
          'JavaScript',
          'Node.js',
          'Next.js',
          'Controle de versão',
          'React.js',
          'TypeScript',
        ],
      },
    ],
    isLast: true,
  },
];
