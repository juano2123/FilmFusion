import React, { useState, useEffect } from 'react';
import AvisoComponente from '../../components/Aviso/AvisoComponente';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import CustomButton from '../../components/CustomButton/CustomButton';
import MapIcon from '../../components/CustomButton/assets/map.svg';
import AudioControls from '../../components/AudioControls/AudioControls';
import audioFile from './assets/audio1.mp3'; // Correct this path as needed
import SquareWithContent from '../../components/SquareWithContent/SquareWithContent';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import { useNavigate } from "react-router-dom";
import audioFile1 from './assets/audio2.mp3'; // Correct this path as needed
import TicketImage from './assets/Ticket.png'; 
import './Start.css';

const Start = () => {
  const [mostrarAviso, setMostrarAviso] = useState(window.innerWidth > 414);
  const [mostrarCarga, setMostrarCarga] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setMostrarAviso(window.innerWidth > 414);
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
      <div className="contenido-principal" onClick={handleButtonClick}>
      <div className="bottom-container">
        <div className="image-overlay-container">
          <img src={TicketImage} alt="Ticket" className="ticket-image"/>
          <div className="text-overlay">
            <p className="overlay-text">Hola soy Filmy!</p>
            <p className="overlay-text">Te doy la bienvenida a una parte del museo Caliwood!</p>
            <p className="overlay-text">Acompáñame en este recorrido y prepárate para una sorpresa final.</p>
            <p className="overlay-text">Recuerda ponerte tus audífonos para una mejor experiencia.</p>
          </div>
        </div>
        <AudioControls audioSrc={audioFile1} />
      </div>
    </div>
    
    
    )}
  </div>
  
  );
};

export default Start;
