import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./galeria.css"; // Asegúrate de tener este archivo CSS
import obtenerImagenUrl from "../../firebase/config"; // Ajusta la ruta
import LeftArrow from "./assets/left.svg";
import RightArrow from "./assets/right.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import butonback from "./assets/LeftCircleOutlined.svg";
import { useNavigate } from "react-router-dom";
import filmy from "./assets/SelcciónArchivosCompleta.gif";

const GaleriaPage = () => {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [imagenes, setImagenes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function cargarImagenes() {
      try {
        const urls = await Promise.all([
          obtenerImagenUrl("pentax/Foto 1 - Cataras del Niagara.png"),
          obtenerImagenUrl("pentax/Foto 2 - Guitarra.png"),
          obtenerImagenUrl("pentax/Foto 3 - Girasoles.png"),
        ]);
        setImagenes(
          urls.map((url, index) => ({
            src: url,
            descripcion: `Descripción ${index + 1}`, // Puedes personalizar la descripción aquí
          }))
        );
      } catch (error) {
        console.error("Error al cargar imágenes:", error);
      }
    }
    cargarImagenes();
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => cambiarImagen("siguiente"),
    onSwipedRight: () => cambiarImagen("anterior"),
  });

  const handleButtonClick = () => {
    navigate("/objeto");
  };

  const cambiarImagen = (direccion) => {
    if (direccion === "siguiente") {
      setIndiceActivo((prevIndex) => (prevIndex + 1) % imagenes.length);
    } else {
      setIndiceActivo(
        (prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length
      );
    }
  };

  if (!imagenes.length) return <div>Cargando imágenes...</div>;

  return (
    <div className="galeria-container">
      <div className="button-exit">
        <button className="button-regresar">
          <img src={butonback} onClick={handleButtonClick} />
        </button>
      </div>
      <div {...handlers} className="imagen-container">
        <button onClick={() => cambiarImagen("anterior")} aria-label="Anterior">
          <img src={LeftArrow} alt="Anterior" />
        </button>
        <div className="image-and-description">
          <img
            src={imagenes[indiceActivo].src}
            alt={`Imagen ${indiceActivo + 1}`}
          />{" "}
          <div className="descripcion">
            {imagenes[indiceActivo].descripcion}
          </div>
        </div>
        <button
          onClick={() => cambiarImagen("siguiente")}
          aria-label="Siguiente"
        >
          <img src={RightArrow} alt="Siguiente" />
        </button>
      </div>
      <div className="filmy-galery">
        <img src={filmy} alt="" />
      <div className="button-armar">
{/* <CustomButton text={"¿Y si me armas?"}/> */}
      </div>
      </div>

    </div>
  );
};

export default GaleriaPage;
