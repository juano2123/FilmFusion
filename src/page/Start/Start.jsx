import React, { useState, useEffect } from 'react';
import AvisoComponente from './shared/components/Aviso/AvisoComponente';
import LoadingAnimation from './shared/components/LoadingAnimation/LoadingAnimation';
import CustomButton from './shared/components/CustomButton/CustomButton';
import MapIcon from './shared/components/CustomButton/assets/map.svg';
import AudioControls from './shared/components/AudioControls/AudioControls'; // Asegúrate que la ruta es correcta
import audioFile from './assets/audio1.mp3'; // Asegura la ruta correcta al archivo de audio
import SquareWithContent from './shared/components/SquareWithContent/SquareWithContent';
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
    }, 5000);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(temporizadorCarga);
    };
  }, []);

  return (
    <div>
      {mostrarCarga && <LoadingAnimation />}
      
      {!mostrarCarga && mostrarAviso && <AvisoComponente />}
      
      {!mostrarCarga && !mostrarAviso && (
        <div className="contenido-principal">
          {/* Aquí podrías incluir CustomButton si es necesario */}
          {/* <AudioControls audioSrc={audioFile} /> */}


      <CustomButton text="RECLAMA TU PREMIO"
       color="white" size="large"
       fontSize="medium" fontFamily
        outline="2px solid black"
        imageUrl={MapIcon} /> 
        <div className="componente">

        <SquareWithContent size="large" color="rgba(19, 6, 35, 0.71)" text1="¡FELICIDADES!" text2="¡Has armado el rompecabezas! Comparte tu experiencia en:" />
        
           <CustomButton text="¿Y si me armas?"
       color="white" size="small"
       fontSize="medium" fontFamily
        outline="2px solid black"/>
        </div>
        </div>
        
      )}

    </div>
  );
};

export default Start;
