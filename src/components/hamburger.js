import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // CSS class for the container div
  const containerClass = isMenuOpen
    ? 'relative h-auto bg-gray-900'
    : 'relative bg-gray-900'; // Set the height to auto when the menu is open

  const textStyle = {
    fontFamily: "'Mulish', sans-serif",
  };

  return (
    <div className={containerClass}>
      <div className='flex'>
        <button
          onClick={toggleMenu}
          className="block p-2 text-xl text-gray-300 hover:text-white"
        >
          &#9776;
        </button>
        <div className='flex items-center justify-center px-24'>
          <NavLink
            to="/"
            className="hover:underline hover:text-blue-900"
            onClick={toggleMenu} // Close the menu when a link is clicked
          >
            <p style={textStyle} className='text-xl text-white'>Arijit Chakma</p>
          </NavLink>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed w-full bg-gray-900 border-t shadow-md p-2 block">
          <ul className="block justify-center text-center">
            <li className="mx-4">
              <NavLink
                to="/projects"
                className="text-white hover:underline"
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                Projects
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to="/resume"
                className="text-white hover:underline"
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                Resume
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to="/contact"
                className="text-white hover:underline"
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
