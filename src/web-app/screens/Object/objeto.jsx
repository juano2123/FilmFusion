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

import HistoriaCamara from "./assets/Historia-Cámara.mp3";
import HistoriaProyector from "./assets/Historia-proyector.mp3";
import HistoriaLinterna from "./assets/Historia-Linterna.mp3";

import filmyAr from "./assets/titulo.png";

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
              <h2>
                ¡Hola! Soy Filmy. La función de realidad aumentada (AR) no está
                funcionando en este momento, pero estamos trabajando para
                arreglarla pronto. ¡Gracias por su paciencia! Atentamente, Filmy
              </h2>
              <img src={filmyAr} alt=""/>
            </div>
          ) : (
            <ObjCaliwood url="https://prod.spline.design/iuSlbKi3OIGVXd6S/scene.splinecode" />
          )
        ) : id === "proyector" ? (
          toggle ? (
            <div>
              <h2>
                ¡Hola! Soy Filmy. La función de realidad aumentada (AR) no está
                funcionando en este momento, pero estamos trabajando para
                arreglarla pronto. ¡Gracias por su paciencia! Atentamente, Filmy
              </h2>
              <img src={filmyAr} alt=""/>

              {/* Aquí pued es agregar contenido específico para el proyector en AR */}
            </div>
          ) : (
            <ObjCaliwood url="https://prod.spline.design/xitGTluBxvkmAKAX/scene.splinecode" />
          )
        ) : toggle ? (
          <div>
            <h2>
              ¡Hola! Soy Filmy. La función de realidFad aumentada (AR) no está
              funcionando en este momento, pero estamos trabajando para
              arreglarla pronto. ¡Gracias por su paciencia! Atentamente, Filmy
            </h2>
            <img src={filmyAr} alt=""/>

            {/* Aquí puedes agregar contenido específico para la linterna en AR */}
          </div>
        ) : (
          <ObjCaliwood url="https://prod.spline.design/A-uJqBLvPXFAG3ze/scene.splinecode" />
        )}
        {showAviso && <AvisoAR onClose={handleCloseAviso} />}{" "}
        {/* Componente de aviso que se muestra según el estado */}
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
        {id === "camara" && <AudioControls audioSrc={HistoriaCamara} />}
        {id === "proyector" && <AudioControls audioSrc={HistoriaProyector} />}
        {id === "linterna" && <AudioControls audioSrc={HistoriaLinterna} />}
      </div>
    </div>
  );
};

export default ObjetoPage;
