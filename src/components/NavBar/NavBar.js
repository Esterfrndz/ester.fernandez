import React, { useState, useEffect } from 'react';
import './NavBar.css'; // Asegúrate de crear este archivo para los estilos
import {Divider} from "@nextui-org/react";


const Navigation = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNav = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Hacia abajo
        setShowNav(false);
      } else {
        // Hacia arriba
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNav);
    return () => {
      window.removeEventListener('scroll', controlNav);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navigation ${showNav ? 'nav-visible' : 'nav-hidden'}`}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <Divider orientation="vertical" className='divi' />
        
        <li>
          <a href="#about">Sobre mi</a>
        </li>
        <Divider orientation="vertical" className='divi' />
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <Divider orientation="vertical" className='divi' />
        <li>
          <a href="#skills">Skills</a>
        </li>
        <Divider orientation="vertical" className='divi' />
        <li>
          <a href="#experience">Experiencia</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
