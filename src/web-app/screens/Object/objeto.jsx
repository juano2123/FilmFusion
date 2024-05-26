import React, { useEffect, useState } from "react";
import "./objeto.css"; // Asegúrate de que el archivo de estilos existe
import BarAr from "../../components/BarAr/BarAr.jsx";
import AudioControls from "../../components/AudioControls/AudioControls";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import AvisoAR from "../../components/AvisoAR/AvisoAR.jsx"; // Asegúrate de importar correctamente
import { useSelector } from "react-redux";
import { obtenerImgs } from "../../firebase/config.js";
import ObjCaliwood  from "../../components/obj/obj.jsx"
import filmy from "./assets/BienvenidaNoDialog.gif"
const ObjetoPage = () => {
  const navigate = useNavigate();
  const [showAviso, setShowAviso] = useState(false); // Estado para controlar la visibilidad del aviso
  const id = useSelector((state) => state.id.value);
  // const [datos, setDatos] = useState(null);
  // const [error, setError] = useState(null);

  const handleButtonClick = () => {
    navigate("/galeria");
  };
  
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
        <BarAr />
      </div>
      <div className="galeria">{/* <Showgalery/> */}</div>
      <div className="obj-3D">
        {id === "camara" ? (
          <ObjCaliwood  url="https://prod.spline.design/A54V1b46TZqJnXQJ/scene.splinecode" />
        ) : id === "proyector" ? (
          <ObjCaliwood  url="https://prod.spline.design/xitGTluBxvkmAKAX/scene.splinecode" />
        ) : (
          <ObjCaliwood  url="linterena" />
        )}
        {showAviso && <AvisoAR onClose={handleCloseAviso} />}{" "}
        {/* Componente de aviso que se muestra según el estado */}
      </div>
      <div className='filmyy'>
        <img src={filmy} alt=""/>
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
        <AudioControls></AudioControls>
      </div>
    </div>
  );
};

export default ObjetoPage;
