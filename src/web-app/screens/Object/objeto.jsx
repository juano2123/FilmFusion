import React, { useEffect, useState } from "react";
import "./objeto.css"; // Asegúrate de que el archivo de estilos existe
import BarAr from "../../components/BarAr/BarAr.jsx";
import AudioControls from "../../components/AudioControls/AudioControls";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import AvisoAR from "../../components/AvisoAR/AvisoAR.jsx"; // Asegúrate de importar correctamente
import { useSelector } from "react-redux";
import { obtenerImgs } from "../../firebase/config.js";
import ObjCaliwood from "../../components/obj/obj.jsx";
import filmy from "./assets/BienvenidaNoDialog.gif";
import DIALOGOPENTAX from "./assets/Diálogo4.png";
import DIALOGOPROYECTOR from "./assets/Diálogo8PROYECTOR.png"
import DIALOGOLINTERNA from "./assets/Diálogo12LITERNA.png";

const ObjetoPage = () => {
  const navigate = useNavigate();
  const [showAviso, setShowAviso] = useState(false); // Estado para controlar la visibilidad del aviso
  const [showElements, setShowElements] = useState(true); // Estado para controlar la visibilidad de los elementos filmyy y DIALOGOPENTAX
  const id = useSelector((state) => state.id.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(false);
    }, 4000); // 2000 ms = 2 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  const handleButtonClick = () => {
    navigate("/galeria");
  };

  const handleOpenAviso = () => {
    setShowAviso(true);
  };

  // Función para cerrar el aviso
  const handleCloseAviso = () => {
    setShowAviso(false);
  };

  return (
    <div className="objeto-container">
      <div className="objet-container">
        <BarAr />
      </div>
      <div className="galeria">{/* <Showgalery/> */}</div>
      <div className="obj-3D">
        {id === "camara" ? (
          <ObjCaliwood url="https://prod.spline.design/iuSlbKi3OIGVXd6S/scene.splinecode" />
        ) : id === "proyector" ? (
          <ObjCaliwood url="https://prod.spline.design/xitGTluBxvkmAKAX/scene.splinecode" />
        ) : (
          <ObjCaliwood url="linterena" />
        )}
        {showAviso && <AvisoAR onClose={handleCloseAviso} />}{" "}
        {/* Componente de aviso que se muestra según el estado */}
      </div>
      {showElements ? (
        <>
          <div>
            {id === "camara" ? (
              <>
                <img src={filmy} alt="" className="fillm"/>
                <img className="dialogo" src={DIALOGOPENTAX} alt="" />
              </>
            ) : id === "proyector" ? (
              <>
                <img src={filmy} alt="" className="fillm"/>
                <img className="dialogo" src={DIALOGOPROYECTOR} alt="" />
              </>
            ) : (
              <>
                <img src={filmy} alt="" className="fillm"/>
                <img className="dialogo" src={DIALOGOLINTERNA} alt="" />
              </>
            )}
          </div>
          
        </>
      ) : (
        <div className="boton_objs">
          <CustomButton
            onClick={handleButtonClick}
            text="Descubre los archivos únicos creados por este objeto. Haz clic para avanzar."
            color="grey"
            size="large"
            fontSize="medium"
            fontFamily="sans-serif"
            outline="0px solid black"
          />
        </div>
      )}

      <div className="audio_obj">
        <AudioControls />
      </div>
    </div>
  );
};

export default ObjetoPage;
