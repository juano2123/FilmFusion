// AudioControls.js

import React from 'react';
// Importa tus iconos SVG
import { ReactComponent as PlayIcon } from './Assets/play.svg';
import { ReactComponent as PauseIcon } from './Assets/pause.svg';
import { ReactComponent as BackwardIcon } from './Assets/backward.svg';
import { ReactComponent as ForwardIcon } from './Assets/foward.svg';
import './AudioControls.css'; // Asegúrate de tener este archivo para los estilos

const AudioControls = ({ onPlayPauseClick, playing, onBackwardClick, onForwardClick }) => {
  return (
    <div className="audio-controls">
        <div className="progress-bar-container">
    <div className="progress-bar"></div>
 
        
      {/* Botón Backward */}
      <button onClick={onBackwardClick} className="control-button">
        <BackwardIcon />
      </button>

      {/* Botón Play/Pause */}
      <button onClick={onPlayPauseClick} className="control-button">
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>

      {/* Botón Forward */}
      <button onClick={onForwardClick} className="control-button">
        <ForwardIcon />
      </button>
    </div>
    </div>
  );
};

export default AudioControls;
