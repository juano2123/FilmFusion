import React, { useState } from 'react';
import DropZone from '../DropZone/DropZone'; // Importa el componente DropZone

const DraggableCamera = ({ srcClosed, srcTurned, srcOpen, onDrop }) => {
  const [cameraState, setCameraState] = useState('closed'); // Estados posibles: 'closed', 'turned', 'open'

  const handleTouchStart = () => {
    if (cameraState === 'closed') {
      setCameraState('turned');
    } else if (cameraState === 'turned') {
      setCameraState('open');
    } else if (cameraState === 'open') {
      setCameraState('closed'); // Regresar al estado original
    }
  };

  let cameraImage;
  let dropZones;
  switch (cameraState) {
    case 'turned':
      cameraImage = srcTurned;
      dropZones = null; // Sin zonas de drop
      break;
    case 'open':
      cameraImage = srcOpen;
      dropZones = (
        <DropZone id="rollo-drop" onDrop={onDrop} style={{ top: '161px', left: '14px', width: '193px', height: '60px' }} />
      );
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



