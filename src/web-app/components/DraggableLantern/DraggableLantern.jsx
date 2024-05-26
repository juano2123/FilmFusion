import React, { useState, useEffect } from 'react';
import DropZone from '../DropZone/DropZone'; // Importa el componente DropZone

const DraggableLantern = ({ lanternState, srcSin, srcBulb, srcTop, srcFront, srcPlaca, onDrop }) => {
  const [currentLanternState, setCurrentLanternState] = useState(lanternState); // Estado actual de la linterna mágica
  const [flipped, setFlipped] = useState(false); // Estado para saber si la linterna está volteada

  useEffect(() => {
    setCurrentLanternState(lanternState);
  }, [lanternState]);

  const handleImageClick = () => {
    if (currentLanternState.hasBulb && currentLanternState.hasTop && !flipped) {
      setFlipped(true);
    }
  };

  let lanternImage;
  let dropZones;

  if (currentLanternState.hasBulb && currentLanternState.hasTop && currentLanternState.hasPlaca) {
    lanternImage = srcPlaca; // Imagen final de la linterna ensamblada
    dropZones = null;
  } else if (flipped) {
    lanternImage = srcFront; // Imagen de la linterna girada para agregar la placa
    dropZones = <DropZone id="placa-drop" onDrop={onDrop} style={{ top: '170px', left: '152px', width: '89px', height: '80px' }} />;
  } else if (currentLanternState.hasBulb && currentLanternState.hasTop) {
    lanternImage = srcTop; // Imagen de la linterna con el top añadido
    // dropZones = <DropZone id="placa-drop" onDrop={onDrop} style={{ top: '170px', left: '152px', width: '89px', height: '80px', border: '2px dotted #000' }} />;
  } else if (currentLanternState.hasBulb) {
    lanternImage = srcBulb; // Imagen de la linterna con el bulb añadido
    dropZones = <DropZone id="top-drop" onDrop={onDrop} style={{ top: '13px', left: '92px', width: '100px', height: '80px' }} />;
  } else {
    lanternImage = srcSin; // Imagen inicial de la linterna
    dropZones = <DropZone id="bulb-drop" onDrop={onDrop} style={{ top: '178px', left: '76px', width: '111px', height: '80px' }} />;
  }

  return (
    <div
      style={{
        position: 'relative',
        touchAction: 'none',
      }}
      onClick={handleImageClick}
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
