interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      'React.js',
      'Vue.js',
      'Nuxt.js',
      'Next.js',
      'TypeScript',
      'HTML5',
      'CSS',
      'SCSS',
      'Tailwind CSS',
      'Bootstrap',
      'Web Design Responsivo',
    ],
  },
  {
    name: 'Backend & Data',
    skills: ['GraphQL', 'Prisma', 'SQLite'],
  },
  {
    name: 'Testing & Tools',
    skills: [
      'Playwright',
      'Controle de versão',
      'Scrum',
      'Padrões de design',
      'Web design',
      'Vuex',
    ],
  },
];
