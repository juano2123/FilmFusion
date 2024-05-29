import React, { useRef, useEffect } from 'react';
import { useDragAndDropContext } from '../Draggable/DragAndDropContext'; // Importa el contexto

const DropZone = ({ id, onDrop, children, style }) => {
  const { draggedId, setActiveDropZone, setDraggedId } = useDragAndDropContext();
  const dropZoneRef = useRef(null);

  useEffect(() => {
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const rect = dropZoneRef.current.getBoundingClientRect();
      if (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      ) {
        setActiveDropZone(id);
      }
    };

    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [id, setActiveDropZone]);

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(`DropZone ID: ${id} - Dropped ID: ${draggedId}`);
    if (draggedId !== null) {
      onDrop(draggedId, id);
    }
    setDraggedId(null);
    setActiveDropZone(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      ref={dropZoneRef}
      data-dropzone-id={id}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        border: '2px dashed #000',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default DropZone;