import React from 'react';
import Typewriter from 'typewriter-effect';
import './header.css';
import { motion } from 'framer-motion';
import foto from '/Users/esterfernandez/portfolioFrndz/portfolio.frndz/src/assets/perfil.png';


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

      
        <Typewriter
          options={{
            loop: true,
            delay: 75,
           
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span style="color: #FFFFFF;">Frontend Developer </span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span style="color: #FFFFFF;">Tech Person  </span>')
              .start();
          }}
        />
      

      {/* <motion.p
        className="mt-2 text-xl text-gray-400 titulo2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Frontend Developer
      </motion.p> */}
    </motion.header>
  );
}

export default Header;
