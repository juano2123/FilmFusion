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
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      audioRef.current.load(); // Cargar el nuevo src
    } else {
      audioRef.current = new Audio(audioSrc);
    }

    const updateProgress = () => {
      if (audioRef.current && audioRef.current.duration) {
        const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(progress);
      }
    };

    const handleError = (e) => {
      console.error('Error al cargar el audio:', e);
      setPlaying(false);
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);
    audioRef.current.addEventListener('error', handleError);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress);
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current.pause();
      }
    };
  }, [audioSrc]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error al intentar reproducir el audio:', error);
          setPlaying(false);
        });
      }
      setPlaying(!playing);
    }
  };

  const handleBackward = () => {
    if (audioRef.current) {
      const newTime = Math.max(0, audioRef.current.currentTime - 10);
      audioRef.current.currentTime = newTime;
      setProgress((newTime / audioRef.current.duration) * 100);
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      const newTime = Math.min(audioRef.current.duration, audioRef.current.currentTime + 10);
      audioRef.current.currentTime = newTime;
      setProgress((newTime / audioRef.current.duration) * 100);
    }
  };

  return (
    <div className="audio-controls">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          <div className="progress-indicator" style={{ left: `${progress}%` }}></div>
        </div>
      </div>

      <div className="control-buttons-container">
        <button onClick={handleBackward} className="control-buttonn">
          <BackwardIcon />
        </button>
        <button onClick={togglePlayPause} className="control-buttonn">
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button onClick={handleForward} className="control-buttonn">
          <ForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default AudioControls;

