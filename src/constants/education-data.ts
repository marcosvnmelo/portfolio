import unoparImage from '/unopar-logo.jpg';
import ifImage from '/if-logo.jpg';

interface Education {
  logo: string;
  institution: string;
  degree: string;
  period: string;
  isLast?: boolean;
}

export const educationData: Education[] = [
  {
    logo: unoparImage,
    institution: 'UNOPAR - Universidade Norte do Paraná',
    degree:
      'Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de Sistemas',
    period: '2023 - 2025',
  },
  {
    logo: ifImage,
    institution: 'Instituto Federal de Educação, Ciência e Tecnologia do Ceará',
    degree: 'Curso Técnico Integrado, Informática',
    period: '2017 - 2021',
    isLast: true,
  },
];
