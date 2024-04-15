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

  const handleButtonClickOtro = () => {
    navigate("/galeria");
  };

  return (
    <div>
      {mostrarCarga && <LoadingAnimation />}
      
      {!mostrarCarga && mostrarAviso && <AvisoComponente />}
      
      {!mostrarCarga && !mostrarAviso && (
        <div className="contenido-principal">
       
          <AudioControls audioSrc={audioFile1} />


      <CustomButton 
       onClick={handleButtonClick}
      text="RECLAMA TU PREMIO"
       color="white" size="large"
       fontSize="medium" fontFamily
        outline="2px solid black"
        imageUrl={MapIcon} /> 
        <div className="componente">

        <SquareWithContent size="large" color="rgba(19, 6, 35, 0.71)" text1="¡FELICIDADES!" text2="¡Has armado el rompecabezas! Comparte tu experiencia en:" />
        
           <CustomButton
                onClick={handleButtonClickOtro}
           text="¿Y si me armas?"
       color="white" size="small"
       fontSize="medium" fontFamily
        outline="2px solid black"/>

        <SocialMediaIcons/>

        </div>
        </div>
        
      )}

    </div>
  );
};

export default Start;
