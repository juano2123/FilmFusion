import React from "react";
import "./BarAr.css"; // Asumiendo que toggle.css está incluido o sus estilos son parte de App.css

function BarAr({ toggle, onToggleChange }) {
  return (
    <div className="app">
      {/* Contenedor del Toggle */}
      <div className="toggle-container" onClick={onToggleChange}>
        {/* Botón del Toggle, cambia de clase y texto según el estado */}
        <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>
          {toggle ? "AR" : "Objeto"}
        </div>
      </div>
    </div>
  );
}

export default BarAr;
