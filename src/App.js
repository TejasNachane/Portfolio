import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { portfolioData } from './data/portfolioData';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { settings } = portfolioData;

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Navbar />
        <About />
        <Skills />
        {settings.showExperience && <Experience />}
        {settings.showEducation && <Education />}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
