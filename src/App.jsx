import './App.css'
import Header from './features/Header/Header.jsx'
import AboutMe from './features/AboutMe/AboutMe.jsx'
import Experience from './features/Experience/Experience.jsx'
import Projects from './features/Projects/Projects.jsx'
import Skills from './features/Skills/Skills.jsx'
import Footer from "./features/Footer/Footer.jsx"


function App() {
  return (
    <main className="mx-auto w-full xl:w-[900px]">
      <Header />
      <section>
          <AboutMe />
          <Experience />
          <Skills />
          <Projects />
      </section>
      <Footer />
    </main>
  )
}

export default App
