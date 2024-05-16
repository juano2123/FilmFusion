import React from 'react';
import './missingObject.css'; // Importamos los estilos CSS
import { useNavigate } from "react-router-dom";
import Draggable from '../Draggable/Draggable';

const MissingObject = ({ images = [] }) => {  // Añadimos un valor predeterminado de array vacío
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/ganar");
  };

  const handleDrop = (id, position) => {
    console.log(`Item ${id} dropped at position:`, position);
    // Aquí puedes agregar la lógica de tu juego
  };

  return (
    <div className="rectangle-container">
      {images.map((image, index) => (
        <Draggable key={index} id={image.id} src={image.src} onDrop={handleDrop} onClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default MissingObject;


