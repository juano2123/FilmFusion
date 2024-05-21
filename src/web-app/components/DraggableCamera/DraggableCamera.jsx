import React, { useState } from 'react';

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

  const handleTouchEnd = (e) => {
    const draggedId = e.target.getAttribute('data-dragged-id'); // Obtener el ID del elemento arrastrado desde el atributo de datos
    onDrop(draggedId);
  };

  let cameraImage;
  switch (cameraState) {
    case 'turned':
      cameraImage = srcTurned;
      break;
    case 'open':
      cameraImage = srcOpen;
      break;
    default:
      cameraImage = srcClosed;
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '500px',
        height: '500px',
        touchAction: 'none',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={cameraImage}
        alt="camera"
        style={{
          width: '100%',
          height: '100%',
          transition: 'transform 0.2s ease',
        }}
      />
    </div>
  );
};

export default DraggableCamera;



