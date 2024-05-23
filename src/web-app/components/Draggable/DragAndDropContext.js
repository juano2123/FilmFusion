import React, { createContext, useContext, useState } from 'react';

// Crear un Contexto para compartir el estado draggedId y activeDropZone
const DragAndDropContext = createContext();

export const useDragAndDropContext = () => useContext(DragAndDropContext);

export const DragAndDropProvider = ({ children }) => {
  const [draggedId, setDraggedId] = useState(null);
  const [activeDropZone, setActiveDropZone] = useState(null); // Estado para la zona de drop activa

  return (
    <DragAndDropContext.Provider value={{ draggedId, setDraggedId, activeDropZone, setActiveDropZone }}>
      {children}
    </DragAndDropContext.Provider>
  );
};





