import React from 'react';
import '../Header/header.css';
import { motion } from 'framer-motion';
import foto from '../assets/perfil.png';


function Header() {
  return (
    <motion.header
      className="mb-16 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={foto}
        alt="Profile Picture"
        width={150}
        height={150}
        className="mx-auto rounded-full"
      />

      <motion.h1
        className="mt-4 text-4xl font-bold titulo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Ester Fernández
      </motion.h1>
      <motion.p
        className="mt-2 text-xl text-gray-400 titulo2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Frontend Developer
      </motion.p>
    </motion.header>
  );
}

export default Header;
