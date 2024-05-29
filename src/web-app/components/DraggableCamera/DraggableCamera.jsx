import React, { useState, useEffect } from 'react';
import DropZone from '../DropZone/DropZone'; // Importa el componente DropZone

const DraggableCamera = ({ cameraState, srcClosed, srcFlash, srcLente, srcTurned, srcOpen, srcRollo, onDrop }) => {
  const [currentCameraState, setCurrentCameraState] = useState(cameraState); // Estado actual de la cámara

  useEffect(() => {
    setCurrentCameraState(cameraState);
  }, [cameraState]);

  const handleTouchStart = () => {
    if (currentCameraState.hasFlash && currentCameraState.hasLente && !currentCameraState.isTurned && !currentCameraState.isOpen) {
      setCurrentCameraState(prev => ({ ...prev, isTurned: true }));
    } else if (currentCameraState.isTurned && !currentCameraState.isOpen) {
      setCurrentCameraState(prev => ({ ...prev, isOpen: true }));
    } else if (currentCameraState.isOpen && currentCameraState.hasRollo) {
      setCurrentCameraState(prev => ({ ...prev, isClosed: false, isTurned: false, isOpen: false, hasRollo: false, hasFlash: true }));
    } else if (currentCameraState.isOpen && !currentCameraState.hasRollo) {
      setCurrentCameraState(prev => ({ ...prev, hasRollo: true }));
    } else if (currentCameraState.isTurned && currentCameraState.isOpen) {
      setCurrentCameraState(prev => ({ ...prev, isTurned: false, isOpen: false, hasRollo: true }));
    }
  };

  let cameraImage;
  let dropZones;

  if (currentCameraState.isClosed) {
    cameraImage = srcClosed;
    dropZones = (
      <>
        <DropZone id="lente-drop" onDrop={onDrop} style={{ top: '170px', left: '154px', width: '80px', height: '80px'}} />
      </>
    );
  } else if (currentCameraState.hasLente && !currentCameraState.hasFlash) {
    cameraImage = srcLente;
    dropZones = (
      <>
        <DropZone id="flash-drop" onDrop={onDrop} style={{ top: '8px', left: '160px', width: '80px', height: '80px' }} />
      </>
    );
  } else if (currentCameraState.hasFlash && currentCameraState.hasLente && !currentCameraState.isTurned) {
    cameraImage = srcFlash;
    dropZones = null;
  } else if (currentCameraState.isTurned && !currentCameraState.isOpen) {
    cameraImage = srcTurned;
    dropZones = null;
  } else if (currentCameraState.isOpen && !currentCameraState.hasRollo) {
    cameraImage = srcOpen;
    dropZones = <DropZone id="rollo-drop" onDrop={onDrop} style={{ top: '161px', left: '14px', width: '193px', height: '60px'}} />;
  } else if (currentCameraState.hasRollo) {
    cameraImage = srcRollo;
    dropZones = null;
  } else {
    cameraImage = srcClosed;
    dropZones = (
      <>
        <DropZone id="lente-drop" onDrop={onDrop} style={{ top: '170px', left: '154px', width: '80px', height: '80px' }} />
      </>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        touchAction: 'none',
      }}
      onClick={handleTouchStart} // Evento onClick para cambiar el estado
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
