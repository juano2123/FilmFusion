import React, { useRef } from 'react';

const DropZone = ({ id, onDrop, children }) => {
  const dropZoneRef = useRef(null);

  const handleDrop = (itemId, position) => {
    const dropZone = dropZoneRef.current.getBoundingClientRect();
    const isInDropZone =
      position.x >= dropZone.left &&
      position.x <= dropZone.right &&
      position.y >= dropZone.top &&
      position.y <= dropZone.bottom;

    if (isInDropZone) {
      onDrop(itemId, id);
    }
  };

  return (
    <div
      ref={dropZoneRef}
      className="dropzone"
      style={{ border: '2px dashed #ccc', width: '100px', height: '100px', position: 'absolute' }}
    >
      {children}
    </div>
  );
};

export default DropZone;

