import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import BarAR from '../../components/BarAr/BarAr';
import MissingObject from '../../components/MissingObject/missingObject';
import DraggableCamera from '../../components/DraggableCamera/DraggableCamera';
import DraggableProjector from '../../components/DraggableProjector/DraggableProjector';
import DraggableLantern from '../../components/DraggableLantern/DraggableLantern';
import { DragAndDropProvider } from '../../components/Draggable/DragAndDropContext'; // Importa el proveedor de contexto

// Importa las imágenes para los diferentes puzzles
import flashImage from './assets/camara/FLASH.png';
import lenteImage from './assets/camara/LENTE.png';
import rolloImage from './assets/camara/ROLLO.png';
import camaraClosed from './assets/camara/camara.png'; // Imagen de la cámara cerrada
import camaraFlash from './assets/camara/camaraflash.png'; // Imagen de la cámara con flash
import camaraLente from './assets/camara/camaralente.png'; // Imagen de la cámara con lente
import camaraTurned from './assets/camara/Cuerpo_atras.png'; // Imagen de la cámara girada
import camaraOpen from './assets/camara/Abierto.png'; // Imagen de la cámara abierta sin rollo
import camaraRollo from './assets/camara/camararollo.png'; // Imagen de la cámara abierta con rollo

import cintaImage from './assets/proyector/CINTA.png'; // Imágenes del proyector
import lenteImages from './assets/proyector/LENTE.png';
import luzImage from './assets/proyector/LUZ.png';

import bulbImage from './assets/linterna/BULB.png'; // Imágenes de la linterna
import placaImage from './assets/linterna/PLACA.png';
import topImage from './assets/linterna/TOP.png';

import './puzzle.css';

const Puzzle = () => {
  const { id } = useParams(); // Obtener el id de los parámetros de la URL

  const initialImages = {
    camara: [
      { id: 'flash', src: flashImage },
      { id: 'lente', src: lenteImage },
      { id: 'rollo', src: rolloImage }
    ],
    proyector: [
      { id: 'cinta', src: cintaImage },
      { id: 'lente', src: lenteImages },
      { id: 'luz', src: luzImage }
    ],
    linterna: [
      { id: 'bulb', src: bulbImage },
      { id: 'top', src: topImage },
      { id: 'placa', src: placaImage }
    ]
  };

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [remainingImages, setRemainingImages] = useState(initialImages[id] || []);
  const [cameraState, setCameraState] = useState({
    state: 'closed',
    hasFlash: false,
    hasLente: false,
    hasRollo: false
  }); // Estado para la imagen actual de la cámara y los componentes agregados
  const [projectorState, setProjectorState] = useState({
    hasCinta: false,
    hasLente: false,
    hasLuz: false
  }); // Estado para la imagen actual del proyector y los componentes agregados
  const [lanternState, setLanternState] = useState({
    hasBulb: false,
    hasPlaca: false,
    hasTop: false
  }); // Estado para la imagen actual de la linterna mágica y los componentes agregados

  const [showAviso, setShowAviso] = useState(false);
  const navigate = useNavigate(); // Hook para navegar a otra página

  const handleShowAviso = () => setShowAviso(true);
  const handleCloseAviso = () => setShowAviso(false);

  useEffect(() => {
    console.log('Puzzle ID:', id); // Mensaje de depuración
    if (!initialImages[id]) {
      console.error(`Invalid puzzle ID: ${id}`); // Mensaje de error
    } else {
      console.log('Remaining Images:', remainingImages); // Mensaje de depuración
    }
  }, [id, remainingImages]);

  useEffect(() => {
    if (remainingImages.length === 0 && initialImages[id]) {
      const timer = setTimeout(() => {
        navigate('/ganar'); // Redirige a la página de ganar después de 5 segundos
      }, 5000);

      return () => clearTimeout(timer); // Limpiar el temporizador en caso de que el componente se desmonte antes de que se complete el tiempo
    }
  }, [remainingImages, navigate, id, initialImages]);

  const handleDrop = (draggedId, dropZoneId) => {
    const correctMapping = {
      camara: {
        'flash-drop': 'flash',
        'lente-drop': 'lente',
        'rollo-drop': 'rollo'
      },
      proyector: {
        'cinta-drop': 'cinta',
        'lente-drop': 'lente',
        'luz-drop': 'luz'
      },
      linterna: {
        'bulb-drop': 'bulb',
        'top-drop': 'top',
        'placa-drop': 'placa'
      }
    };

    if (correctMapping[id] && correctMapping[id][dropZoneId] === draggedId) {
      setRemainingImages(prev => prev.filter(image => image.id !== draggedId));
      setFeedbackMessage('');
      switch (draggedId) {
        case 'flash':
          setCameraState(prev => ({ ...prev, hasFlash: true }));
          break;
        case 'lente':
          setCameraState(prev => ({ ...prev, hasLente: true }));
          break;
        case 'rollo':
          setCameraState(prev => ({ ...prev, hasRollo: true }));
          break;
        case 'cinta':
          setProjectorState(prev => ({ ...prev, hasCinta: true }));
          break;
        case 'lente':
          setProjectorState(prev => ({ ...prev, hasLente: true }));
          break;
        case 'luz':
          setProjectorState(prev => ({ ...prev, hasLuz: true }));
          break;
        case 'bulb':
          setLanternState(prev => ({ ...prev, hasBulb: true }));
          break;
        case 'top':
          setLanternState(prev => ({ ...prev, hasTop: true }));
          break;
        case 'placa':
          setLanternState(prev => ({ ...prev, hasPlaca: true }));
          break;
        default:
          break;
      }
    } else {
      setFeedbackMessage('Lo siento, creo que ahí no iba, inténtalo de nuevo');
      setTimeout(() => setFeedbackMessage(''), 2000); // Quitar el feedback después de 2 segundos
    }
  };

  if (!initialImages[id]) {
    return <div>Error: Invalid puzzle ID</div>;
  }

  return (
    <DragAndDropProvider>
      <div className="puzzle-container">
        <div className="ar-button-container">
          <BarAR text="Activate AR" />
        </div>
        <div className="object-3d-wrapper">
          {id === 'camara' && (
            <DraggableCamera
              cameraState={cameraState}
              srcClosed={camaraClosed}
              srcFlash={camaraFlash}
              srcLente={camaraLente}
              srcTurned={camaraTurned}
              srcOpen={camaraOpen}
              srcRollo={camaraRollo}
              onDrop={handleDrop}
            />
          )}
          {id === 'proyector' && (
            <DraggableProjector
              projectorState={projectorState}
              srcCinta={cintaImage}
              srcLente={lenteImages}
              srcLuz={luzImage}
              onDrop={handleDrop}
            />
          )}
          {id === 'linterna' && (
            <DraggableLantern
              lanternState={lanternState}
              srcBulb={bulbImage}
              srcPlaca={placaImage}
              srcTop={topImage}
              onDrop={handleDrop}
            />
          )}
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
