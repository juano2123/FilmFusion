// AvisoComponente.js
import React from 'react';

const AvisoComponente = () => {
  return (
    <div style={{
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      backgroundColor: 'rgba(0,0,0,0.75)', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column',
      zIndex: 1000, // Asegúrate de que esto sea más alto que otros elementos
    }}>
      <p>Este sitio está optimizado para dispositivos móviles.</p>
      <p>Por favor, accede desde un dispositivo con una pantalla más pequeña.</p>
    </div>
  );
};

export default AvisoComponente;
