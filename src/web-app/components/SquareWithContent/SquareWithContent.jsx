import React from 'react';
import './SquareWithContent.css'; // Asegúrate de tener este archivo CSS para estilos

const SquareWithContent = ({ text1,text2, size, color, borderRadius }) => {
  // Definir el color de fondo con opacidad usando rgba
  const containerStyle = {
    width:  size === 'large' ? '352px' : '286px',
    height:  size === 'large' ? '144px' : '80px',
    backgroundColor: color,
    borderRadius: '25px'
  }
  
//   'rgba(19, 6, 35, 0.71)';

  return (
    <div className="square-container" style={containerStyle }>
      <p className="square-text1">{text1}</p>
      <p className="square-text2">{text2}</p>
    </div>
  );
};

export default SquareWithContent;

