import React from 'react';
import './AvisoComponente.css'; // Asegúrate de que la ruta sea correcta
import imagenFilmy from './componetes/filmy.png'; 

const AvisoComponente = () => {
  return (
    <div className="filmy">
        <img src={imagenFilmy} alt="Imagen descriptiva" className="avisoComponenteImagen" />
    
    <div className="avisoComponenteContainer">
    
      <div className="avisoComponenteTexto">
        <p>¡Hola! Soy Filmy, tu amigo digital. 🎥✨</p>
        <p>Parece que estás navegando desde un dispositivo que no es móvil.</p>
        <p>Nuestra experiencia única está diseñada para ser disfrutada en la comodidad de tu móvil. 📱💫</p>
        <p>Saca tu teléfono y déjate sorprender. ¡Las mejores aventuras te esperan allí! 🚀❤️</p>
      </div>
    </div>
    </div>
  );
};

export default AvisoComponente;

