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
import filmy from "./assets/Sin título-1.svg"
import { useSelector } from "react-redux";

const GaleriaPage = () => {
  const [indiceActivo, setIndiceActivo] = useState(0);

  const navigate = useNavigate();

  const [datos, setDatos] = useState([]);;
  const [error, setError] = useState(null);
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
console.log(datos)
  
  // useEffect(() => {
  //   async function cargarMedios() {
  //     const mediosInfo = [
  //       { path: "pentax/Foto 1 - Cataras del Niagara.png", descripcion: "Fotógrafo: gmushinsky, Año: 2019, Cámara: Pentax K1000", tipo: 'imagen'  },
  //     { path: "pentax/Foto 2 - Guitarra.png", descripcion: "Fotógrafo: fivedayforecast, Año: 2011, Cámara: Pentax K1000", tipo: 'imagen'  },
  //     { path: "pentax/Foto 3 - Girasoles.png", descripcion: "Fotógrafo: bravopires, Año: 2013, Cámara: Pentax K1000" , tipo: 'imagen' },
  //     { path: "pentax/Diapositiva astronomica.png", descripcion: "Diapositivas astronómicas mecánicas, Año: 1880, Autor: Baker of Holborn" ,tipo: 'imagen' },
  //     { path: "pentax/Diapositiva indumentaria real.png", descripcion: "Diapositivas Indumentaria real, Siglo:XIX, Autor: Desconocido", tipo: 'imagen'  },
  //     { path: "pentax/Diapositiva tribus africanas.png", descripcion: "Diapositivas colonias africanas, Siglo:XIX, Autor: Desconocido", tipo: 'imagen'  },
  //     { path: "pentax/Tom and Jerry - Jolly Fish (1932-recortado).mp4", descripcion: "Fragmento de película: Tom y Jerry, Años: 1931, Autor: Amadee J. Van Beuren", tipo: 'video' },
  //     { path: "pentax/high flyers (recortado).mp4", descripcion: "Fragmento de película: Abbott and Costello in High Flyers, Año: 1945, Autor: Castle Films", tipo: 'video' },
  //     { path: "pentax/lion around.mp4", descripcion: "Fragmento de película: Donald Duck: Lion Around, Año:1950, Autor: Walt Disney", tipo: 'video' }
  //     ];

  //     const resultados = await Promise.all(
  //       mediosInfo.map(item => obtenerImagenUrl(item.path))
  //     );
  //     setMedios(
  //       resultados.map((url, index) => ({
  //         src: url,
  //         descripcion: mediosInfo[index].descripcion,
  //         tipo: mediosInfo[index].tipo
  //       }))
  //     );
  //   }

  //   cargarMedios();
  // }, []);

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

  // if (!medios.length) return <div>Cargando medios...</div>;

  return (
    <div className="galeria-container" {...handlers}>
      <div className="button-exit">
        <button className="button-regresar" onClick={handleButtonClick}>
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
      <AudioControls />
    </div>
  );
};

export default GaleriaPage;




