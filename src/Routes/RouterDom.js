import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Star from "../page/Start/Star"; 

const RouterDom = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Star />} /> 
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RouterDom;

