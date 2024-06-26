// src/web-app/routes/RouterDom.js
import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Start from "../screens/Start/Start";
import ObjetoPage from "../screens/Object/objeto"; // Asegúrate de que la ruta de importación sea correcta
import GaleriaPage from "../screens/Galeria/galeria";
import GanarPage from "../screens/Ganar/ganar";
import PuzzlePage from "../screens/Puzzle/puzzle";
import PrizePage from "../screens/ReclamarPremio/reclamarPremio";
import { setId } from "../redux/features/idSlice";
// import Ar from "../screens/Ar/Ar"

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const RouterDom = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = useQuery();
  const initialized = useSelector((state) => state.id.initialized);

  useEffect(() => {
    if (!initialized) {
      const newId = query.get('id');
      dispatch(setId(newId));
    }
  }, [location, dispatch, query, initialized]);

  return (
    <Routes>
      <Route path="/" element={<Start />} /> {/* Nueva ruta agregada */}
      <Route path="/galeria" element={<GaleriaPage />} /> 
      <Route path="/ganar" element={<GanarPage />} /> 
      <Route path="/puzzle" element={<PuzzlePage />} /> 
      <Route path="/objeto" element={<ObjetoPage />} /> 
      <Route path="/ganar" element={<GanarPage />} /> 
      <Route path="/reclamarPremio" element={<PrizePage />} /> 
      {/* <Route path="/Ar" element={<Ar />} />  */}

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RouterDom;
