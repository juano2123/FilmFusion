// Button.js

import React from 'react';
import './CustomButton.css'; // Asegúrate de crear este archivo para los estilos

const CustomButton = ({ text, color, size, fontFamily, border, outline }) => {
  const styles = {
    backgroundColor: color,
    // Establece el tamaño basado en la prop size
    width: size === 'large' ? '315px' : size === 'medium' ? '179px' : '150px',
    height: size === 'large' ? '89px' : size === 'medium' ? '51px' : '43px',
    fontSize: size === 'large' ? '20px' : size === 'medium' ? '16px' : '14px',
    fontFamily: 'sans-serif',
    outline: outline || 'none',
  };

  return (
    <button style={styles}>{text}</button>
  );
};

export default CustomButton;
