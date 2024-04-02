import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {Ar} from "../page/Start/shared/components/AR/Ar"; 

const RouterDom = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Ar />} /> 
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RouterDom;

