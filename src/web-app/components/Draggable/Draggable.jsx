import React, { useRef, useState } from 'react';

const Draggable = ({ id, src, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setOriginalPosition({ x: touch.clientX, y: touch.clientY });
    setIsDragging(true);
    e.target.setAttribute('data-dragged-id', id); // Establecer el ID del elemento arrastrado como atributo de datos
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
    const draggedId = e.target.getAttribute('data-dragged-id');
    onDrop(draggedId, position);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={imgRef}
      style={{
        position: 'relative', // Cambiar a 'absolute' para permitir el movimiento fuera del contenedor
        left: position.x,
        top: position.y,
        cursor: 'pointer',
        touchAction: 'none',
        opacity: isDragging ? 0.5 : 1,
        width: '120px', // Ajustar para incluir padding y borde
        height: '120px', // Ajustar para incluir padding y borde
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
          width: '100px',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Draggable;

