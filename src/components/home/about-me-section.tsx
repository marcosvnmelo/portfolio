import { topBorder } from '../shared/svg-borders';

export function AboutMeSection() {
  return (
    <section
      className="px-4 py-10 md:px-16"
      style={{ backgroundImage: topBorder }}
    >
      <h2 className="mb-6 text-2xl font-bold">Sobre mim</h2>
      <p className="text-muted-foreground leading-relaxed">
        Sou um desenvolvedor de software experiente, com foco em React.js e
        TypeScript. Tenho mais de 2 anos de experiência na área, trabalhando em
        uma variedade de projetos, desde jogos, pequenas aplicações web, e até
        grandes plataformas. Sou uma pessoa curiosa e sempre estou buscando
        aprender coisas novas. Acredito que a atualização constante é essencial
        para a carreira de um desenvolvedor. Também sou uma pessoa focada em
        eficiência e sempre busco novos métodos de realizar minhas tarefas de
        forma mais eficaz. Possuo habilidades em desenvolvimento front-end,
        desenvolvimento back-end e DevOps. Já trabalhei com diversas
        tecnologias, incluindo React.js, TypeScript, Vue.js, GraphQL, Bootstrap,
        TailwindCSS, AWS, GitHub Actions, entre outras. Estou sempre em busca de
        novas oportunidades para desenvolver minhas habilidades e conhecimentos.
      </p>
    </section>
  );
}
