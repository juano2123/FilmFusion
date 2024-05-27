import React, { useState, useEffect } from 'react';
import DropZone from '../DropZone/DropZone'; // Importa el componente DropZone

const DraggableProjector = ({ projectorState, srcProyectorSin, srcProyectorrollo, srcProyectorside, srcProyectorLente, srcProyectorSinLampara, srcProyectorLampara, onDrop }) => {
  const [currentProjectorState, setCurrentProjectorState] = useState(projectorState); // Estado actual del proyector
  const [flipped, setFlipped] = useState(false); // Estado para saber si el proyector está volteado

  useEffect(() => {
    setCurrentProjectorState(projectorState);
  }, [projectorState]);

  const handleImageClick = () => {
    if (currentProjectorState.hasCinta && !currentProjectorState.hasLens && !flipped) {
      setFlipped(true);
    } else if (currentProjectorState.hasCinta && currentProjectorState.hasLens && !currentProjectorState.hasLuz && flipped) {
      setFlipped(false);
    } else if (currentProjectorState.hasCinta && currentProjectorState.hasLens && !currentProjectorState.hasLuz && !flipped) {
      setFlipped(true);
    }
  };

  let projectorImage;
  let dropZones;

  if (currentProjectorState.hasCinta && currentProjectorState.hasLens && currentProjectorState.hasLuz) {
    projectorImage = srcProyectorLampara; // Imagen final del proyector ensamblado
    dropZones = null;
  } else if (currentProjectorState.hasCinta && currentProjectorState.hasLens) {
    if (flipped) {
      projectorImage = srcProyectorSinLampara; // Imagen del proyector girado para agregar la luz
      dropZones = <DropZone id="luz-drop" onDrop={onDrop} style={{ top: '152px', left: '25px', width: '50px', height: '90px' }} />;
    } else {
      projectorImage = srcProyectorLente; // Imagen del proyector con el lente añadido, esperando girar para agregar la luz
      dropZones = null;
    }
  } else if (currentProjectorState.hasCinta) {
    if (flipped) {
      projectorImage = srcProyectorside; // Imagen del proyector girado para agregar el lente
      dropZones = <DropZone id="lens-drop" onDrop={onDrop} style={{ top: '160px', left: '156px', width: '50px', height: '50px' }} />;
    } else {
      projectorImage = srcProyectorrollo; // Imagen del proyector con la cinta añadida, esperando girar para agregar el lente
      dropZones = null;
    }
  } else {
    projectorImage = srcProyectorSin; // Imagen inicial del proyector
    dropZones = <DropZone id="cinta-drop" onDrop={onDrop} style={{ top: '31px', left: '241px', width: '110px', height: '220px' }} />;
  }

  return (
    <div
      style={{
        position: 'relative',
        touchAction: 'none',
      }}
      onClick={handleImageClick} // Evento onClick para cambiar el estado
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

