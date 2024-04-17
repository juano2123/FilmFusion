import React, { useState } from "react";
import "./barAr.css"; // Asumiendo que toggle.css está incluido o sus estilos son parte de App.css

function BarAr() {
  // Estado para manejar el toggle
  const [toggle, setToggle] = useState(false);

  // Función para cambiar el estado del toggle
  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="app"
    >
      {/* Contenedor del Toggle */}
      <div className="toggle-container" onClick={handleToggleChange}>
        {/* Botón del Toggle, cambia de clase y texto según el estado */}
        <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>
          {toggle ? "Object" : "AR"}
        </div>
      </div>
    </div>
  );
}

export default BarAr;