import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'EvenTix',
      description: 'Este é um sistema de gerenciamento eventos e tickets, onde usuarios podem comprar tickets para participar de eventos.',
      image: "/assets/eventix.jpeg",
      tech: ['Node.js', 'Nest.js', 'Postgresql', 'React', 'Tailwind CSS', 'Docker'],
      liveUrl: '#',
      codeUrl: 'https://github.com/RodrigoPaulaLopes/eventify',
    },
    {
      title: 'Inventory Pro',
      description: 'Sistema feito para gerenciamento de estoque.',
      image: '/assets/inventory_pro.jpeg',
      tech: ['TypeScript', 'Express', 'PostgreSQL', 'React', 'Tailwind CSS', 'Jest'],
      liveUrl: '#',
      codeUrl: 'https://github.com/RodrigoPaulaLopes/api-vendas',
    },
    {
      title: 'Landing Page - Loja Virtual',
      description: 'Landing page responsiva para loja virtual com foco em apresentação de produtos e navegação intuitiva.',
      image: '/assets/avanti_virtual.jpeg',
      tech: ['HTML', 'CSS', 'Tailwind CSS', 'Daisyui', 'Javascript', 'Swiper.js'],
      liveUrl: 'https://virtualstore-avanti.netlify.app/',
      codeUrl: '#',
    },
    {
      title: 'GitPeek - buscar perfis no github',
      description: 'Aplicação para busca e visualização de perfis do GitHub.',
      image: '/assets/github_find.jpeg',
      tech: ['React', 'Typescript', 'Tailwind CSS', 'Daisyui', 'Axios'],
      liveUrl: 'https://gitpeek-avanti.netlify.app/',
      codeUrl: '#',
    },
    {
      title: 'People Cysource',
      description: 'Sistema de gerenciamento de usuarios.',
      image: 'https://via.placeholder.com/500x300',
      tech: ['React', 'Typescript', 'Python', 'Flask'],
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <section id="projects" className="section-container bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-text-primary">Meus Projetos</h2>
        <p className="text-text-secondary">Alguns dos trabalhos que desenvolvi</p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-background text-text-secondary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center text-primary hover:text-accent transition-colors"
                >
                  <HiExternalLink className="mr-1" /> Demo
                </a>
                <a
                  href={project.codeUrl}
                  className="flex items-center text-primary hover:text-accent transition-colors"
                >
                  <HiCode className="mr-1" /> Frontend
                </a>
                <a
                  href={project.codeUrl}
                  className="flex items-center text-primary hover:text-accent transition-colors"
                >
                  <HiCode className="mr-1" /> Backend
                </a>
              </div>
            </div>
          </motion.div>
        ))}

      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mt-12">
        <a href="https://github.com/RodrigoPaulaLopes?tab=repositories" className='text-center hover:text-accent'>Veja outros projetos que desenvolvi acessando meu GitHub.</a>
      </motion.div>
    </section>
  );
};

export default Projects;