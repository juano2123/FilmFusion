import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './galeria.css'; // Asegúrate de que este archivo de estilos exista
import Foto1 from "./assets/Foto1.png";
import Foto2 from "./assets/Foto2.png";
import Foto3 from "./assets/Foto3.png";
import LeftArrow from './assets/left.svg';
import RightArrow from './assets/right.svg';

// Array de imágenes con descripciones
const imagenes = [
  { src: Foto1, descripcion: "Fotógrafo: gmushinsky, Año: 2019, Cámara: Pentax K1000" },
  { src: Foto2, descripcion: "Fotógrafo: fivedayforecast, Año: 2011, Cámara: Pentax K1000" },
  { src: Foto3, descripcion: "Fotógrafo: bravopires, Año: 2013, Cámara: Pentax K1000" }
];

const GaleriaPage = () => {
  const [indiceActivo, setIndiceActivo] = useState(0);

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

  return (
    <div className="galeria-container">
        <div {...handlers} className="imagen-container">
            <button onClick={() => cambiarImagen('anterior')} aria-label="Anterior">
                <img src={LeftArrow} alt="Anterior" />
            </button>
            <div className="image-and-description">
                <img src={imagenes[indiceActivo].src} alt={`Imagen ${indiceActivo + 1}`} />
                <div className="descripcion">{imagenes[indiceActivo].descripcion}</div>
            </div>
            <button onClick={() => cambiarImagen('siguiente')} aria-label="Siguiente">
                <img src={RightArrow} alt="Siguiente" />
            </button>
        </div>
    </div>
  );
};

export default GaleriaPage;