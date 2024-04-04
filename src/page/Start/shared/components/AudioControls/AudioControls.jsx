import React, { useEffect, useRef, useState } from 'react';
// Importa tus iconos SVG
import { ReactComponent as PlayIcon } from './Assets/play.svg';
import { ReactComponent as PauseIcon } from './Assets/pause.svg';
import { ReactComponent as BackwardIcon } from './Assets/backward.svg';
import { ReactComponent as ForwardIcon } from './Assets/foward.svg';
import './AudioControls.css'; // Asegúrate de tener este archivo para los estilos

const AudioControls = ({ audioSrc }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();

  // Actualiza el progreso del audio
  const updateProgress = () => {
    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progress);
  };

  // Manejador de Play/Pause
  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  // Manejador de retroceso
  const handleBackward = () => {
    const newTime = Math.max(0, audioRef.current.currentTime - 2);
    audioRef.current.currentTime = newTime;
    updateProgress();
  };

  // Manejador de avance rápido
  const handleForward = () => {
    const newTime = Math.min(audioRef.current.duration, audioRef.current.currentTime + 2);
    audioRef.current.currentTime = newTime;
    updateProgress();
  };

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  // Escuchar el evento 'timeupdate' para actualizar el progreso
  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', updateProgress);

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  // Efecto para limpiar el intervalo y el audio al desmontar el componente
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    };
  }, []);

  return (
    <div className="audio-controls">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          <div className="progress-indicator" style={{ left: `${progress}%` }}></div>
        </div>
      </div>

      <div className="control-buttons-container">
        <button onClick={handleBackward} className="control-button">
          <BackwardIcon />
        </button>
        <button onClick={togglePlayPause} className="control-button">
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button onClick={handleForward} className="control-button">
          <ForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default AudioControls;

