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
    onDrop(id, position);
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
        width: '120px', // Adjusted to include padding and border
        height: '120px', // Adjusted to include padding and border
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // border: '2px solid #ccc',
        // borderRadius: '10px',
        // backgroundColor: '#f9f9f9',
        // padding: '5px'
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
        }}
      />
    </div>
  );
};

export default Draggable;
