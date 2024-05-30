import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Gallery.css'; // Asegúrate de que el archivo CSS para los estilos existe

// Importación de imágenes
import Foto1 from "./assets/Foto1.png";
import Foto2 from "./assets/Foto2.png";
import Foto3 from "./assets/Foto3.png";
import Foto4 from "./assets/Foto4.png";
import Foto5 from "./assets/Foto5.png";
import Foto6 from "./assets/Foto6.png";
import Foto7 from "./assets/Foto7.png";
import Foto8 from "./assets/Foto8.png";
import Foto9 from "./assets/Foto9.png";

const Gallery = () => {
  const navigate = useNavigate();
  const objectType = useSelector(state => state.id.value); // 'camara', 'linterna', o 'proyector'

  // Mapeo de imágenes por tipo de objeto
  const imagesByType = {
    camara: [
      { id: 1, src: Foto1, alt: 'Foto de cámara 1' },
      { id: 2, src: Foto2, alt: 'Foto de cámara 2' },
      { id: 3, src: Foto3, alt: 'Foto de cámara 3' }
    ],
    linterna: [
      { id: 4, src: Foto4, alt: 'Foto de linterna 1' },
      { id: 5, src: Foto5, alt: 'Foto de linterna 2' },
      { id: 6, src: Foto6, alt: 'Foto de linterna 3' }
    ],
    proyector: [
      { id: 7, src: Foto7, alt: 'Foto de proyector 1' },
      { id: 8, src: Foto8, alt: 'Foto de proyector 2' },
      { id: 9, src: Foto9, alt: 'Foto de proyector 3' }
    ]
  };

  // Función para manejar el clic en la imagen
  const handleImageClick = (url) => {
    navigate(url);
  };

  // Seleccionar imágenes basadas en el tipo de objeto
  const images = imagesByType[objectType] || [];

  return (
    <div className="gallery-container">
      <h3>Estos han sido mis mejores trabajos...</h3>
      <div className="gallery-images">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick("/galeria")}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

