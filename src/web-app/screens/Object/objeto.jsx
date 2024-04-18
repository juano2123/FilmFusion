import React from "react";
import "./objeto.css"; // Asegúrate de que el archivo de estilos existe
import Ar from "../../components/AR/Ar.jsx";
import BarAr from "../../components/BarAr/BarAr.jsx";
import AudioControls from "../../components/AudioControls/AudioControls";
import Showgalery from "../../components/ShowGalery/Showgalery.jsx";

const ObjetoPage = () => {
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
        <AudioControls></AudioControls>
      </div>
    </div>
  );
};

export default ObjetoPage;
