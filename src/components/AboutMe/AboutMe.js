import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import './AboutMe.css';

function AboutMe({ fadeInUp }) {
  return (
    <motion.section className="mb-16 aboutMe-container" {...fadeInUp}>
      <h2 className="mb-4 text-2xl font-semibold">Sobre mí</h2>
      <p className="text-gray-300 text"> 
      Soy una desarrolladora web a la que le encanta la tecnología y el diseño de sitios web. Mi objetivo es crear experiencias digitales que sean divertidas, útiles y bien diseñadas. Quiero seguir aprendiendo y probando cosas nuevas para mejorar en mi trabajo. Cada proyecto es una oportunidad para mejorar y crear nuevas ideas que hagan que el sitio web sea más fácil y amigable para el usuario.<br></br><br></br>

      La tecnología cambió mi vida y quiero vivir de ello, dedicándome a crear experiencias digitales atractivas, funcionales y optimizadas.
      </p>
    </motion.section>
  );
}

// Establece defaultProps para garantizar que fadeInUp no sea undefined
AboutMe.defaultProps = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
};

// Valida el tipo de prop si usas PropTypes
AboutMe.propTypes = {
  fadeInUp: PropTypes.object,
};

export default AboutMe;
