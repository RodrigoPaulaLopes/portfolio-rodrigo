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
        <p className="text-gray-600 mb-6">
          Sou um desenvolvedor apaixonado por criar soluções web inovadoras e
          intuitivas. Com experiência em desenvolvimento front-end e back-end,
          busco sempre aprender novas tecnologias e aprimorar minhas habilidades.
        </p>
        <p className="text-gray-600">
          Minha jornada na programação começou há X anos, e desde então venho
          trabalhando em projetos desafiadores que me permitiram crescer como
          profissional e contribuir para o sucesso de diversos produtos digitais.
        </p>
      </motion.div>
    </section>
  );
};

export default About;