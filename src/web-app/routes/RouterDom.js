import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Start from "../screens/Start/Start";
import ObjetoPage from "../screens/Object/objeto"; // Asegúrate de que la ruta de importación sea correcta
import GaleriaPage from "../screens/Galeria/galeria";
import GanarPage from "../screens/Ganar/ganar"

const RouterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/objeto" element={<ObjetoPage />} /> {/* Nueva ruta agregada */}
      <Route path="/galeria" element={<GaleriaPage />} /> 
      <Route path="/ganar" element={<GanarPage />} /> 
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RouterDom;


