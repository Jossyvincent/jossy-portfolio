import React from "react";
import Card from "./components/Card";
import About from './components/About';
import Footer from './components/Footer';
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
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
        <Contact/>
      </section>
      <Footer/>
    </>
  )
}

export default App
