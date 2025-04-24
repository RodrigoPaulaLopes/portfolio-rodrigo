import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section-container bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-text-primary">Contato</h2>
          <p className="text-text-secondary">Vamos conversar sobre seu projeto</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-background rounded-lg">
                <HiMail className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text-primary">Email</h3>
                <p className="text-text-secondary">rodrigo.plopesti@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-background rounded-lg">
                <HiPhone className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text-primary">Telefone</h3>
                <p className="text-text-secondary">(21) 99604-1143</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-background rounded-lg">
                <HiLocationMarker className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text-primary">Localização</h3>
                <p className="text-text-secondary">Nova Iguaçu, RJ - Brasil</p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-background border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-text-primary placeholder-text-secondary"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-background border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-text-primary placeholder-text-secondary"
                placeholder="seu.email@exemplo.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-background border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-text-primary placeholder-text-secondary"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-accent transition-colors duration-300 font-medium"
            >
              Enviar Mensagem
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;