<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./objeto.css"; // Asegúrate de que el archivo de estilos existe
=======
import React, { useState, useEffect } from "react";
import "./objeto.css";
>>>>>>> e5549d4197ee9acdfbaa950191ffea2a35e37cfa
import Ar from "../../components/AR/Ar.jsx";
import BarAr from "../../components/BarAr/BarAr.jsx";
import AudioControls from "../../components/AudioControls/AudioControls";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import AvisoAR from "../../components/AvisoAR/AvisoAR.jsx"; // Asegúrate de importar correctamente
import { useSelector } from "react-redux";
import { obtenerImgs } from "../../firebase/config.js";

const ObjetoPage = () => {
  const navigate = useNavigate();
  const [showAviso, setShowAviso] = useState(false); // Estado para controlar la visibilidad del aviso
  const id = useSelector((state) => state.id.value);
  // const [datos, setDatos] = useState(null);
  // const [error, setError] = useState(null);
=======
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
>>>>>>> e5549d4197ee9acdfbaa950191ffea2a35e37cfa

  const handleButtonClick = () => {
    navigate("/galeria");
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await obtenerImgs('camara');
  //       setDatos(data);

<<<<<<< HEAD
        
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // Función para abrir el aviso
  const handleOpenAviso = () => {
    setShowAviso(true);
  };

  // Función para cerrar el aviso
=======
>>>>>>> e5549d4197ee9acdfbaa950191ffea2a35e37cfa
  const handleCloseAviso = () => {
    setShowAviso(false);
  };

  return (
    <div className="objeto-container">
      <div className="objet-container">
        <BarAr />
      </div>
<<<<<<< HEAD
      <div className="galeria">{/* <Showgalery/> */}</div>
      <div className="obj-3D">
        {id === "camara" ? (
          <Ar url="https://prod.spline.design/A54V1b46TZqJnXQJ/scene.splinecode" />
        ) : id === "proyector" ? (
          <Ar url="https://prod.spline.design/xitGTluBxvkmAKAX/scene.splinecode" />
        ) : (
          <Ar url="linterena" />
        )}
        {showAviso && <AvisoAR onClose={handleCloseAviso} />}{" "}
        {/* Componente de aviso que se muestra según el estado */}
=======
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
>>>>>>> e5549d4197ee9acdfbaa950191ffea2a35e37cfa
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
<<<<<<< HEAD
        <AudioControls></AudioControls>
=======
        <AudioControls />
>>>>>>> e5549d4197ee9acdfbaa950191ffea2a35e37cfa
      </div>
      <p>{id}</p>
    </div>
  );
};

export default ObjetoPage;
