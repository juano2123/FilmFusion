import React, { useState } from "react";
import "./objeto.css"; // Asegúrate de que el archivo de estilos existe
import Ar from "../../components/AR/Ar.jsx";
import BarAr from "../../components/BarAr/BarAr.jsx";
import AudioControls from "../../components/AudioControls/AudioControls";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import AvisoAR from "../../components/AvisoAR/AvisoAR.jsx"; // Asegúrate de importar correctamente
import { useSelector } from 'react-redux';

const ObjetoPage = () => {
  const navigate = useNavigate();
  const [showAviso, setShowAviso] = useState(false); // Estado para controlar la visibilidad del aviso
  const id = useSelector((state) => state.id.value);

console.log(id)
  const handleButtonClick = () => {
    navigate("/galeria");
  };

  // Función para abrir el aviso
  const handleOpenAviso = () => {
    setShowAviso(true);
  };

  // Función para cerrar el aviso
  const handleCloseAviso = () => {
    setShowAviso(false);
  };

  return (
    <div className="objeto-container">
      <div className="objet-container">
        <BarAr></BarAr>
      </div>
      <div className="galeria">
          {/* <Showgalery/> */}
      </div>
      <div className="obj-3D">
        <Ar></Ar>
        {showAviso && <AvisoAR onClose={handleCloseAviso} />} {/* Componente de aviso que se muestra según el estado */}
      </div>
      <div className="audio_obj">
        <CustomButton onClick={handleButtonClick} text="Descubre los archivos únicos creados por este objeto. Haz clic para avanzar." color="grey" size="large" fontSize="medium" fontFamily="sans-serif" outline="0px solid black"/>
        <AudioControls></AudioControls>
      </div>
      <p>{id}</p>
    </div>
  );
};

export default ObjetoPage;

