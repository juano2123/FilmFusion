import React, { useState, useEffect } from "react";
import "./objeto.css";
import Ar from "../../components/AR/Ar.jsx";
import BarAr from "../../components/BarAr/BarAr.jsx";
import AudioControls from "../../components/AudioControls/AudioControls";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import AvisoAR from "../../components/AvisoAR/AvisoAR.jsx";

const ObjetoPage = () => {
  const navigate = useNavigate();
  const [showAviso, setShowAviso] = useState(false);
  const [isArSupported, setIsArSupported] = useState(false);

  useEffect(() => {
    const detectARCapabilities = async () => {
      const isWebXrSupported = 'xr' in navigator;
      const isIos = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

      if (isWebXrSupported) {
        try {
          const supported = await navigator.xr.isSessionSupported('immersive-ar');
          if (supported) {
            setIsArSupported(true);
          } else {
            setShowAviso(true);
          }
        } catch (error) {
          console.error('Error checking AR support:', error);
          setShowAviso(true);
        }
      } else if (isIos) {
        // Verificación específica para dispositivos iOS
        setIsArSupported(true); // Intentar usar aframe-ar en iOS
      } else {
        setShowAviso(true);
      }
    };

    detectARCapabilities();
  }, []);

  const handleButtonClick = () => {
    navigate("/galeria");
  };

  const handleCloseAviso = () => {
    setShowAviso(false);
  };

  return (
    <div className="objeto-container">
      <div className="objet-container">
        <BarAr />
      </div>
      <div className="galeria">
        {/* <Showgalery/> */}
      </div>
      <div className="obj-3D">
        {isArSupported ? (
          <Ar />
        ) : (
          showAviso && (
            <AvisoAR 
              onClose={handleCloseAviso} 
              message="¡Atención! Lamentamos informarte que la experiencia de realidad aumentada podría no estar disponible en tu dispositivo debido a limitaciones técnicas. Nos disculpamos por cualquier inconveniente y te agradecemos tu comprensión. El Equipo de Fusion Tec" 
            />
          )
        )}
      </div>
      <div className="audio_obj">
        <CustomButton
          onClick={handleButtonClick}
          text="Descubre los archivos únicos creados por este objeto. Haz clic para avanzar."
          color="grey"
          size="large"
          fontSize="medium"
          fontFamily="sans-serif"
          outline="0px solid black"
        />
        <AudioControls />
      </div>
    </div>
  );
};

export default ObjetoPage;

