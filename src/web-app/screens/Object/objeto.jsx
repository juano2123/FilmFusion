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
import DIALOGOPROYECTOR from "./assets/Diálogo8PROYECTOR.png";
import DIALOGOLINTERNA from "./assets/Diálogo12LITERNA.png";
import arrow from "./assets/arrow.png";

import HistoriaCamara from "./assets/Historia-Cámara.mp3";
import HistoriaProyector from "./assets/Historia-proyector.mp3";
import HistoriaLinterna from "./assets/Historia-Linterna.mp3";

import filmyAr from "./assets/titulo.png";

const ObjetoPage = () => {
  const navigate = useNavigate();
  const [showAviso, setShowAviso] = useState(false);
  const [showElements, setShowElements] = useState(true);
  const [toggle, setToggle] = useState(false);
  const id = useSelector((state) => state.id.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    navigate("/galeria");
  };

  const handleOpenAviso = () => {
    setShowAviso(true);
  };

  const handleCloseAviso = () => {
    setShowAviso(false);
  };

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div className="objeto-container">
      <div className="objet-container">
        <BarAr toggle={toggle} onToggleChange={handleToggleChange} />
      </div>
      <div className="obj-3D">
        {id === "camara" ? (
          toggle ? (
            <div>
              <h2>¡Hola! Soy Filmy. La función de realidad aumentada (AR) no está funcionando en este momento, pero estamos trabajando para arreglarla pronto. ¡Gracias por su paciencia! Atentamente, Filmy</h2>
              <img src={filmyAr} alt="Filmy"/>
            </div>
          ) : (
            <>
              <ObjCaliwood url="https://prod.spline.design/iuSlbKi3OIGVXd6S/scene.splinecode" width="440vw" height="50vh" translateX="-50%" translateY="-50%" />
              <img className="instruccion" src={arrow} alt="Instrucción" />
            </>
          )
        ) : id === "proyector" ? (
          toggle ? (
            <div>
              <h2>¡Hola! Soy Filmy. La función de realidad aumentada (AR) no está funcionando en este momento, pero estamos trabajando para arreglarla pronto. ¡Gracias por su paciencia! Atentamente, Filmy</h2>
              <img src={filmyAr} alt="Filmy"/>
            </div>
          ) : (
            <>
              <ObjCaliwood url="https://prod.spline.design/xitGTluBxvkmAKAX/scene.splinecode" width="440vw" height="50vh" translateX="-50%" translateY="-50%" />
              <img className="instruccion" src={arrow} alt="Instrucción" />
            </>
          )
        ) : toggle ? (
          <div>
            <h2>¡Hola! Soy Filmy. La función de realidad aumentada (AR) no está funcionando en este momento, pero estamos trabajando para arreglarla pronto. ¡Gracias por su paciencia! Atentamente, Filmy</h2>
            <img src={filmyAr} alt="Filmy"/>
          </div>
        ) : (
          <>
            <ObjCaliwood url="https://prod.spline.design/A-uJqBLvPXFAG3ze/scene.splinecode" width="440vw" height="50vh" translateX="-43%" translateY="-73%" />
            <img className="instruccion" src={arrow} alt="Instrucción" />
          </>
        )}
        {showAviso && <AvisoAR onClose={handleCloseAviso} />}
      </div>
      {showElements ? (
        <>
          <div>
            {id === "camara" ? (
              <>
                <img src={filmy} alt="" className="fillm" />
                <img className="dialogo" src={DIALOGOPENTAX} alt="" />
              </>
            ) : id === "proyector" ? (
              <>
                <img src={filmy} alt="" className="fillm" />
                <img className="dialogo" src={DIALOGOPROYECTOR} alt="" />
              </>
            ) : (
              <>
                <img src={filmy} alt="" className="fillm" />
                <img className="dialogo" src={DIALOGOLINTERNA} alt="" />
              </>
            )}
          </div>
        </>
      ) : (
        !toggle && (
          <div className="boton_objs">
            <CustomButton onClick={handleButtonClick} text="Descubre los archivos únicos creados por este objeto. Haz clic para avanzar." color="grey" size="large" fontSize="medium" fontFamily="sans-serif" outline="0px solid black" />
          </div>
        )
      )}
      <div className="audio_obj">
        {id === "camara" && <AudioControls audioSrc={HistoriaCamara} />}
        {id === "proyector" && <AudioControls audioSrc={HistoriaProyector} />}
        {id === "linterna" && <AudioControls audioSrc={HistoriaLinterna} />}
      </div>
    </div>
  );
};

export default ObjetoPage;