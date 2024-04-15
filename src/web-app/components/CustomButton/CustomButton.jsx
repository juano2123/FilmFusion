import React from 'react';
import './CustomButton.css'; // Asegúrate de crear este archivo para los estilos

const CustomButton = ({ text, color, size, fontFamily, border, outline, imageUrl, onClick }) => {
  const styles = {
    backgroundColor: color,
    // Establece el tamaño basado en la prop size
    width: size === 'large' ? '315px' : size === 'medium' ? '179px' : '150px',
    height: size === 'large' ? '89px' : size === 'medium' ? '51px' : '43px',
    fontSize: size === 'large' ? '20px' : size === 'medium' ? '16px' : '14px',
    fontFamily: fontFamily || 'sans-serif', // Asegúrate de aplicar fontFamily correctamente
    outline: outline || 'none',
  };
  const imageStyle = {
    marginRight: imageUrl ? '10px' : '0', // Añade espacio si hay una imagen
    height: '100%', // Ajusta esto según necesites
  };

  return (
    <button className="control-button" style={styles} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="imagen-boton" style={imageStyle} />}
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;

