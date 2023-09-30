import React, { useState, useEffect } from 'react';
import { HomePage, ProjectPage } from './pages/';
import { Navbar, HamburgerMenu, Footer } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDarkMode, setIsDarkMode] = useState(false); // Initialize the dark mode state

  // Function to handle window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Add a resize event listener when the component mounts
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div>
        {isMobile ? (
          // Render the HamburgerMenu component for mobile screens
          <HamburgerMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        ) : (
          // Render the Navbar component for larger screens
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        )}
        <Routes>
          <Route
            path="/"
            element={<HomePage isDarkMode={isDarkMode} />} // Pass isDarkMode as a prop to HomePage
          />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
      <div>
        <Footer isDarkMode={isDarkMode}/>
      </div>
      
    </Router>
  );
}

export default App;
