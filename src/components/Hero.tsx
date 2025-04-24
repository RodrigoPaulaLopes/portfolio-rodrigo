import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import BackgroundShapes from './BackgroundShapes';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with shapes */}
      <BackgroundShapes />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Olá, eu sou <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Rodrigo Lopes</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-700"
        >
          Especialista em desenvolvimento de aplicações modernas utilizando tecnologias como React, Nest.js, Node.js e TypeScript.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-700 mb-8"
        >
          Apaixonado por transformar desafios em soluções escaláveis, com experiência em frontend e backend. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-x-4 mb-16"
        >
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
          >
            Contate-me
          </a>
          <a
            href="#projects"
            className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg transition-colors inline-block"
          >
            Ver Projetos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <HiArrowDown className="animate-bounce text-3xl text-blue-600" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;