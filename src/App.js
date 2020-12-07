import React from 'react';
import "./styles/index.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSecion";
import Contact from "./components/Contact";
import OpeningEffect from "./components/OpeningEffect";


function App() {
  return (
    <div className="App">
      <OpeningEffect />
      <Nav />
      <Header />
      <AboutMe />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
