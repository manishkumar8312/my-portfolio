import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from './components';
import { Hero, About, Skills, Projects, Experience, Contact } from './sections';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-dark">
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
