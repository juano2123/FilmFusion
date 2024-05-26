import React, { useState, useEffect } from 'react';
import DropZone from '../DropZone/DropZone'; // Importa el componente DropZone

const DraggableProjector = ({ projectorState, srcCinta, srcLente, srcLuz, onDrop }) => {
  const [currentProjectorState, setCurrentProjectorState] = useState(projectorState); // Estado actual del proyector

  useEffect(() => {
    setCurrentProjectorState(projectorState);
  }, [projectorState]);

  let projectorImage;
  let dropZones;
  if (currentProjectorState.hasCinta && currentProjectorState.hasLente && currentProjectorState.hasLuz) {
    projectorImage = null; // Imagen final del proyector ensamblado
    dropZones = null;
  } else {
    projectorImage = srcCinta; // Imagen inicial del proyector
    dropZones = (
      <>
        {!currentProjectorState.hasCinta && <DropZone id="cinta-drop" onDrop={onDrop} style={{ top: '10px', left: '154px', width: '80px', height: '80px' }} />}
        {!currentProjectorState.hasLente && <DropZone id="lente-drop" onDrop={onDrop} style={{ top: '100px', left: '154px', width: '80px', height: '80px' }} />}
        {!currentProjectorState.hasLuz && <DropZone id="luz-drop" onDrop={onDrop} style={{ top: '190px', left: '154px', width: '80px', height: '80px' }} />}
      </>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        touchAction: 'none',
      }}
    >
      <img
        src={projectorImage}
        alt="projector"
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

export default DraggableProjector;
