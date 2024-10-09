import React, { useState } from 'react';
import './FloatingButton.css'; // Importa los estilos

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el menú si se hace clic fuera de él
  const handleClickOutside = (event) => {
    if (!event.target.closest('.floating-button-container')) {
      setIsOpen(false);
    }
  };

  // Escucha los clics fuera del botón
  React.useEffect(() => {
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
          <ul><li><p><strong>Idioma</strong></p><select><option defaultChecked>Español</option>
          <option>Inglés</option></select></li>
          <a href="#">Opción 2</a>
          <a href="#">Opción 3</a>
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
