import React from "react";
import "./objeto.css"; // Asegúrate de que el archivo de estilos existe
import Ar from "../../components/AR/Ar.jsx";
import BarAr from "../../components/BarAr/BarAr.jsx";
import AudioControls from "../../components/AudioControls/AudioControls";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

const ObjetoPage = () => {

  const navigate = useNavigate();

const handleButtonClick = () => {
  navigate("/galeria");
};

  return (
    <div className="objeto-container">
      <div className="objet-container ">
        <BarAr></BarAr>
      </div>
      <div className="galeria">
          {/* <Showgalery/> */}
      </div>
      <div className="obj-3D">
        <Ar></Ar>
      </div>
      <div className="audio_obj">
      <CustomButton onClick={handleButtonClick} text="¿Y si me armas?" color="grey" size="small" fontSize="medium" fontFamily outline="0px solid black"/> 
        <AudioControls></AudioControls>
      </div>
    </div>
  );
};

export default ObjetoPage;
