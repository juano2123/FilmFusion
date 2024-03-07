import React, { useState, useEffect } from 'react';
import AvisoComponente from './shared/components/Aviso/AvisoComponente';
import LoadingAnimation from './shared/components/LoadingAnimation/LoadingAnimation';
import './Start.css';
// import CustomButton from './shared/components/CustomButton/CustomButton';

const Start = () => {
  const [mostrarAviso, setMostrarAviso] = useState(window.innerWidth > 414);
  const [mostrarCarga, setMostrarCarga] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setMostrarAviso(window.innerWidth > 414);
    };

    const temporizadorCarga = setTimeout(() => {
      setMostrarCarga(false);
    }, 5000);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(temporizadorCarga);
    };
  }, []);

  return (
    <div>
      {mostrarCarga && <LoadingAnimation />}
      
      {!mostrarCarga && mostrarAviso && <AvisoComponente />}
      
      {!mostrarCarga && !mostrarAviso && (
        <div className="contenido-principal">
          
        {/* <CustomButton text="¿Y si me armas?" color="white" size="small" fontSize="medium" fontFamily outline="2px solid black"/> */}
        </div>
      )}
    </div>
  );
};

export default Start;

