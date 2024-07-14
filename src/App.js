import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import ScrollUp from './components/scrollup/ScrollUp';
import Skills from './components/skills/Skills';
import Preloader from './components/Preloader/Preloader';
import ProjectCard from './components/ProjectCard/ProjectCard';






const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the timeout to your needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className={loading ? 'hidden' : ''}>
        <Header />

        <main className="main">
          <Home />
          
          <Skills />
          <Qualification />
          <ProjectCard />
          
          <Contact />
        </main>

        <Footer />
        <ScrollUp />
      </div>
    </>
  );
};

export default App;
