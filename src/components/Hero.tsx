import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Olá, eu sou <span className="text-primary">Rodrigo Lopes</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-200"
        >
          Especialista em desenvolvimento de aplicações modernas utilizando tecnologias como React, Nest.js, Node.js e TypeScript.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-200 mb-8"
        >
          Apaixonado por transformar desafios em soluções escaláveis, com experiência em frontend e backend. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-x-4"
        >
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            Contate-me
          </a>
          <a
            href="#projects"
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Ver Projetos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <HiArrowDown className="animate-bounce text-3xl text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;