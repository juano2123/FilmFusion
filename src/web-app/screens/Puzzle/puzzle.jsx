import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; 
import BarAR from '../../components/BarAr/BarAr';
import MissingObject from '../../components/MissingObject/missingObject';
import DraggableCamera from '../../components/DraggableCamera/DraggableCamera';
import { DragAndDropProvider } from '../../components/Draggable/DragAndDropContext'; // Importa el proveedor de contexto

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
  const navigate = useNavigate(); // Hook para navegar a otra página


  useEffect(() => {
    if (remainingImages.length === 0) {
      navigate('/ganar'); // Redirige a la página de ganar
    }
  }, [remainingImages, navigate]);


  const handleDrop = (draggedId, dropZoneId) => {
    const correctMapping = {
      'flash-drop': 'flash',
      'lente-drop': 'lente',
      'rollo-drop': 'rollo'
    };

    console.log(`handleDrop - DropZone ID: ${dropZoneId} - Dragged ID: ${draggedId}`);
    
    if (correctMapping[dropZoneId] === draggedId) {
      setRemainingImages(prev => prev.filter(image => image.id !== draggedId));
      // setFeedbackMessage('¡Correcto!');
    } else {
      setFeedbackMessage('Lo siento, creo que ahí no iba, inténtalo de nuevo');
    }
  };

  return (
    <DragAndDropProvider>
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
        <div className="feedback-message">{feedbackMessage}</div>
        <div className="missing-object-container">
          <MissingObject images={remainingImages} onDrop={handleDrop} />
        </div>
      </div>
    </DragAndDropProvider>
  );
};

export default Puzzle;