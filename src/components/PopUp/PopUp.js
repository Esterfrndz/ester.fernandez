import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './PopUp.css';

function PopUpCV() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Parámetros del correo con archivo adjunto
    const templateParams = {
      to_email: email, // Correo del destinatario
      message: "Se ha enviado correctamente",
      
    };

    emailjs.send(
      'service_v2vgimn',  // Reemplaza con tu serviceID
      'template_0j6ewpw', // Reemplaza con tu templateID
      templateParams,
      'bxU73FeiR37_JnQNo' // Reemplaza con tu userID
    )
    .then((result) => {
      console.log(result.text);
      alert('Mensaje enviado correctamente');
    }, (error) => {
      console.log(error.text);
      alert('Error al enviar el correo');
    });

    setIsOpen(false);
  };

  return (
    isOpen && (
      <motion.div
        className="popup"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <div className="popup_content">
          

          <div className="content_text">
            <h2>
              <strong>¿Quieres recibir mi CV?</strong>
            </h2>
          
            <p className='description'>
              Recibe por correo electrónico mi CV más detallado y con toda la información sobre mi experiencia laboral y mi formación.
            </p>
            <p className='email'>👇Introduce tu correo electrónico👇</p>
            <form onSubmit={sendEmail}>
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
              /> 
              <button type="submit" className="subs-btn"><strong>Enviar</strong></button>
              <button type="button" className="close-btn" onClick={closePopup}>
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
