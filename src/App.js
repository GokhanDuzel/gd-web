import './App.css';
import About from './components/AboutMe/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className='app'>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
