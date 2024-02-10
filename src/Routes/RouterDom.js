import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Start from "../page/Start/Start"; 

const RouterDom = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} /> 
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RouterDom;

