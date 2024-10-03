import './App.css';
import Header from './Header/header.js';
import AboutMe from './AboutMe/AboutMe.js';
import Projects from './Projects/Projects.js';
import Skills from './Skills/Skills.js';
import Experience from './Experience/Experience.js';

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
    <Header/>
    <AboutMe fadeInUp={fadeInUp}/>
    <Projects fadeInUp={fadeInUp} />
    <Skills fadeInUp={fadeInUp} stagger={stagger} />
    <Experience fadeInUp={fadeInUp}  />
    </main>

    </div>
  );
}

export default App;
