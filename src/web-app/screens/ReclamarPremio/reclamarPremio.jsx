import React, { useState, useEffect } from 'react';
import './reclamarPremio.css';  // Asegúrate de tener este archivo CSS
import backgroundImage from './assets/Group 30.png'; // Cambia la ruta a tu imagen de fondo
import prizeImage from './assets/Mapa.png';  // Cambia la ruta a tu imagen del premio
import Descargar from './assets/Descargar.svg';

function PrizeScreen() {
  const [prizeCode, setPrizeCode] = useState('');

  useEffect(() => {
    setPrizeCode(Math.floor(1000 + Math.random() * 9000).toString());
  }, []);

  const handleDownloadClick = () => {
    console.log("Descargar la imagen o información del premio");
  };

  return (
    <div className="prize-screen" >
      <div className="overlay"> <img src={backgroundImage} alt="" /></div>
      <div className="popup">
        <img src={prizeImage} alt="Caliwood Prize" />
        <p>Felicidades es hora de reclamar el 25% de descuento en tu próxima visita al museo Caliwood, no olvides guardar la imagen de esta pantalla en el botón de abajo.</p>
        <h2># {prizeCode}</h2>
        <button onClick={handleDownloadClick} className="download-button">
          <img src={Descargar} alt="Descargar" />
        </button>
      </div>
    </div>
  );
}

export default PrizeScreen;

