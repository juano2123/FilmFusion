import React, { useState, useEffect } from "react";
import AvisoComponente from "./shared/components/Aviso/AvisoComponente";
import LoadingAnimation from "./shared/components/LoadingAnimation/LoadingAnimation";
import "./Start.css";
import BarAr from "../../shared/components/barAr/BarAr";

const Start = () => {
  const [mostrarAviso, setMostrarAviso] = useState(window.innerWidth > 414);
  const [mostrarCarga, setMostrarCarga] = useState(true); // Estado para el componente de carga

  useEffect(() => {
    const handleResize = () => {
      setMostrarAviso(window.innerWidth > 414);
    };

    // Temporizador para ocultar el componente de carga después de 5 segundos
    const temporizadorCarga = setTimeout(() => {
      setMostrarCarga(false); // Oculta el componente de carga
    }, 5000); // 5000 milisegundos = 5 segundos

    window.addEventListener("resize", handleResize);

    // Limpieza: remover el event listener y limpiar el temporizador
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(temporizadorCarga);
    };
  }, []);

  return (
    <div>
      {/* Muestra el componente de carga si mostrarCarga es true */}
      {mostrarCarga && <LoadingAnimation />}

      {/* Si no se está mostrando la carga, decide si mostrar el aviso basado en el ancho de la pantalla */}
      {!mostrarCarga && mostrarAviso && <AvisoComponente />}

      {/* Si no se muestra la carga y el ancho de la pantalla es adecuado, muestra el contenido principal */}
      {!mostrarCarga && !mostrarAviso && (
        <div>
          <BarAr></BarAr>
        </div>
      )}
    </div>
  );
};

export default Start;
