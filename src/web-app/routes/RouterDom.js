import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Start from "../screens/Start/Start";
import ObjetoPage from "../screens/Object/objeto"; // Asegúrate de que la ruta de importación sea correcta
import GaleriaPage from "../screens/Galeria/galeria";
import GanarPage from "../screens/Ganar/ganar"
import PuzzlePage from "../screens/Puzzle/puzzle";
import PrizePage from "../screens/ReclamarPremio/reclamarPremio";


const RouterDom = () => {
  return (
    <Routes>
        {/* <Route path="/" element={<Start />} /> */}
      <Route path="/" element={<ObjetoPage />} /> {/* Nueva ruta agregada */}
      <Route path="/galeria" element={<GaleriaPage />} /> 
      <Route path="/ganar" element={<GanarPage />} /> 
      <Route path="/puzzle" element={<PuzzlePage />} /> 
      <Route path="/Start" element={<Start />} /> 

      {/* <Route path="/ganar" element={<GanarPage />} />  */}
      <Route path="/reclamarPremio" element={<PrizePage />} /> 
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RouterDom;


