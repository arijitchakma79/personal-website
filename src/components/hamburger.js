import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function HamburgerMenu({ name, isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // CSS class for the container div
  const containerClass = isMenuOpen
    ? 'relative h-auto bg-gray-900'
    : 'relative bg-gray-700'; // Set the height to auto when the menu is open

  // Define the text color classes based on isDarkMode
  const menuTextColorClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const darkModeTextColorClass = isDarkMode ? 'text-gray-800' : 'text-white';

  const textStyle = {
    fontFamily: "'Mulish', sans-serif",
  };

  return (
    <div className={containerClass}>
      <div className='flex'>
        <button
          onClick={toggleMenu}
          className={`block p-2 text-xl text-gray-200 ${menuTextColorClass} hover:text-white`}
        >
          &#9776;
        </button>
        <div className='flex items-center justify-center px-24'>
            <p style={textStyle} className={`text-md text-gray-200 ${menuTextColorClass}`}>{name}</p>
        </div>
        <div className="flex ml-auto items-center">
          <div className={`border ${isDarkMode ? 'border-white' : 'border-gray-800'} rounded-md ml-2 px-2`}>
            <button
              onClick={toggleDarkMode}
              className={`block p-2 text-md ${darkModeTextColorClass} hover:text-white`}
            >
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`fixed w-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-t shadow-md p-2 block`}>
          <ul className="block justify-center text-center">
            <li className="mx-4">
                <NavLink
                  to="/personal-website/"
                  className={`text-md ${menuTextColorClass} hover:underline`}
                  onClick={toggleMenu} // Close the menu when a link is clicked
                >
                  Home
                </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to="/personal-website/projects"
                className={`text-md ${menuTextColorClass} hover:underline`}
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                Projects
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to="/personal-website/resume"
                className={`text-md ${menuTextColorClass} hover:underline`}
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
