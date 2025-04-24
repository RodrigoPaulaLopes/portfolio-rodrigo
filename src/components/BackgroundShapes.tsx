import React from 'react';
import { motion } from 'framer-motion';

const BackgroundShapes = () => {
  return (
    <>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100"></div>
      
      {/* Particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-blue-200/30"
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 - 50 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              x: [
                Math.random() * 100 - 50 + "%",
                Math.random() * 100 - 50 + "%",
                Math.random() * 100 - 50 + "%",
              ],
              y: [
                Math.random() * 100 - 50 + "%",
                Math.random() * 100 - 50 + "%",
                Math.random() * 100 - 50 + "%",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 20 + 10,
            }}
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>
      
      {/* Abstract code/tech shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[20%] left-[15%] w-40 h-40 rounded-lg border-2 border-blue-200"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 10, opacity: 0.5 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-[30%] right-[20%] w-32 h-32 rounded-full border-2 border-blue-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.5 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[25%] w-48 h-24 rounded-lg border-2 border-blue-200"
          initial={{ rotate: -5, opacity: 0 }}
          animate={{ rotate: 5, opacity: 0.5 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[15%] w-24 h-24 rounded-lg border-2 border-blue-300"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 20, opacity: 0.5 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Light effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-blue-100/20"></div>
    </>
  );
};

export default BackgroundShapes;