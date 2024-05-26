import React, { useState, useEffect } from 'react';
import DropZone from '../DropZone/DropZone'; // Importa el componente DropZone

const DraggableCamera = ({ cameraState, srcClosed, srcFlash, srcLente, srcTurned, srcOpen, srcRollo, onDrop }) => {
  const [currentCameraState, setCurrentCameraState] = useState(cameraState); // Estado actual de la cámara

  useEffect(() => {
    setCurrentCameraState(cameraState);
  }, [cameraState]);

  const handleTouchStart = () => {
    if (currentCameraState === 'lente') {
      setCurrentCameraState('flash');
    } else if (currentCameraState === 'flash') {
      setCurrentCameraState('turned');
    } else if (currentCameraState === 'turned') {
      setCurrentCameraState('open');
    } else if (currentCameraState === 'open') {
      setCurrentCameraState('closed'); // Regresar al estado original
    } else if (currentCameraState === 'rollo') {
      setCurrentCameraState('flash'); // Cerrar la cámara y volver al estado inicial
    } else {
      setCurrentCameraState('flash');
    }
  };

  let cameraImage;
  let dropZones;
  switch (currentCameraState) {
    case 'flash':
      cameraImage = srcFlash;
      dropZones = (
        <>
          <DropZone id="flash-drop" onDrop={onDrop} style={{ top: '10px', left: '154px', width: '80px', height: '80px' }} />
          <DropZone id="lente-drop" onDrop={onDrop} style={{ top: '170px', left: '155px', width: '80px', height: '80px' }} />
        </>
      );
      break;
    case 'lente':
      cameraImage = srcLente;
      dropZones = (
        <>
          <DropZone id="lente-drop" onDrop={onDrop} style={{ top: '170px', left: '155px', width: '80px', height: '80px' }} />
          <DropZone id="flash-drop" onDrop={onDrop} style={{ top: '10px', left: '154px', width: '80px', height: '80px' }} />
        </>
      );
      break;
    case 'turned':
      cameraImage = srcTurned;
      dropZones = (
        <DropZone id="rollo-drop" onDrop={onDrop} style={{ top: '161px', left: '14px', width: '193px', height: '60px' }} />
      );
      break;
    case 'open':
      cameraImage = srcOpen;
      dropZones = (
        <DropZone id="rollo-drop" onDrop={onDrop} style={{ top: '161px', left: '14px', width: '193px', height: '60px' }} />
      );
      break;
    case 'rollo':
      cameraImage = srcRollo;
      dropZones = null;
      break;
    default:
      cameraImage = srcClosed;
      dropZones = (
        <>
          <DropZone id="flash-drop" onDrop={onDrop} style={{ top: '10px', left: '154px', width: '80px', height: '80px' }} />
          <DropZone id="lente-drop" onDrop={onDrop} style={{ top: '170px', left: '155px', width: '80px', height: '80px' }} />
        </>
      );
  }

  return (
    <div
      style={{
        position: 'relative',
        touchAction: 'none',
      }}
      onTouchStart={handleTouchStart}
    >
      <img
        src={cameraImage}
        alt="camera"
        style={{
          width: '365px',
          height: '360px',
          transition: 'transform 0.2s ease',
        }}
      />
      {dropZones}
    </div>
  );
};

export default DraggableCamera;





