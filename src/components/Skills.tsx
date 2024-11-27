
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiJavascript, 
  SiReact, 
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiNestjs,
  SiExpress,
  SiDocker,
  SiFlask,
  SiJest
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'NestJS', icon: SiNestjs, color: 'text-red-600' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-600' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
    { name: 'Flask', icon: SiFlask, color: 'text-gray-800' },
    { name: 'jest', icon: SiJest, color: 'text-gray-800' }
  ];

  return (
    <section id="skills" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Minhas Habilidades</h2>
        <p className="text-gray-600">Tecnologias com as quais trabalho</p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
          >
            <skill.icon className={`text-4xl ${skill.color} mb-4`} />
            <h3 className="font-medium text-center">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;