import React, { useState, useEffect } from 'react';
import { HomePage, ProjectPage, ResumePage } from './pages/';
import { Navbar, HamburgerMenu, Footer } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import clubData from './personalDatas.json';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {isMobile ? (
          <HamburgerMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} name={clubData.main.name} />
        ) : (
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} name={clubData.main.name} />
        )}
        <Routes>
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
          <Route path="/projects" element={<ProjectPage isDark={isDarkMode}/>} />
          <Route path="/resume" element={<ResumePage isDark={isDarkMode}/>} />
        </Routes>
        <Footer isDarkMode={isDarkMode} className="fixed bottom-0 w-full" />
      </div>
    </Router>
  );
}

export default App;
