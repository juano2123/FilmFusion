import React, { useState } from 'react';
import BarAR from '../../components/BarAr/BarAr';
import MissingObject from '../../components/MissingObject/missingObject';
import DraggableCamera from '../../components/DraggableCamera/DraggableCamera';

import flashImage from './assets/FLASH.png';
import lenteImage from './assets/LENTE.png';
import rolloImage from './assets/ROLLO.png';
import camaraClosed from './assets/camara.png'; // Imagen de la cámara cerrada
import camaraTurned from './assets/Cuerpo_atras.png';
import camaraOpen from './assets/Abierto.png'; // Imagen de la cámara abierta

import './puzzle.css';

const Puzzle = () => {
  const initialImages = [
    { id: 'flash', src: flashImage },
    { id: 'lente', src: lenteImage },
    { id: 'rollo', src: rolloImage }
  ];

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [remainingImages, setRemainingImages] = useState(initialImages);

  const handleDrop = (draggedId) => {
    const imageExists = remainingImages.some(image => image.id === draggedId);
    if (imageExists) {
      setRemainingImages(prev => prev.filter(image => image.id !== draggedId));
      setFeedbackMessage('');
    } else {
      setFeedbackMessage('Incorrecto. Intenta de nuevo.');
    }
  };

  return (
    <div className="puzzle-container">
      <div className="ar-button-container">
        <BarAR text="Activate AR" />
      </div>
      <div className="object-3d-wrapper">
        <DraggableCamera
          srcClosed={camaraClosed}
          srcTurned={camaraTurned}
          srcOpen={camaraOpen}
          onDrop={handleDrop}
        />
      </div>
      <div className="missing-object-container">
        <MissingObject images={remainingImages} onDrop={handleDrop} />
      </div>
      <div className="feedback-message">{feedbackMessage}</div>
    </div>
  );
};

export default Puzzle;

