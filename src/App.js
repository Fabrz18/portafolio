//import logo from './platzi.webp';
import './App.css';
import FillBlank from './body/fillblank.jsx';
import BotoomFooter from './components/bottomfooter.jsx';
import Proyectos from './components/myprojects.jsx';
import Carousel from './components/carrusel.jsx';
function App() {

  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <ul id='name'>
            <code>Fabrizio Garro</code>
          </ul>
          <ul id='resume'>
            <a
             href="./resume.pdf"  download={''}
             //Con este onclick se esta "deshabilitando" el boton descargar
             onClick={(e) => { 
              e.preventDefault();
             }}
             >
              Resume
            </a>
          </ul>
        </nav>
        <div className='presentation'>
        <h1> Welcome to MyPortfolio</h1>
        <p>Estoy agradecido que revises mi portafolio!</p>
        </div>
      </header>
      <main>
      <div id='aboutme' className='card'>
        <h3>About Me</h3>
        <p>
        Hablando un poco de mi, soy estudiante de la carrera de ingeniería de sistemas en la UPC, actualmente tengo 18 años y resido en Lima con disponibilidad Inmediata. Además, me encanta divulgar sobre tecnologías y ciberseguridad con amigos. En adición, soy un autodidacta que busca desarrollar nuevas o perfeccionar el manejo de mi mis conocimientos teóricos y prácticos.
        </p>
        <div className='main-contacts'>
        <div className='main-links' id='github'>
          
          <a href='https://github.com/Fabrz18' target='_blank' rel='noopener noreferrer'>
            <p>Mi GitHub</p> <img src="./9758218.svg" alt='link'/>
          </a>
          </div>
          <div className='main-links' id='github'>
          
          <a href='https://github.com/Fabrz18' target='_blank' rel='noopener noreferrer'>
            <p>Mi LinkedIn</p> <img src="./9758218.svg" alt='link'/>
          </a>
          </div>
        </div>
        </div>
        <FillBlank/>
        <div className='card'>

        <Proyectos/>
        <Carousel />
        </div>
      </main>
      <FillBlank />
      <hr /> 
      <footer>
        <BotoomFooter />
      </footer>
    </div>
  );
}

export default App;
