import React, { useState, useEffect } from 'react';
import './reclamarPremio.css';  // Asegúrate de tener este archivo CSS
import backgroundImage from './assets/Group 30.png'; // Cambia la ruta a tu imagen de fondo
import prizeImage from './assets/Mapa.png';  // Cambia la ruta a tu imagen del premio
import Descargar from './assets/Descargar.svg';
import { guardarNumero } from '../../firebase/config';
import AudioControls from "../../components/AudioControls/AudioControls";
import { useSelector } from "react-redux";

// Importa los archivos de audio para cada objeto
import AudioCamara from "./assets/audios/Descuentocamara.mp3";
import AudioProyector from "./assets/audios/Descuentoproyector.mp3";
import AudioLinterna from "./assets/audios/Descuentolinterna.mp3";

function PrizeScreen() {
  const [prizeCode, setPrizeCode] = useState('');
  const id = useSelector((state) => state.id.value);

  useEffect(() => {
    const newPrizeCode = Math.floor(1000 + Math.random() * 9000).toString();
    setPrizeCode(newPrizeCode);
    guardarNumero('/premios', newPrizeCode); // Guarda el código en la base de datos
  }, []);

  const handleDownloadClick = () => {
    console.log("Descargar la imagen o información del premio");
  };

  const getAudioSrc = () => {
    switch (id) {
      case "camara":
        return AudioCamara;
      case "proyector":
        return AudioProyector;
      case "linterna":
        return AudioLinterna;
      default:
        return null;
    }
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
      <AudioControls audioSrc={getAudioSrc()} />
    </div>
  );
}

export default PrizeScreen;


