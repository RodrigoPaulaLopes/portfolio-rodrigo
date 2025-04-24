import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-surface text-gray-700 py-12 mt-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">{"<"}CodeBy<span className="text-accent">Rodrigo</span>{" />"}</h3>
            <p className="text-gray-700 mt-2">Transformando ideias em realidade</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/RodrigoPaulaLopes"
              className="text-gray-700 hover:text-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigopaulalopes/"
              className="text-gray-700 hover:text-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 text-center text-gray-700">
          <p>&copy; {new Date().getFullYear()} {"<"}CodeByRodrigo{" />"} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;