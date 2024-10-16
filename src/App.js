import './App.css';

import Header from './components/Header/header.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';
import Experience from './components/Experience/Experience.js';
import PopUpCv from './components/PopUp/PopUp.js';
import FloatingButton from './components/FloatingButton/FloatingButton.js';
import Navigation from './components/NavBar/NavBar.js';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="main-container">
        {/* <PopUpCv/> */}

        <FloatingButton/>
        <section id="home">
          <Header />
        </section>
        <section id="about">
          <AboutMe fadeInUp={fadeInUp} />
        </section>
        <section id="projects">
          <Projects fadeInUp={fadeInUp} />
        </section>
        <section id="skills">
          <Skills fadeInUp={fadeInUp} stagger={stagger} />
        </section>
        <section id="experience">
          <Experience fadeInUp={fadeInUp} />
        </section>
      </main>
    </div>
  );
}

export default App;
