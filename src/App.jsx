import './App.css'
import Header from './features/Header/Header.jsx'
import AboutMe from './features/AboutMe/AboutMe.jsx'
import Experience from './features/Experience/Experience.jsx'
import Projects from './features/Projects/Projects.jsx'
import Contact from './features/Contact/Contact.jsx'



function App() {
  return (
    <>
      <Header />
      <section>
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
      </section>

      <footer className="p-16">
          <p className="text-white" data-section="footer" data-value="description">2023 Javier Úbeda Portafolio</p>
      </footer>
    </>
  )
}

export default App
