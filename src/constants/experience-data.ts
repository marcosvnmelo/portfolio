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
    altText: 'Lisbom · Internship',
    employmentType: 'Internship',
    roles: [
      {
        title: 'Full Stack Developer',
        period: 'Aug 2023 - Present',
        location: 'Brasil · Remote',
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
        title: 'Full Stack Developer',
        period: 'Sep 2021 - Aug 2023',
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
        title: 'Full Stack Developer',
        period: 'Jan 2021 - Sep 2021',
        location: 'Brasil · Remote',
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
