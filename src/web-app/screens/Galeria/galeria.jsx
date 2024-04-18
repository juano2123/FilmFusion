import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './galeria.css'; // Asegúrate de tener este archivo CSS
import obtenerImagenUrl from '../../firebase/config'; // Ajusta la ruta
import LeftArrow from './assets/left.svg';
import RightArrow from './assets/right.svg';

const GaleriaPage = () => {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    async function cargarImagenes() {
      try {
        const urls = await Promise.all([
          obtenerImagenUrl('pentax/Foto 1 - Cataras del Niagara.png'),
          obtenerImagenUrl('pentax/Foto 2 - Guitarra.png'),
          obtenerImagenUrl('pentax/Foto 3 - Girasoles.png')
        ]);
        setImagenes(urls.map((url, index) => ({
          src: url,
          descripcion: `Descripción ${index + 1}` // Puedes personalizar la descripción aquí
        })));
      } catch (error) {
        console.error("Error al cargar imágenes:", error);
      }
    }
    cargarImagenes();
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => cambiarImagen('siguiente'),
    onSwipedRight: () => cambiarImagen('anterior'),
  });

  const cambiarImagen = (direccion) => {
    if (direccion === 'siguiente') {
      setIndiceActivo((prevIndex) => (prevIndex + 1) % imagenes.length);
    } else {
      setIndiceActivo((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
    }
  };

  if (!imagenes.length) return <div>Cargando imágenes...</div>;

  return (
    <div className="galeria-container" {...handlers}>
      <button onClick={() => cambiarImagen('anterior')} aria-label="Anterior" className="navigation-button">
        <img src={LeftArrow} alt="Anterior" />
      </button>
      <div className="image-and-description">
        <img src={imagenes[indiceActivo].src} alt={`Imagen ${indiceActivo + 1}`} />
        <p className="descripcion">{imagenes[indiceActivo].descripcion}</p>
      </div>
      <button onClick={() => cambiarImagen('siguiente')} aria-label="Siguiente" className="navigation-button">
        <img src={RightArrow} alt="Siguiente" />
      </button>
    </div>
  );
};

export default GaleriaPage;
