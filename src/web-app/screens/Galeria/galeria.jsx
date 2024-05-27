import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./galeria.css"; // Asegúrate de tener este archivo CSS
import { obtenerImgs } from "../../firebase/config.js";
import LeftArrow from "./assets/left.svg";
import RightArrow from "./assets/right.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import butonback from "./assets/LeftCircleOutlined.svg";
import AudioControls from "../../components/AudioControls/AudioControls";
import { useNavigate } from "react-router-dom";
import filmy from "./assets/Sin título-1.svg";
import { useSelector } from "react-redux";

// Importa los archivos de audio para cada objeto
import HistoriaCamara1 from "./assets/audios/HistoriaCamara1.mp3";
import HistoriaCamara2 from "./assets/audios/HistoriaCamara2.mp3";
import HistoriaCamara3 from "./assets/audios/HistoriaCamara3.mp3";
import HistoriaProyector2 from "./assets/audios/HistoriaProyector1.mp3";
import HistoriaProyector3 from "./assets/audios/HistoriaProyector2.mp3";
import HistoriaProyector1 from "./assets/audios/HistoriaProyector3.mp3";
import HistoriaLinterna3 from "./assets/audios/HistoriaLinterna1.mp3";
import HistoriaLinterna2 from "./assets/audios/HistoriaLinterna2.mp3";
import HistoriaLinterna1 from "./assets/audios/HistoriaLinterna3.mp3";

const GaleriaPage = () => {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const id = useSelector((state) => state.id.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerImgs(id);
        const formattedData = data ? Object.values(data) : [];
        setDatos(formattedData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  const handlers = useSwipeable({
    onSwipedLeft: () => cambiarMedio("siguiente"),
    onSwipedRight: () => cambiarMedio("anterior"),
  });

  const handleButtonClick = () => {
    navigate("/puzzle");
  };

  const cambiarMedio = (direccion) => {
    setIndiceActivo((prevIndex) => {
      if (direccion === "siguiente") {
        return (prevIndex + 1) % datos.length;
      } else {
        return (prevIndex - 1 + datos.length) % datos.length;
      }
    });
  };

  if (error) {
    return <div>Error al cargar los datos: {error}</div>;
  }

  const obtenerAudio = () => {
    if (id === "camara") {
      switch (indiceActivo) {
        case 0:
          return HistoriaCamara1;
        case 1:
          return HistoriaCamara2;
        case 2:
          return HistoriaCamara3;
        default:
          return HistoriaCamara1;
      }
    } else if (id === "proyector") {
      switch (indiceActivo) {
        case 0:
          return HistoriaProyector1;
        case 1:
          return HistoriaProyector2;
        case 2:
          return HistoriaProyector3;
        default:
          return HistoriaProyector1;
      }
    } else if (id === "linterna") {
      switch (indiceActivo) {
        case 0:
          return HistoriaLinterna1;
        case 1:
          return HistoriaLinterna2;
        case 2:
          return HistoriaLinterna3;
        default:
          return HistoriaLinterna1;
      }
    }
  };

  return (
    <div className="galeria-container" {...handlers}>
      <div className="button-exit">
        <button className="button-regresar" onClick={() => navigate("/puzzle")}>
          <img src={butonback} alt="Regresar" />
        </button>
      </div>
      <div className="imagen-container">
        <button onClick={() => cambiarMedio("anterior")} aria-label="Anterior">
          <img src={LeftArrow} alt="Anterior" />
        </button>
        <div className="image-and-description">
          {datos.length > 0 ? (
            <div className="medio">
              {datos[indiceActivo].type === 'imagen' ? (
                <img src={datos[indiceActivo].img} alt={datos[indiceActivo].descripcion} className="media-element" />
              ) : (
                <video controls className="media-element">
                  <source src={datos[indiceActivo].img} type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video.
                </video>
              )}
              <p className="descripcion">{datos[indiceActivo].descripcion}</p>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <button onClick={() => cambiarMedio("siguiente")} aria-label="Siguiente">
          <img src={RightArrow} alt="Siguiente" />
        </button>
      </div>
      <div className='filmy-galery'>
        <img src={filmy} alt="Filmy" />
        <CustomButton text="¿Y si me armas?" onClick={handleButtonClick} color="white" size="small" fontSize="medium" fontFamily="sans-serif" outline="1px solid black" />
      </div>
      {datos.length > 0 && (
        <AudioControls audioSrc={obtenerAudio()} />
      )}
    </div>
  );
};

export default GaleriaPage;





