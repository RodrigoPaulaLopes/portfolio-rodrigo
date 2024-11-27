import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contato</h2>
          <p className="text-gray-600">Vamos conversar sobre seu projeto</p>
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
              <HiMail className="text-2xl text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">seu.email@exemplo.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <HiPhone className="text-2xl text-primary" />
              <div>
                <h3 className="font-medium">Telefone</h3>
                <p className="text-gray-600">(00) 12345-6789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <HiLocationMarker className="text-2xl text-primary" />
              <div>
                <h3 className="font-medium">Localização</h3>
                <p className="text-gray-600">São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
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