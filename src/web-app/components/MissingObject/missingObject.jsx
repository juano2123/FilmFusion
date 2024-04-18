import React from 'react';
import './missingObject.css'; // Importamos los estilos CSS
import { useNavigate } from "react-router-dom";

const MissingObject = ({ images }) => {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/ganar");
  };
  return (
    <div className="rectangle-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery ${index + 1}`} className="rectangle-image" onClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default MissingObject;
