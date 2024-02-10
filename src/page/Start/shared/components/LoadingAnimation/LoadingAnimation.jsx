import React from 'react';
import { motion } from 'framer-motion';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <motion.div
      style={{
        margin: '0 auto',
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: '#333',
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
  );
};

export default LoadingAnimation;
