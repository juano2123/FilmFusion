import React from "react";
import "./objeto.css"; // Asegúrate de que el archivo de estilos existe
import Ar from "../../components/AR/Ar.jsx";
import BarAr from "../../components/BarAr/BarAr.jsx";
const ObjetoPage = () => {
  return (
    <div className="objeto-container">
      <div className="objet-container ">
        <BarAr></BarAr>
      </div>
      <Ar></Ar>
    </div>
  );
};

export default ObjetoPage;
