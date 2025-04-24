import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Sobre Mim</h2>
        <p className="text-gray-700 mb-2">
          Hey 👋! Sejam bem-vindos. Me chamo Rodrigo Lopes e sou um <span className='text-secondary'>Desenvolvedor Full Stack</span> com foco principal em Node.js. Atualmente, estou cursando Sistemas de informação e, paralelamente, estudando programação em diversos cursos online.
        </p>
        <p className="text-gray-700 mb-4">
          Praticamente iniciei no mercado de trabalho como estagiario em desenvolvimento Full Stack, e ao longo do tempo, alcancei cargos hierárquicos maiores. Há 3 anos, assumi o cargo de Desenvolvedor Full Stack, onde aprimorei minhas habilidades em: resolução de problemas devido a imprevistos; trabalho em equipe incluindo outros setores integrados; capacidade de adaptabilidade com mudanças de departamentos e colaboradores; e comprometimento com as entregas. Totalizando 2 anos evoluindo na mesma empresa.
        </p>
        <p className="text-gray-700">
          Estou tendo a oportunidade de exercer projetos pessoais utilizando JavaScript (Typescript) e Node.js. Criação de servidor. Consumo de API. Criação de aplicações APIRest, Operação em banco de dados não-relacional: MongoDB. Operação em banco de dados relacional: MySQL. Framework Express.js. Nestjs, criação de paginas web dinamicas, landing pages e single pages application com ReactJs, construção de aplicações mobile com React Native, versionamento de codigo com Git e GitHub, gerenciamento de containers com Docker e Docker compose. Dessas tecnologias contribuo em comunidades para dar suporte e aprender com outras pessoas.
        </p>

      </motion.div>
    </section>
  );
};

export default About;