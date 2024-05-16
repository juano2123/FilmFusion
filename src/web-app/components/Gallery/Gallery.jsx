import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css'; // Importa el archivo CSS para los estilos
import Foto1 from "./assets/Foto1.png";
import Foto2 from "./assets/Foto2.png";
import Foto3 from "./assets/Foto3.png";

const Gallery = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/galeria");
  };

  const images = [
    { id: 1, src: Foto1, alt: 'Image 1' },
    { id: 2, src: Foto2, alt: 'Image 2' },
    { id: 3, src: Foto3, alt: 'Image 3' },
  ];

  return (
    <div className="gallery-container">
      <h3>Estos han sido mis mejores trabajos...</h3>
      <div className="gallery-images">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={handleImageClick}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
