import React from 'react';
import './missingObject.css'; // Importamos los estilos CSS

const MissingObject = ({ images }) => {
  return (
    <div className="rectangle-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery ${index + 1}`} className="rectangle-image" />
      ))}
    </div>
  );
};

export default MissingObject;
