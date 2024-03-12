import React, { useState, useEffect } from 'react';
import AvisoComponente from './shared/components/Aviso/AvisoComponente';
import LoadingAnimation from './shared/components/LoadingAnimation/LoadingAnimation';
import CustomButton from './shared/components/CustomButton/CustomButton';
import AudioControls from './shared/components/AudioControls/AudioControls'; // Asegúrate que la ruta es correcta
import audioFile from './assets/audio1.mp3'; // Asegura la ruta correcta al archivo de audio
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
          <AudioControls audioSrc={audioFile} />
        </div>
      )}
    </div>
  );
};

export default Start;
