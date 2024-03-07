import React, { useState, useEffect } from 'react';
import AvisoComponente from './shared/components/Aviso/AvisoComponente';
import LoadingAnimation from './shared/components/LoadingAnimation/LoadingAnimation';
import CustomButton from './shared/components/CustomButton/CustomButton';
import AudioControls from './shared/components/AudioControls/AudioControls'; // Asegúrate que la ruta es correcta
import './Start.css';

const Start = () => {
  const [mostrarAviso, setMostrarAviso] = useState(window.innerWidth > 414);
  const [mostrarCarga, setMostrarCarga] = useState(true);
  const [playing, setPlaying] = useState(false); // Añadido para control de reproducción

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

  // Manejadores para los controles de audio
  const togglePlayPause = () => {
    setPlaying(!playing);
    // Aquí iría la lógica para reproducir o pausar el audio real
  };

  const handleBackward = () => {
    // Placeholder para la lógica de retroceso
    console.log('Retrocediendo...');
  };

  const handleForward = () => {
    // Placeholder para la lógica de avance
    console.log('Avanzando...');
  };

  return (
    <div>
       
      {mostrarCarga && <LoadingAnimation />}
      
      {!mostrarCarga && mostrarAviso && <AvisoComponente />}
      
      {!mostrarCarga && !mostrarAviso && (
        <div className="contenido-principal">

        <CustomButton text="¿Y si me armas?"
         color="white" size="small"
         fontSize="medium" fontFamily
          outline="2px solid black"/>

          {/* <AudioControls
            onPlayPauseClick={togglePlayPause}
            playing={playing}
            onBackwardClick={handleBackward}
            onForwardClick={handleForward}
          /> */}
        </div>
      )}
    </div>
  );
};

export default Start;
