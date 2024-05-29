import React from 'react';
import './missingObject.css';
import { useNavigate } from "react-router-dom";
import Draggable from '../Draggable/Draggable';

const MissingObject = ({ images = [], onDrop }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/ganar");
  };

  return (
    <div className="rectangle-container">
      {images.map((image, index) => (
        <Draggable key={index} id={image.id} src={image.src} onDrop={onDrop} onClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default MissingObject;




