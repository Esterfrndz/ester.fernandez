import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './PopUp.css';

function PopUpCV() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <motion.div
        className="popup"
        initial={{ scale: 0 }}
        animate={{ rotate:360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <div className="popup_content">
          <div className="content_img col-md-6">
          </div>

          <div className="content_text col-md-6">
            <h2>
              <strong>¿Quieres recibir mi CV?</strong>
            </h2>
          
            <p className='description'>
              Recibe por correo electrónico mi CV más detallado y con toda la información sobre mi experiencia laboral y mi formación.
            </p>
            <p>👇Introduce tú correo electrónico👇</p>
            <form>
              <input type="email" placeholder="Correo electrónico" /> 
              <button className="subs-btn"><strong>Enviar</strong></button>
              <button className="close-btn" onClick={closePopup}>
                X
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    )
  );
}

export default PopUpCV;
