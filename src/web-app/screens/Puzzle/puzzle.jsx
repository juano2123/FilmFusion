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
import camaraFlash from './assets/camaraflash.png'; // Imagen de la cámara con flash
import camaraLente from './assets/camaralente.png'; // Imagen de la cámara con lente
import camaraRollo from './assets/camararollo.png'; // Imagen de la cámara con lente
import camaraOpen from './assets/Abierto.png'; // Imagen de la cámara abierta


import './puzzle.css';

const Puzzle = () => {
  const initialImages = [
    { id: 'lente', src: lenteImage },
    { id: 'flash', src: flashImage },
    { id: 'rollo', src: rolloImage }
  ];

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [remainingImages, setRemainingImages] = useState(initialImages);
  const [cameraState, setCameraState] = useState('closed'); // Estado para la imagen actual de la cámara
  const navigate = useNavigate(); // Hook para navegar a otra página

  useEffect(() => {
    if (remainingImages.length === 0 ) {
      const timer = setTimeout(() => {
        navigate('/ganar'); // Redirige a la página de ganar después de 5 segundos
      }, 3000);

      return () => clearTimeout(timer); // Limpiar el temporizador en caso de que el componente se desmonte antes de que se complete el tiempo
    }
  }, [remainingImages, cameraState, navigate]);

  const handleDrop = (draggedId, dropZoneId) => {
    const correctMapping = {
      'flash-drop': 'flash',
      'lente-drop': 'lente',
      'rollo-drop': 'rollo'
    };

    console.log(`handleDrop - DropZone ID: ${dropZoneId} - Dragged ID: ${draggedId}`);
    
    if (correctMapping[dropZoneId] === draggedId) {
      setRemainingImages(prev => prev.filter(image => image.id !== draggedId));
      // Actualiza el estado de la cámara si el objeto es correcto
      switch (draggedId) {
        case 'flash':
          setCameraState('flash');
          break;
        case 'lente':
          setCameraState('lente');
          break;
        case 'rollo':
          setCameraState('rollo');
          break;
        default:
          setCameraState('closed');
          break;
      }
    } else {
      setFeedbackMessage('Lo siento, creo que ahí no iba, inténtalo de nuevo');
      setTimeout(() => setFeedbackMessage(''), 2000); 
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
            cameraState={cameraState} // Pasa el estado de la cámara como prop
            srcClosed={camaraClosed}
            srcFlash={camaraFlash}
            srcLente={camaraLente}
            srcTurned={camaraTurned}
            srcOpen={camaraOpen}
            srcRollo={camaraRollo}
            onDrop={handleDrop}
          />
        </div>
        {feedbackMessage && (
          <div className={`feedback-message ${feedbackMessage ? 'error' : ''}`}>
            {feedbackMessage}
          </div>
          )}
        <div className="missing-object-container">
          <MissingObject images={remainingImages} onDrop={handleDrop} />
        </div>
      </div>
    </DragAndDropProvider>
  );
};

export default Puzzle;