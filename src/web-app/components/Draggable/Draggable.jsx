import React, { useRef, useState } from 'react';
import { useDragAndDropContext } from './DragAndDropContext'; // Importa el contexto

const Draggable = ({ id, src, onDrop }) => {
  const { setDraggedId, activeDropZone } = useDragAndDropContext();
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setOriginalPosition({ x: touch.clientX, y: touch.clientY });
    setIsDragging(true);
    setDraggedId(id);
    console.log(`TouchStart - Dragging ID: ${id}`);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const dx = touch.clientX - originalPosition.x;
    const dy = touch.clientY - originalPosition.y;

    setPosition({
      x: position.x + dx,
      y: position.y + dy,
    });

    setOriginalPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e) => {
    setIsDragging(false);
    console.log(`TouchEnd - Dropped ID: ${id}, DropZone ID: ${activeDropZone}`);
    if (activeDropZone !== null) {
      onDrop(id, activeDropZone);
    }
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={imgRef}
      style={{
        position: 'relative',
        left: position.x,
        top: position.y,
        cursor: 'pointer',
        touchAction: 'none',
        opacity: isDragging ? 0.5 : 1,
        width: '120px',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={src}
        alt={id}
        style={{
          // width: '100px',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Draggable;