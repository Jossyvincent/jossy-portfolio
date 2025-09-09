import About from './components/About';
import Footer from './components/Footer';
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Card from "./components/Card";
function App() {
  

  return (
    <>
      <NavBar/>
      <section id="home">
        <HomePage/>
      </section>
      <section id="about">
        <About/>
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
