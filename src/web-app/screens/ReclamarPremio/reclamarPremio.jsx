import React, { useState, useEffect, useRef } from "react";
import "./reclamarPremio.css"; // Asegúrate de tener este archivo CSS
import backgroundImage from "./assets/Group 30.png"; // Cambia la ruta a tu imagen de fondo
import prizeImage from "./assets/Mapa.png"; // Cambia la ruta a tu imagen del premio
import Descargar from "./assets/Descargar.svg";
import { guardarNumero } from "../../firebase/config";
import { saveAs } from "file-saver";
import html2canvas from 'html2canvas';

function PrizeScreen() {
  const [prizeCode, setPrizeCode] = useState("");
  const componentRef = useRef(null);

  useEffect(() => {
    const newPrizeCode = Math.floor(1000 + Math.random() * 9000).toString();
    setPrizeCode(newPrizeCode);
    guardarNumero("/premios", newPrizeCode); // Guarda el código en la base de datos
  }, []);

  const handleSaveScreenshot = () => {
    const element = componentRef.current;
    if (element) {
      html2canvas(element).then((canvas) => {
        canvas.toBlob((blob) => {
          saveAs(blob, 'screenshot.png');
        });
      }).catch((error) => {
        console.error('Error al capturar la pantalla:', error);
      });
    } else {
      console.error('El elemento no se encontró');
    }
  };

  return (
    <div ref={componentRef} className="prize-screen">
      <div className="overlay">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="popup">
        <img src={prizeImage} alt="Caliwood Prize" />
        <p>
          Felicidades, es hora de reclamar el 25% de descuento en tu próxima
          visita al museo Caliwood. No olvides guardar la imagen de esta
          pantalla con el botón de abajo.
        </p>
        <h2># {prizeCode}</h2>
        <button onClick={handleSaveScreenshot} className="download-button">
          <img src={Descargar} alt="Descargar" />
        </button>
      </div>
    </div>
  );
}

export default PrizeScreen;
