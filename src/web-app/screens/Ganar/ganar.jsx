import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import MapIcon from '../../components/CustomButton/assets/map.svg';
import SquareWithContent from '../../components/SquareWithContent/SquareWithContent';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import FilmyFinal from "./assets/filmy_final.png"

import { useNavigate } from "react-router-dom";
import './ganar.css'; // Asegúrate de crear este archivo CSS para estilos

const Ganar = () => {

const navigate = useNavigate();

const handleButtonClick = () => {
  navigate("/objeto");
};

    return (
        <div className="screen">
            <div className="top-section">
            <CustomButton onClick={handleButtonClick} text="RECLAMA TU PREMIO" color="white" size="large" fontSize="medium" fontFamily outline="1px solid black" imageUrl={MapIcon} />
            </div>
            <div className="middle-section">
                <img src={FilmyFinal} alt="Filmy" className="filmy-image" />
            </div>
            <div className="bottom-section">
            <SquareWithContent size="large" color="rgba(19, 6, 35, 0.71)" text1="¡FELICIDADES!" text2="¡Has armado el rompecabezas! Comparte tu experiencia en:" />
                <SocialMediaIcons />
            </div>
        </div>
    );
};

export default Ganar;
