import React, { useState, useEffect } from 'react';
import AvisoComponente from '../../components/Aviso/AvisoComponente';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import { useNavigate } from "react-router-dom";
import TicketImage from './assets/Ticket.png'; 
import './Start.css';
import filmy from "./assets/BienvenidaNoDialogo.gif"

const Start = () => {
  const [mostrarAviso, setMostrarAviso] = useState(window.innerWidth > 414);
  const [mostrarCarga, setMostrarCarga] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setMostrarAviso(window.innerWidth > 404);
    };

    const temporizadorCarga = setTimeout(() => {
      setMostrarCarga(false);
    }, 1000);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(temporizadorCarga);
    };
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/objeto");
  };

  return (
    <div>
      {mostrarCarga && <LoadingAnimation />}
      {!mostrarCarga && mostrarAviso && <AvisoComponente />}
      {!mostrarCarga && !mostrarAviso && (
        <div className="contenido-principal">
          <div className="bottom-container">
            <div className="image-overlay-container" onClick={handleButtonClick}>
              <img src={TicketImage} alt="Ticket" className="ticket-image" />
              <div className="text-overlay">
                <p className="overlay-text">¡Hola soy Filmy!</p>
                <p className="overlay-text">¡Te doy la bienvenida a una parte del museo Caliwood!</p>
                <p className="overlay-text">Acompáñame en este recorrido y prepárate para una sorpresa final.</p>
                <p className="overlay-text">Recuerda ponerte tus audífonos para una mejor experiencia.</p>
              </div>
              <div className='filmyy'>
                <img src={filmy} alt="Filmy" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Start;
