import React, { useState, useEffect } from 'react';
import {Switch} from "@nextui-org/switch";
import './FloatingButton.css'; // Importa los estilos

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Cierra el menú si se hace clic fuera de él
  const handleClickOutside = (event) => {
    if (!event.target.closest('.floating-button-container')) {
      setIsOpen(false);
    }
  };

  // Escucha los clics fuera del botón
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="floating-button-container">
      <button onClick={toggleMenu} className="floating-button">+</button>
      {isOpen && (
        <div className="dropdown-content">
          <Switch defaultSelected>
      🌙|🌞
    </Switch>
    <br></br>
    <Switch defaultSelected>
      🇪🇸|🇺🇸
    </Switch>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
