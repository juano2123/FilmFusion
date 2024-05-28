import React from 'react';
import './AvisoAR.css'; // Asegúrate de que la ruta al archivo CSS es correcta
import closeIcon from './assets/Cancel.svg'; // Asegúrate de ajustar la ruta
import warningIcon from './assets/Error.svg'; // Asegúrate de ajustar la ruta
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

const AvisoAR = ({ onClose, onAccept }) => {
    const navigate = useNavigate();
  
  
  
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <img src={closeIcon} alt="Cerrar" className="close-button" onClick={onClose} />
        <img src={warningIcon} alt="Aviso" className="icon-warning" />
        <p className="popup-text">
          Lamentamos informarte que la experiencia de realidad aumentada podría no estar disponible en tu dispositivo debido a limitaciones técnicas. Nos disculpamos por cualquier inconveniente y te agradecemos tu comprensión.
        </p>
        <CustomButton onClick={onClose} text="Aceptar" color="grey" size="small" fontSize="small" fontFamily="sans-serif" outline="0px solid black" style={{ width: '150px', height: '40px' }}/>
      </div>
    </div>
  );
};

export default AvisoAR;
