import React from 'react';

const DropZone = ({ id, onDrop, children, style }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData('text');
    onDrop(draggedId, id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ position: 'absolute', ...style }}
    >
      {children}
    </div>
  );
};

export default DropZone;
