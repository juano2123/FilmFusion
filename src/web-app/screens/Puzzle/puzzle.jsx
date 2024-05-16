import React, { useState } from 'react';
import BarAR from '../../components/BarAr/BarAr';
import DropZone from '../../components/DropZone/DropZone';
import MissingObject from '../../components/MissingObject/missingObject';

import flashImage from './assets/FLASH.png';
import lenteImage from './assets/LENTE.png';
import rolloImage from './assets/ROLLO.png';
import camara from './assets/camara.png';

import './puzzle.css';

const Puzzle = () => {
  const images = [
    { id: 'flash', src: flashImage },
    { id: 'lente', src: lenteImage },
    { id: 'rollo', src: rolloImage }
  ];

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [droppedItems, setDroppedItems] = useState({});

  const handleDrop = (draggedId, targetId) => {
    if (draggedId === targetId) {
      setFeedbackMessage('¡Correcto! Has colocado el componente correctamente.');
      setDroppedItems(prev => ({ ...prev, [targetId]: true }));
    } else {
      setFeedbackMessage('Incorrecto. Intenta de nuevo.');
    }
  };

  return (
    <div className="puzzle-container">
      <div className="ar-button-container">
        <BarAR text="Activate AR" />
      </div>
      <div className="object-3d-container" style={{ backgroundImage: `url(${camara})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '500px', height: '500px' }}>
        <DropZone id="flash" onDrop={handleDrop}>
          {droppedItems['flash'] && <img src={flashImage} alt="flash" style={{ width: '100px' }} />}
        </DropZone>
        <DropZone id="lente" onDrop={handleDrop}>
          {droppedItems['lente'] && <img src={lenteImage} alt="lente" style={{ width: '100px' }} />}
        </DropZone>
        <DropZone id="rollo" onDrop={handleDrop}>
          {droppedItems['rollo'] && <img src={rolloImage} alt="rollo" style={{ width: '100px' }} />}
        </DropZone>
      </div>
      <div className="missing-object-container">
        <MissingObject images={images} />
      </div>
      <div className="feedback-message">{feedbackMessage}</div>
    </div>
  );
};

export default Puzzle;
