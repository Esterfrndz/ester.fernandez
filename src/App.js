import './App.css';
import Header from './components/Header/header.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';
import Experience from './components/Experience/Experience.js';
import PopUpCv from './components/PopUp/PopUp.js';
import FloatingButton from './components/FloatingButton/FloatingButton.js';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}


function App() {
  return (
    <div className="App">
      <main className="main-container"> 
      
    <PopUpCv/>
    <FloatingButton/>
    <Header/>
    <AboutMe fadeInUp={fadeInUp}/>
    <Projects fadeInUp={fadeInUp} />
    <Skills fadeInUp={fadeInUp} stagger={stagger} />
    <Experience fadeInUp={fadeInUp}/>
   
    </main>

    </div>
  );
}

export default App;
