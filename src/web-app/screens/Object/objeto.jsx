import React from "react";
import "./objeto.css"; // Asegúrate de que el archivo de estilos existe
import Ar from "../../components/AR/Ar.jsx";
import BarAr from "../../components/BarAr/BarAr.jsx";
import AudioControls from "../../components/AudioControls/AudioControls";

const ObjetoPage = () => {
  return (
    <div className="objeto-container">
      <div className="objet-container ">
        <BarAr></BarAr>
      </div>
      <div className="">
        <Ar></Ar>
      </div>
      <div className="audio_obj">
        <AudioControls></AudioControls>
      </div>
    </div>
  );
};

export default ObjetoPage;
