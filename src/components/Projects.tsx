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
      title: 'Projeto 1',
      description: 'Uma aplicação web moderna construída com React e Node.js',
      image: 'https://via.placeholder.com/500x300',
      tech: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Projeto 2',
      description: 'Sistema de gerenciamento desenvolvido com TypeScript',
      image: 'https://via.placeholder.com/500x300',
      tech: ['TypeScript', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Projeto 3',
      description: 'Aplicação mobile multiplataforma com React Native',
      image: 'https://via.placeholder.com/500x300',
      tech: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
        <p className="text-gray-600">Alguns dos trabalhos que desenvolvi</p>
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
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center text-primary hover:text-secondary"
                >
                  <HiExternalLink className="mr-1" /> Demo
                </a>
                <a
                  href={project.codeUrl}
                  className="flex items-center text-primary hover:text-secondary"
                >
                  <HiCode className="mr-1" /> Código
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;