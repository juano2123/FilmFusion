import React from 'react';
import './SquareWithContent.css'; // Asegúrate de tener este archivo CSS para estilos

const SquareWithContent = ({ text, size, color, borderRadius }) => {
  // Definir el color de fondo con opacidad usando rgba
  const containerStyle = {
    width:  size === 'large' ? '352px' : '286px',
    height:  size === 'large' ? '144px' : '80px',
    backgroundColor: color,
    borderRadius: '5px'
  }
  
//   'rgba(19, 6, 35, 0.71)';

  return (
    <div className="square-container" style={containerStyle }>
      <p className="square-text">{text}</p>
    </div>
  );
};

export default SquareWithContent;

