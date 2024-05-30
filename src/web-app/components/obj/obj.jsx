import React from "react";
import Spline from '@splinetool/react-spline';

const ObjCaliwood = ({ url, width, height, translateX, translateY }) => {
  const transformStyle = `translate(${translateX}, ${translateY})`;

  return (
    <div className="obj" style={{
      position: 'fixed', 
      top: '50%', 
      left: '50%', 
      transform: transformStyle, // Usar la variable transformStyle para el traslado
      width: width,  // Usar la propiedad width pasada al componente
      height: height  // Usar la propiedad height pasada al componente
    }}>
      <Spline scene={url} />
    </div>
  );
};

export default ObjCaliwood;



