import React from 'react';
import { motion } from 'framer-motion';
import './LoadingAnimation.css'; // Asegúrate de que la ruta sea correcta

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="spinner"
        style={{
          margin: '0 auto',
          width: 40,
          height: 40,
          borderRadius: '50%',
          backgroundColor: 'white',
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />
      <div className="loading-text">Cargando...</div> {/* Texto añadido debajo del spinner */}
    </div>
  );
};

export default LoadingAnimation;
