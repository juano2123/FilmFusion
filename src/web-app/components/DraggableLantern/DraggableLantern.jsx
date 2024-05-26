import React, { useState, useEffect } from 'react';
import DropZone from '../DropZone/DropZone'; // Importa el componente DropZone

const DraggableLantern = ({ lanternState, srcBulb, srcPlaca, srcTop, onDrop }) => {
  const [currentLanternState, setCurrentLanternState] = useState(lanternState); // Estado actual de la linterna mágica

  useEffect(() => {
    setCurrentLanternState(lanternState);
  }, [lanternState]);

  let lanternImage;
  let dropZones;
  if (currentLanternState.hasBulb && currentLanternState.hasPlaca && currentLanternState.hasTop) {
    lanternImage = null; // Imagen final de la linterna ensamblada
    dropZones = null;
  } else {
    lanternImage = srcBulb; // Imagen inicial de la linterna
    dropZones = (
      <>
        {!currentLanternState.hasBulb && <DropZone id="bulb-drop" onDrop={onDrop} style={{ top: '10px', left: '154px', width: '80px', height: '80px' }} />}
        {!currentLanternState.hasPlaca && <DropZone id="placa-drop" onDrop={onDrop} style={{ top: '100px', left: '154px', width: '80px', height: '80px' }} />}
        {!currentLanternState.hasTop && <DropZone id="top-drop" onDrop={onDrop} style={{ top: '190px', left: '154px', width: '80px', height: '80px' }} />}
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
        src={lanternImage}
        alt="lantern"
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

export default DraggableLantern;
