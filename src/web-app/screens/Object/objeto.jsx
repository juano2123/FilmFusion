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
import arrow from "./assets/arrow.png";

import HistoriaCamara from "./assets/Historia-Cámara.mp3";
import HistoriaProyector from "./assets/Historia-proyector.mp3";
import HistoriaLinterna from "./assets/Historia-Linterna.mp3";

const ObjetoPage = () => {
  const navigate = useNavigate();
  const [showAviso, setShowAviso] = useState(false); // Estado para controlar la visibilidad del aviso
  const [showElements, setShowElements] = useState(true); // Estado para controlar la visibilidad de los elementos filmy y DIALOGOPENTAX
  const [toggle, setToggle] = useState(false); // Estado para manejar el toggle
  const id = useSelector((state) => state.id.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(false);
    }, 5000); // 5000 ms = 5 segundos

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

  // Función para manejar el cambio del toggle
  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div className="objeto-container">
      <div className="objet-container">
        <BarAr toggle={toggle} onToggleChange={handleToggleChange} />
      </div>
      <div className="galeria">{/* <Showgalery/> */}</div>
      <div className="obj-3D">
  {id === "camara" ? (
    toggle ? (
      <div>
        <h2>Contenido en Realidad Aumentada para Cámara</h2>
      </div>
    ) : (
      <div className="obj-3D-wrapper">
        <ObjCaliwood url="https://prod.spline.design/iuSlbKi3OIGVXd6S/scene.splinecode" />
        <img className="instruccion" src={arrow} alt="Instrucción" />
      </div>
    )
  ) : id === "proyector" ? (
    toggle ? (
      <div>
        <h2>Contenido en Realidad Aumentada para Proyector</h2>
      </div>
    ) : (
      <div className="obj-3D-wrapper">
        <ObjCaliwood url="https://prod.spline.design/xitGTluBxvkmAKAX/scene.splinecode" />
        <img className="instruccion" src={arrow} alt="Instrucción" />
      </div>
    )
  ) : (
    toggle ? (
      <div>
        <h2>Contenido en Realidad Aumentada para Linterna</h2>
      </div>
    ) : (
      <div className="obj-3D-wrapper">
        <ObjCaliwood url="https://prod.spline.design/A-uJqBLvPXFAG3ze/scene.splinecode" />
        <img className="instruccion" src={arrow} alt="Instrucción" />
      </div>
    )
  )}
  {showAviso && <AvisoAR onClose={handleCloseAviso} />}
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
        !toggle && ( // Condicional para mostrar el botón solo si el toggle está en "Objeto"
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
        )
      )}

      <div className="audio_obj">
         {id === "camara" && (
          <AudioControls audioSrc={HistoriaCamara} />
        )}
        {id === "proyector" && (
          <AudioControls audioSrc={HistoriaProyector} />
        )}
        {id === "linterna" && (
           <AudioControls audioSrc={HistoriaLinterna}/>
        )}
      </div>
    </div>
  );
};

export default ObjetoPage;