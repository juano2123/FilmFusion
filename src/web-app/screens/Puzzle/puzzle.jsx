import React from 'react';
import MissingObject from '../../components/MissingObject/missingObject';
import BarAR from '../../components/BarAr/BarAr'; 

import flashImage from './assets/FLASH.png';
import lenteImage from './assets/LENTE.png';
import rolloImage from './assets/ROLLO.png';
import camara from './assets/camara.png';

import './puzzle.css';

const Puzzle = () => {
  const images = [
    flashImage,
    lenteImage,
    rolloImage
  ];

  return (
    <div className="puzzle-container">
    <div className="ar-button-container">
        <BarAR text="Activate AR" />
    </div>
    <div className="object-3d-container">
       <img src={camara} alt="" />
    </div>
    <div className="missing-object-container">
        <MissingObject images={images} />
    </div>
</div>
  );
};

export default Puzzle;
